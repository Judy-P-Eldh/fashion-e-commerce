import { Product } from "@/lib/interfaces/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    <>
      <h2>{product.title}</h2>
      <Image
        className="order-first"
        src={image}
        alt={product.title}
        width={400}
        height={400}
      />
      <p>$ {product.price}</p>
    </>
  );
}
