import React, { useState, useDeferredValue, useMemo } from "react";

const allProducts = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Product ${i}`,
}));

export default function SearchWithDeferred() {
    const [query, setQuery] = useState("");

    // 1️⃣ Create a deferred version of query
    const deferredQuery = useDeferredValue(query);

    // 2️⃣ Use deferred query for the heavy filter
    const filtered = useMemo(() => {
        console.log("Filtering with:", query);
        return allProducts.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    // 3️⃣ Detect if UI is still showing old data
    const isStale = deferredQuery !== query;

    console.log("Rendering with:", query, "Deferred:", deferredQuery, "Stale:", isStale);

    return (
        <div>
            <input
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {isStale && <p>Updating results...</p>}

            <p>Results: {filtered.length}</p>

            <ul>
                {filtered.map((p) => (
                    <li key={p.id}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
}
