import { Category, Product } from '../interfaces/product';

const endpoint = 'https://dummyjson.com/products';

export async function fetchProducts(limit: number = 0): Promise<Product[] | { message: string }> {
  try {
    const response = await fetch(`${endpoint}?limit=${limit}`, { cache: 'no-store' });
    if (!response.ok) return { message: 'Failed to fetch products.' };
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
    throw new Error('Could not reach the API to fetch products.');
  }
}

export async function fetchProductsFromCategory(
  category: Category
): Promise<Product[] | { message: string }> {
  try {
    const response = await fetch(`${endpoint}/category/${category}`, { cache: 'no-store' });
    if (!response.ok) return { message: 'Failed to fetch sunglasses.' };
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
    throw new Error('Could not reach the API to fetch sunglasses.');
  }
}
