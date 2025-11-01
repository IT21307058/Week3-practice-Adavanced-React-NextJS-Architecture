// app/components/ProductList.tsx
// Server Component by default (no "use client")
import Link from "next/link";

type Product = { id: number; title: string };

export default async function ProductList() {
    // Example data fetch (revalidate each 60s)
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
    });
    const products = (await res.json()) as Product[];

    // This markup is rendered on the server and streamed to the client
    return (
        <ul>
            {products.slice(0, 5).map((p) => (
                console.log("product", p.id),
                <li key={p.id}>
                    <Link href={`/products/${p.id}`}>{p.title}</Link>
                </li>
            ))}
        </ul>
    );
}
