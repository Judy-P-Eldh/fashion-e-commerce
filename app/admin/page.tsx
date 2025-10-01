import DeleteButton from "@/components/delete-button";
import { fetchProducts } from "@/lib/data/product-data";
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
        <button className="button my-3">
          <PlusIcon />
          Add product
        </button>
      </section>

      {productsArray.length > 0 ? (
        <ul className="content-small">
          {productsArray.map((product) => (
            <li
              key={product.id}
              className="rounded-sm flex items-center justify-between p-3 nth-[odd]:bg-beige-medium hover:text-red-700"
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
