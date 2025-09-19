import { fetchProducts } from "@/lib/data/productdata";
import Form from "next/form";
import ProductList from "@/components/productlist";

export default async function Home() {
  const products = await fetchProducts(20);
  const productsArray = Array.isArray(products) ? products : [];
  const errorMessage =
    typeof products === "object" && "message" in products
      ? products.message
      : "Could not load products.";

  return (
    <main className="content-grid">
      <section className="full-width inherit grid bg-[#D6CCC2] py-10">
        <Form className="breakout" action="submit">
          <h2 className="text-2xl mb-5 font-courier-prime">
            Sign up for our newsletter and get 10% off your first order
          </h2>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input type="text" className="bg-white" />
          <button>Sign me up</button>
        </Form>
      </section>

      <section className="content pt-10">
        <h2 className="content text-center text-4xl">
          Browse our best sellers
        </h2>
        {productsArray.length > 0 ? (
          <ProductList products={productsArray.slice(0, 4)} />
        ) : (
          <p>{errorMessage}</p>
        )}
      </section>

      <section className="content pt-10">
        <h2 className="content text-center text-4xl">News</h2>
        {productsArray.length > 0 ? (
          <ProductList products={productsArray.slice(10, 18)} />
        ) : (
          <p>{errorMessage}</p>
        )}
      </section>
    </main>
  );
}
