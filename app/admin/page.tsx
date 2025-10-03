import DeleteButton from "@/components/delete-button";
import { fetchProducts } from "@/lib/data/product-data";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
  const products = await fetchProducts();
  const productsArray = Array.isArray(products) ? products : [];

  const errorMessage =
    typeof products === "object" && "message" in products
      ? products.message
      : "Could not load products.";
  return (
    <main className="content-grid">
      <h2 className="text-center">Admin page</h2>

      <section className="content-small">
        <Link className="button my-5 place-self-start" href="admin/create">
          <PlusIcon />
          Add product
        </Link>

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
      </section>
    </main>
  );
}
