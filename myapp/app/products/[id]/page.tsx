// app/products/[id]/page.tsx
import AddToCartButton from "@/app/components/AddToCartButton";
import { notFound } from "next/navigation";

type Product = { id: number; title: string; description: string };

export default async function ProductPage({ params }: {
  params: Promise<{ id: string }>; // 👈 params is a Promise
}) {
    const { id } = await params; 
    console.log("Server: product id =", id);

    // Guard: id must exist and be numeric
    if (!id || Number.isNaN(Number(id))) {
        notFound(); // renders 404 page
    }

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: "no-store",
    });

    // Guard: HTTP errors
    if (!res.ok) {
        throw new Error(`Failed to fetch product ${id} (status ${res.status})`);
    }

    // Guard: invalid/empty JSON
    let product: Product;
    try {
        product = (await res.json()) as Product;
    } catch {
        throw new Error(`Invalid JSON for product ${id}`);
    }


    return (
        <main>
            <h2>Product #{product.id}</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>

            {/* Client component for interactivity */}
            <AddToCartButton productId={product.id} />
        </main>
    );
}
