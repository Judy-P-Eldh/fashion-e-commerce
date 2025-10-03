import { Product } from "@/lib/interfaces/product";
import { fetchProductById } from "@/lib/data/product-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import BuyButton from "@/components/buy-button";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const productId = (await params).id;
  const product: Product = await fetchProductById(productId);

  if (!product) notFound();
  return (
    <article className="content-small m-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg object-cover shadow-lg bg-light"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-2xl font-bold">${product.price}</p>
        <div className="flex-start">
          <BuyButton productName={product.title} />
        </div>
      </div>
    </article>
  );
}
