import { AllowedCategory, Product, ProductResponse, DeleteResponse } from '../interfaces/product';
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
    if (!response.ok) return { message: 'Failed to fetch sunglasses.' };
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch ${category}.`);
  }
}

export async function fetchBySearch(
  query: string = '',
  limit: number = 0,
  skip: number
): Promise<ProductResponse | { message: string }> {
  try {
    const response = await fetch(`${endpoint}/search?q=${query}&limit=${limit}&skip=${skip}`);
    if (!response.ok) return { message: `Failed to fetch ${query}.` };
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch ${query}.`);
  }
}

// export async function fetchFilteredProducts(query: string) {
//   const objectsFromSearch = await fetchBySearch(query);

// //   if (
//     objectsFromSearch &&
//     typeof objectsFromSearch === "object" &&
//     "message" in objectsFromSearch
//   ) {
//     return []; //Hantera om fel uppstår.
//   }

//   const chosenProducts = objectsFromSearch.filter((product) =>
//     allowedCategoriesSet.has(product.category as Category)
//   );
//   return chosenProducts;
// }

export async function deleteProduct(id: number): Promise<DeleteResponse> {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      return {
        success: false,
        error: 'failed to delete product',
      };
    }
    const product: Product = await response.json();
    return { success: true, product};
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
