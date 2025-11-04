export const revalidate = 10;  

import { fetchUsers } from "@/lib/api";
import UserCard from "@/app/components/UserCard";

export const dynamic = "force-dynamic"; // ensure SSR on every request
export const metadata = {
  title: "Users (SSR) | Next.js",
  description: "Server-rendered users from DummyJSON",
};
// Optionally: export const runtime = "edge"; // lower TTFB if deploying to edge
let BUILD_COUNTER = 0;

export default async function UsersPage() {
  BUILD_COUNTER += 1; // increments only when ISR (re)build happens
  const builtAt = new Date().toISOString();
  const data = await fetchUsers(24);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold mb-4">Users (SSR)</h1>

      <div className="mb-6 rounded-lg border p-3 text-sm text-gray-700">
        <div><strong>Build #</strong>{BUILD_COUNTER}</div>
        <div><strong>Generated at</strong> {builtAt}</div>
        <div><strong>Revalidate</strong> 10s</div>
      </div>

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
