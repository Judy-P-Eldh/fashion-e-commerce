import { Product } from "@/lib/interfaces/product";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "./buybutton";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    <article className="border">
      <Link href={`/products/${product.id}`}>
        <div className="grid">
          <h2>{product.title}</h2>
          <Image
            className="order-first"
            src={image}
            alt={product.title}
            width={400}
            height={400}
          />
          <p>$ {product.price}</p>
        </div>
      </Link>
      <BuyButton productName={product.title} />
    </article>
  );
}
