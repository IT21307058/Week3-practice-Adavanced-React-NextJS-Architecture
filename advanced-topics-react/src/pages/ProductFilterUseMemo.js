import { useMemo, useState } from "react";

const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Monitor", price: 400 },
    { id: 4, name: "Keyboard", price: 80 },
    { id: 5, name: "Phone", price: 1200 },
];

export default function ProductFilter() {
    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState(0);

    const filteredProducts = useMemo(() => {
        console.log("Filtering...");
        return products.filter((p) => {
            return (
                p.name.toLowerCase().includes(search.toLowerCase()) &&
                p.price >= minPrice
            );
        });
    }, [search, minPrice]);

    return (
        <div>
            <input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id}>{p.name} – ${p.price}</li>
                ))}
            </ul>
        </div>
    );
}
