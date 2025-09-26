import DeleteButton from "@/components/deleteButton";
import { fetchProducts } from "@/lib/data/productdata";
import { PlusIcon } from "lucide-react";

export default async function AdminPage() {
  const products = await fetchProducts();
  const productsArray = Array.isArray(products) ? products : [];

  const errorMessage =
    typeof products === "object" && "message" in products
      ? products.message
      : "Could not load products.";
  return (
    <main className="content-grid">
      <h2 className="content text-center">Admin page</h2>
      <section className="content-small">
        <button className="flex items-center gap-2 text-sm border-1 p-2 my-2 rounded-sm hover:bg-beige-dark">
          <PlusIcon />
          Add product
        </button>
      </section>

      {productsArray.length > 0 ? (
        <ul className="content-small">
          {productsArray.map((product) => (
            <li
              key={product.id}
              className="rounded-sm flex items-center justify-between p-2 align-text-bottom nth-[odd]:bg-beige-medium hover:text-red-700"
            >
              {product.id}, {product.title}
              <DeleteButton id={product.id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>{errorMessage}</p>
      )}
    </main>
  );
}
