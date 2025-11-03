import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Next.js SSR + Lighthouse 90+</h1>
      <p className="mt-2 text-gray-600">
        This demo uses an SSR route that fetches at request time and keeps client JS minimal.
      </p>
      <Link
        href="/users"
        className="mt-6 inline-flex rounded-lg px-4 py-2 bg-black text-white"
      >
        View Users (SSR)
      </Link>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Performance</h2>
          <p>Server Components, optimized images, tiny JS.</p>
        </div>
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Accessibility</h2>
          <p>Semantic HTML, alt text, proper headings.</p>
        </div>
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">SEO</h2>
          <p>Clean metadata, fast LCP, stable layout.</p>
        </div>
      </section>
    </main>
  );
}
