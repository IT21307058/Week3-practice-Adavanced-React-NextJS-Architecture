import React, {
    useState,
    useTransition,
    useDeferredValue,
    useMemo,
} from "react";

const allProducts = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Product ${i}`,
}));

function BigList({ items }) {
    console.log("Render BigList");
    return (
        <ul>
            {items.map((p) => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    );
}

export default function ProductSearchOptimized() {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(allProducts);

    // 🧩 useTransition separates urgent (typing) vs non-urgent (filtering)
    const [isPending, startTransition] = useTransition();

    function handleChange(e) {
        const value = e.target.value;
        setQuery(value); // urgent update (input)

        // non-urgent update (filtering)
        startTransition(() => {
            const res = allProducts.filter((p) =>
                p.name.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(res);
        });
    }

    // 🧩 useDeferredValue delays rendering the big list
    const deferredFiltered = useDeferredValue(filtered);
    const isStale = deferredFiltered !== filtered;

    return (
        <div>
            <input
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />

            {(isPending || isStale) && <p>Updating results...</p>}

            <BigList items={deferredFiltered} />
        </div>
    );
}
