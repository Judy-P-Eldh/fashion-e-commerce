import { collections } from "@/lib/data/variables";
import { CollectionKey } from "@/lib/interfaces/product";
import { categoryLabels } from "@/lib/data/variables";
import Link from "next/link";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ selectedCollection?: CollectionKey }>;
}) {
  let { selectedCollection = "women" } = await params;

  return (
    <div className="content-grid mt-5">
      <section className="content flex justify-evenly gap-5 flex-wrap uppercase">
        {Object.keys(collections).map((collection) => {
          return (
            <Link key={collection} href={`${collection}`}>
              <h2
                className={
                  collection === selectedCollection
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }
              >
                {collection}
              </h2>
            </Link>
          );
        })}
      </section>

      <ul className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 gap-6 items-stretch">
        {collections[selectedCollection].map((category) => {
          return (
            <li key={category}>
              <Link href={`${selectedCollection}/${category}`}>
                <article className="flex justify-center items-center h-40 p-5 rounded-lg border-2 border-dark shadow-lg bg-beige-medium">
                  <h3 className="text-center text-3xl">
                    {categoryLabels[category]}
                  </h3>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
