// app/page.tsx
import { Suspense } from "react";
import ProductList from "./components/ProductList";
import AddToCartButton from "./components/AddToCartButton";

export default function HomePage() {
  return (
    <main>
      <h2>Home</h2>

      {/* Suspense works with Server Components too (streaming) */}
      <Suspense fallback={<p>Loading products…</p>}>
        {/* Server Component: fetched/streamed from server */}
        <ProductList />
      </Suspense>

      <div style={{ marginTop: 16 }}>
        {/* Client Component: interactive */}
        <AddToCartButton productId={1} />
      </div>
    </main>
  );
}
