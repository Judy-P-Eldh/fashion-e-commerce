import { fetchBySearch } from "@/lib/data/productdata";
import ProductList from "@/components/productlist";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query, page = 1 } = await searchParams; // hämtar sökquery och sätter page till 1 som start
  const pageNum = Number(page); // konverterar page (som är string) till number för framtida hantering
  const limit = 8; // ska visa 8 produkter per sida
  const skip = (pageNum - 1) * limit; // räknar ut hur många produkter i API:et som ska hoppas över på sidan (sida1: (1-1)*6=0 -> startar från 0, sida2: (2-1)*6=6 -> hoppar över första 6)

  const result = await fetchBySearch(query, limit, skip);

  if (typeof result === "object" && "message" in result)
    return <p> {result.message}</p>;

  const { products, total } = result;
  const maxPage = Math.ceil(total / limit); // räknar ut

  return (
    <main>
      <section>
        <div className="flex gap-4 justify-center">
          <Link
            className="p-2 border-2 rounded-sm m-2"
            href={`/search?query=${query}&page=${pageNum - 1}`}
          >
            Previous
          </Link>
          <Link
            className="p-2 border-2 rounded-sm m-2"
            href={`/search?query=${query}&page=${pageNum + 1}`}
          >
            Next
          </Link>
        </div>

        <div className="content pt-10">
          <h2 className="text-center text-4xl">Search results for "{query}"</h2>
          {products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
