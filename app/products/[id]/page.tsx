import { Product } from "@/lib/interfaces/product";
import { fetchProductById } from "@/lib/data/productdata";
import Image from "next/image";
import { notFound } from "next/navigation";
import BuyButton from "@/components/buybutton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const productId = (await params).id;
  const product: Product = await fetchProductById(productId);

  if (!product) notFound();
  return (
    <main className="min-h-dvh">
      <article>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </article>
      <BuyButton productName={product.title} />
    </main>
  );
}
