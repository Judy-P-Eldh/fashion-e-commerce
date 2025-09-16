import {
  AllowedCategory,
  Product,
  ProductResponse,
} from "../interfaces/product";

import {allowedCategoriesSet} from "@/lib/data/variables"

const endpoint = "https://dummyjson.com/products";

export async function fetchProducts(
  limit: number = 0
): Promise<Product[] | { message: string }> {
  try {
    const response = await fetch(`${endpoint}?limit=${limit}`);
    if (!response.ok) return { message: "Failed to fetch products." };
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch anything.`);
  }
}

export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${endpoint}/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch product.`);
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch product.`);
  }
}

export async function fetchProductsByCategory(
  category: AllowedCategory
): Promise<ProductResponse[] | { message: string }> {
  try {
    const response = await fetch(`${endpoint}/category/${category}?limit=0`);
    if (!response.ok) return { message: "Failed to fetch sunglasses." };
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch ${category}.`);
  }
}

export async function fetchBySearch(
  query: string
): Promise<Product[] | { message: string }> {
  try {
    const response = await fetch(`${endpoint}/search?q=${query}`);
    if (!response.ok) return { message: `Failed to fetch ${query}.` };
    const data = await response.json();
    return data.products ?? [];
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch ${query}.`);
  }
}

export async function fetchFilteredProducts(query: string) {
  const objectsFromSearch = await fetchBySearch(query);

  if (
    objectsFromSearch &&
    typeof objectsFromSearch === "object" &&
    "message" in objectsFromSearch
  ) {
    return []; //Hantera om fel uppstår.
  }

  const chosenProducts = objectsFromSearch.filter((product) =>
    allowedCategoriesSet.has(product.category as AllowedCategory)
  );
  return chosenProducts;
}
