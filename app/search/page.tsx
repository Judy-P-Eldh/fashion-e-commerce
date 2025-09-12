import ProductCard from "@/components/productcard";
import { fetchFilteredProducts } from "@/lib/data/productdata";
import { Product } from "@/lib/interfaces/product";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const {query} = await searchParams;

const products = await fetchFilteredProducts(query);



 
  return (
    <div>
      {products.length > 0 ? (
        products.map((product: Product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p>Inga produkter hittades för valda kategorier.</p>
      )}
    </div>
  );
}
