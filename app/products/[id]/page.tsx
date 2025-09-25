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
    </main> */


    <main className="items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full p-6">
        {/* Produktbild */}
        <div className="flex items-center justify-center bg-light">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Produktinfo */}
        <div className="flex flex-col justify-between">
          <header>
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-700 mb-6">{product.description}</p>
          </header>

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">${product.price}</p>
            <BuyButton productName={product.title} />
          </div>
        </div>
    </main>
  );
}
