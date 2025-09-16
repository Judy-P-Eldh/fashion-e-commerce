import { collections } from '@/lib/data/variables';
import { CollectionKey } from '@/lib/interfaces/product';
import Link from "next/link"
export default async function Page({ params }: { params: { selectedCollection?: CollectionKey } }) {
  let { selectedCollection = "women" } = await params;
  

  return (
    <div>
      <section></section>
      <ul>{
        collections[selectedCollection].map((category) => {
            return <li key={category}>
                <Link href={`search?category=${category}`}>{category}</Link>
            </li>
        })
        }</ul>
    </div>
  );
}
