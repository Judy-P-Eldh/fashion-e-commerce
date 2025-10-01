'use server';
import { endpoint } from '@/lib/data/product-data';
import { DeleteResponse, Product, AddProductData } from '../interfaces/product';

export async function deleteProduct(id: string): Promise<DeleteResponse> {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return {
        success: false,
        error: `failed to delete product width id ${id}`,
      };
    }
    const product: Product = await response.json();
    return { success: true, product };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function addProduct(productData: AddProductData): Promise<any> {
  try {
    const response = await fetch(`${endpoint}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `failed to add product`,
      };
    }
    const product = await response.json();

    return { success: true, product };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
