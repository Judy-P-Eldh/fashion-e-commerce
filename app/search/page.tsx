import { fetchFilteredProducts } from "@/lib/data/productdata";
import { Product } from "@/lib/interfaces/product";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const {query} = await searchParams;
  console.log("Sökparametrar:", query);

const products = await fetchFilteredProducts(query);
console.log("Produkter från filtrerad sökning:", products);



 
  return (
    <div>
      {products.length > 0 ? (
        products.map((product: Product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>--- Category: {product.category}</p>
          </div>
        ))
      ) : (
        <p>Inga produkter hittades för valda kategorier.</p>
      )}
    </div>
  );
}
