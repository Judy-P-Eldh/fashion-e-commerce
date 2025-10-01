import { fetchProducts } from "@/lib/data/product-data";
import Form from "next/form";
import ProductList from "@/components/product-list";
import SignUpForm from "@/components/sign-up-form";

export default async function Home() {
  const products = await fetchProducts(20);

  const productsArray = Array.isArray(products) ? products : [];
  const errorMessage =
    typeof products === "object" && "message" in products
      ? products.message
      : "Could not load products.";

  return (
    <main className="content-grid">
      <section className="full-width inherit grid bg-beige-medium py-10">
        <div className="content-small">
          <SignUpForm />
        </div>
      </section>

      <section className="content pt-10">
        <h2 className="content text-center">Browse our best sellers</h2>
        {productsArray.length > 0 ? (
          <ProductList products={productsArray.slice(0, 4)} />
        ) : (
          <p>{errorMessage}</p>
        )}
      </section>

      <section className="content pt-10">
        <h2 className="content text-center">News</h2>
        {productsArray.length > 0 ? (
          <ProductList products={productsArray.slice(10, 18)} />
        ) : (
          <p>{errorMessage}</p>
        )}
      </section>
    </main>
  );
}
