import { fetchProducts } from "@/lib/data/productdata"
import { DeleteIcon, Trash, Trash2Icon, TrashIcon } from "lucide-react";

export default async function AdminPage() {
     const products = await fetchProducts();
  const productsArray = Array.isArray(products) ? products : [];
  const errorMessage =
    typeof products === "object" && "message" in products
      ? products.message
      : "Could not load products.";
  return (
  
 <main className="content-grid">
    <h2>Admin page</h2>

    {productsArray.length > 0 ? (
        <ul className="content">
            {productsArray.map((product) => (
                <li className="admin-table flex items-center justify-between p-2 align-text-bottom nth-[odd]:bg-neutral-400 hover:text-red-700">
                    {product.id}, {product.title}
                <button><Trash2Icon strokeWidth={1}
                size={25}/></button>
                </li>
            ))}
        </ul>
           ) : (
             <p>{errorMessage}</p>
           )}    
  </main>
  );
 
}
