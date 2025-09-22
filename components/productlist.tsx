import ProductCard from "@/components/productcard";
import { Product } from "@/lib/interfaces/product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10 gap-3">
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))
      ) : (
        <p>Empty</p>
      )}
    </ul>
  );
}
