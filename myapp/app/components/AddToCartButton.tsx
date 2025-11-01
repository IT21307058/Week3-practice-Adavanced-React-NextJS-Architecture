// app/components/AddToCartButton.tsx
"use client";

import { useState } from "react";

export default function AddToCartButton({ productId }: { productId: number }) {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount((c) => c + 1)}>
            Add to Cart ({count}) — id: {productId}
        </button>
    );
}
