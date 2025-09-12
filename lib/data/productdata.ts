import { allowedCategories, Category, Product, ProductResponse } from '../interfaces/product';

const endpoint = 'https://dummyjson.com/products';

export async function fetchProducts(limit: number = 0): Promise<Product[] | { message: string }> {
  try {
    const response = await fetch(`${endpoint}?limit=${limit}`);
    if (!response.ok) return { message: 'Failed to fetch products.' };
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch anything.`);
  }
}

export async function fetchBySearch(query: string): Promise<Product[] | { message: string }> {
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

  const allowedCategoriesSet = new Set(allowedCategories);
  if (
    objectsFromSearch &&
    typeof objectsFromSearch === 'object' &&
    'message' in objectsFromSearch
  ) {
    return []; //Hantera om fel uppstår.
  }

  const chosenProducts = objectsFromSearch.filter((product) =>
    allowedCategoriesSet.has(product.category as Category)
  );
  return chosenProducts;
}
