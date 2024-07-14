// // app/shop/[category]/[itemId]/page.tsx
// import React from "react";
// import { useParams } from "next/navigation";

// import { ItemType } from "../types"; // Import the ItemType type

// const ItemPage = ({ item }: { item: ItemType }) => {
//     const params = useParams();
//     const { category, itemId } = params;

//     return (
//         <div>
//             <h1>{item.name}</h1>
//             <p>{item.description}</p>
//             <p>Price: ${item.price}</p>
//             {/* Render other item details */}
//         </div>
//     );
// };

// export async function getServerSideProps({ params }) {
//   const { itemId } = params;

//   // Fetch item details from your API or database
//   const res = await fetch(`https://yourapi.com/items/${itemId}`);
//   const item = await res.json();

//   return {
//     props: { item },
//   };
// }

// export default ItemPage;
