'use server';
import { endpoint } from '@/lib/data/productdata';
import { DeleteResponse, Product } from '../interfaces/product';

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