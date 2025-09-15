import ProductCard from "@/components/productcard";
import { fetchFilteredProducts } from "@/lib/data/productdata";
import { Product } from "@/lib/interfaces/product";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;

  const products = await fetchFilteredProducts(query);

  return (
    <main>
      <section>
        <h2>Products</h2>
        <ul className="grid md:grid-cols-3" id="card-ul">
          {products.length > 0 ? (
            products.map((product: Product) => (
              <li key={product.id}>
                <Link id="product-card" href={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </li>
            ))
          ) : (
            <p>Inga produkter hittades för valda kategorier.</p>
          )}
        </ul>
      </section>
    </main>
  );
}
