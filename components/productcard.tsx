import { Product } from "@/lib/interfaces/product";
import Image from "next/image";

export default function ProductCard({product}: {product: Product}) {
    const image = product.images[0];
  return(
    <section id="product-card" className="darker-color-back border-2 text-black align-center">
        <Image src={image} alt={product.title} width={200} height={200} />
        <h2>{product.title}</h2>
        <p>$ {product.price}</p>
    </section>
  );
}