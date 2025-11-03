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
    const res = await fetch(url, {
        cache: "no-store",         // true SSR
        // next: { revalidate: 0 }, // equivalent option
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
}
