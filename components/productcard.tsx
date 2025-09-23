import { Product } from "@/lib/interfaces/product";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "./buybutton";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    // Färgen??
    <article className="flex flex-col justify-between h-full p-5 rounded-lg border-2 border-border-clr shadow-lg bg-dark-bg">
      <Link href={`/products/${product.id}`}>
        <div className="grid text-center">
          <h3>{product.title}</h3>
          <Image
            className="order-first m-auto"
            src={image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
      </Link>
      <div className="flex flex-col items-center text-center">
        <p className="py-2">$ {product.price}</p>
        <BuyButton productName={product.title} />
      </div>
    </article>
  );
}
