import { Category, Product } from "../interfaces/product";

const endpoint = "https://dummyjson.com/products/category/";

export async function fetchProducts(category: Category): Promise<Product[] | { message: string }> {
    try {
        const response = await fetch(`${endpoint}${category}`, { cache: 'no-store' });
        if (!response.ok) return { message: 'Failed to fetch sunglasses.' }
        const data = await response.json();
        console.log(data);
        return data.results;  
    } catch (error) {
        console.log(error);
        throw new Error("Could not reach the API to fetch sunglasses.")
    }
}

