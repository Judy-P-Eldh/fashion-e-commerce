import { isArray } from "util";
import {
  allowedCategories,
  Category,
  Product,
  ProductResponse,
} from "../interfaces/product";

const endpoint = "https://dummyjson.com/products";

export async function fetchAllProducts(): Promise<
  Product[] | { message: string }
> {
  try {
    const response = await fetch(`${endpoint}?limit=0`);
    if (!response.ok) return { message: "Failed to fetch products." };
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch anything.`);
  }
}

export async function fetchProducts(
  category: Category
): Promise<ProductResponse[] | { message: string }> {
  try {
    // console.log("Fetching category:", category);
    const response = await fetch(`${endpoint}/category/${category}?limit=0`);
    if (!response.ok) return { message: "Failed to fetch sunglasses." };
    const data = await response.json();
    // console.log(data);
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
    // console.log(data);
    return data.products ?? [];
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch ${query}.`);
  }
}

export async function fetchFilteredProducts(query: string) {
  const objectsFromSearch = await fetchBySearch(query);
  console.log("Svar från API:", objectsFromSearch);

  const allowedCategoriesSet = new Set(allowedCategories);
  if (
    objectsFromSearch &&
    typeof objectsFromSearch === "object" &&
    "message" in objectsFromSearch
  ) {
    return []; //Hantera om fel uppstår.
  }

  const chosenProducts = objectsFromSearch.filter((product) =>
    allowedCategoriesSet.has(product.category as Category)
  );
  console.log("Här är den eller de sökta produkterna", chosenProducts);
  return chosenProducts;
}
