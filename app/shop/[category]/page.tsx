// app/shop/[category]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";

const CategoryPage = ({ items }: { items: any[] }) => {
const params = useParams();
const { category } = params;

return (
    <div>
        <h1>
            {typeof category === "string" ? category.charAt(0).toUpperCase() + category.slice(1) : ""}
        </h1>
        {/* Render list of items for the specific category
        {items.map((item) => (
            <div key={item.id}>{item.name}</div>
        ))} */}
    </div>
);
};

// export async function getServerSideProps({ params }: { params: { category: string } }) {
//     const { category } = params;

//     // Fetch items based on category from your API or database
//     const res = await fetch(`https://yourapi.com/items?category=${category}`);
//     const items = await res.json();

//     return {
//         props: { items },
//     };
// }

export default CategoryPage;
