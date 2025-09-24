import { endpoint } from "@/lib/data/productdata"
import { Product } from "../interfaces/product";

export async function deleteProduct(formData: FormData) {
  "use server";

  const id = formData.get("id") as string; 
  
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "DELETE",
    });


    if (!response.ok) {
      console.log({
        success: false,
        error: "failed to delete product",
      });
    }
    const product: Product = await response.json();
    console.log({ success: true, product });
  } catch (err) {
    console.log({ success: false, error: (err as Error).message });
  }
}