import Image from "next/image";
import type { User } from "@/lib/api";

export default function UserCard({ user }: { user: User }) {
    const fullName = `${user.firstName} ${user.lastName}`;
    return (
        <article className="rounded-xl border p-4 h-full">
            <h2 className="mt-3 font-semibold">{fullName}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            {user.company?.name ? (
                <p className="text-sm mt-1">Company: {user.company.name}</p>
            ) : null}
        </article>
    );
}
