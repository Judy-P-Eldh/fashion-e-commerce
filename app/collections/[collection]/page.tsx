import { collections } from '@/lib/interfaces/product';
import Link from "next/link"
export default async function Page({ params }: { params: { selectedCollection:  } }) {
  let { selectedCollection } = await params;
  

  return (
    <div>
      <section></section>
      <ul>{
        categories.map((category) => {
            return <li key={category}>
                <Link href={`search?category=${category}`}>{category}</Link>
            </li>
        })
        }</ul>
    </div>
  );
}
