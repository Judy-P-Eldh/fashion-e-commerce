import { AllowedCategory } from "@/lib/interfaces/product";
import { fetchProductsByCategory } from "@/lib/data/product-data";
import ProductList from "@/components/product-list";
import Pagination from "@/components/pagination";
import { categoryLabels } from "@/lib/data/variables";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{
    selectedCollection: string;
    selectedCategory: AllowedCategory;
  }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { selectedCollection, selectedCategory } = await params;
  const { page = "1" } = await searchParams;
  const pageNum = Number(page);
  const limit = 4;
  const skip = (pageNum - 1) * limit;

  const result = await fetchProductsByCategory(selectedCategory, limit, skip);

  if (typeof result === "object" && "message" in result)
    return <p> {result.message}</p>;

  const { products, total } = result;
  const maxPage = Math.ceil(total / limit);

  return (
    <section className="content-grid">
      <div className="content">
        <h2 className="text-center">{categoryLabels[selectedCategory]}</h2>
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <div className="content flex gap-4 justify-center">
        <Pagination
          currentPage={pageNum}
          maxPage={maxPage}
          baseUrl={`/collections/${selectedCollection}/${selectedCategory}`}
        />
      </div>
    </section>
  );
}
