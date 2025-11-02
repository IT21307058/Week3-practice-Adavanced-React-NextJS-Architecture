import React, { useState, useCallback, memo } from "react";

// ✅ Memoized child component
const ProductItem = memo(function ProductItem({ product, onSelect }) {
    console.log("Render:", product.name);
    return (
        <li onClick={() => onSelect(product)} style={{ cursor: "pointer" }}>
            {product.name}
        </li>
    );
});

const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "KKKK" },
];

export default function ProductListCallback() {
    const [search, setSearch] = useState("");

    // ✅ useCallback returns the same function instance unless dependencies change
    const handleSelect = useCallback((product) => {
        alert(`You selected ${product.name}`);
    }, []); // no dependencies → stable reference forever

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filtered.map((p) => (
                    <ProductItem key={p.id} product={p} onSelect={handleSelect} />
                ))}
            </ul>
        </div>
    );
}
