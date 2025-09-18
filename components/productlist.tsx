import ProductCard from "@/components/productcard";
import { Product } from "@/lib/interfaces/product";
import Link from "next/link";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-4 py-10">
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
