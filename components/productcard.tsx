import { Product } from "@/lib/interfaces/product";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "./buybutton";

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    // Färgen??
    <article className="flex flex-col justify-between h-full p-5 border rounded-3xl bg-[#D6CCC2]">
      <Link href={`/products/${product.id}`}>
        <div className="grid text-center">
          <h2 className="text-2xl">{product.title}</h2>
          <Image
            className="order-first"
            src={image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
      </Link>
      <div className="text-center">
        <p className="py-2">$ {product.price}</p>
        <BuyButton productName={product.title} />
      </div>
    </article>
  );
}
