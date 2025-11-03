import { fetchUsers } from "@/lib/api";
import UserCard from "@/app/components/UserCard";

export const dynamic = "force-dynamic"; // ensure SSR on every request
export const metadata = {
  title: "Users (SSR) | Next.js",
  description: "Server-rendered users from DummyJSON",
};
// Optionally: export const runtime = "edge"; // lower TTFB if deploying to edge

export default async function UsersPage() {
  const data = await fetchUsers(24);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold mb-4">Users (SSR)</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.users.map((u) => (
          <li key={u.id}>
            <UserCard user={u} />
          </li>
        ))}
      </ul>
    </main>
  );
}
