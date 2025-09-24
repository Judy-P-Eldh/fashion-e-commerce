import { AllowedCategory } from "@/lib/interfaces/product";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ selectedCategory: AllowedCategory }>;
}) {
  const { selectedCategory } = await params;
    //la in detta temporärt för att se att jag fick in kategorien och underlätta för den som ska göra denna :)
  return <div>{selectedCategory}</div>;
}
