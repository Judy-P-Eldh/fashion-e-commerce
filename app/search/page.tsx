import { fetchBySearch } from "@/lib/data/product-data";
import ProductList from "@/components/product-list";
import Pagination from "@/components/pagination";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { query, page = 1 } = await searchParams;
  const pageNum = Number(page);
  const limit = 8;
  const skip = (pageNum - 1) * limit;

  const result = await fetchBySearch(query, limit, skip);

  if (typeof result === "object" && "message" in result)
    return <p> {result.message}</p>;

  const { products, total } = result;
  const maxPage = Math.ceil(total / limit);

  return (
    <main className="content-grid">
      <section className="content pt-10">
        <h2 className="text-center">Search results for "{query}"</h2>
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>No products found.</p>
        )}

        <div className="flex gap-4 justify-center">
          <Pagination
            currentPage={pageNum}
            maxPage={maxPage}
            baseUrl={`/search?query=${query}`}
          />
        </div>
      </section>
    </main>
  );
}
