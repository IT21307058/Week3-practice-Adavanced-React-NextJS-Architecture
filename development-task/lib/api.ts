import "server-only";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
    age?: number;
    gender?: string;
    phone?: string;
    company?: { name?: string };
};

type UsersResponse = { users: User[]; total: number; skip: number; limit: number };

export async function fetchUsers(limit = 24): Promise<UsersResponse> {
    const url = `https://dummyjson.com/users?limit=${limit}`;

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const res = await fetch(url, {
        // cache: "no-store",         // true SSR
        next: { revalidate: 10 }, // ISR - Incremental Static Regeneration re-generate every 10 seconds
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}
