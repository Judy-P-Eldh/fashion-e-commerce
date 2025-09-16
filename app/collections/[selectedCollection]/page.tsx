import { collections } from "@/lib/data/variables";
import { CollectionKey } from "@/lib/interfaces/product";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ selectedCollection?: CollectionKey }>;
}) {
  let { selectedCollection = "women" } = await params;

  return (
    <div className="content-grid">
      <section className="content flex justify-evenly">
        {Object.keys(collections).map((collection) => {
          return (
            <Link key={collection} href={`${collection}`}>
              <h2
                className={
                  collection === selectedCollection ? "underline" : ""
                }
              >
                {collection}
              </h2>
            </Link>
          );
        })}
      </section>
      <ul className="breakout grid grid-cols-3">
        {collections[selectedCollection].map((category) => {
          return (
            <li key={category}>
              <Link href={`/search?category=${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
