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
    /*     <main className="min-h-dvh grid">
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
    */

    <main className="max-w-4xl items-center justify-center m-5 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="flex items-center justify-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg object-cover shadow-lg bg-light"
        />
      </div>

      <div className="flex flex-col">
        <div>
          <h2 className="font-bold mb-4">{product.title}</h2>
          <p className="mb-6">{product.description}</p>
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="text-2xl font-semibold">${product.price}</p>
          <BuyButton productName={product.title} />
        </div>
      </div>
    </main>
  );
}
