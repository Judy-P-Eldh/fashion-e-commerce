"use client";
import { deleteProduct } from "@/lib/actions";
import { DeleteResponse } from "@/lib/interfaces/product";
import { Trash2Icon } from "lucide-react";
import Form from "next/form";
import toast from "react-hot-toast";

export default function DeleteButton({ id }: { id: number }) {
  async function clientActionDeleteProduct(formData: FormData) {
    const id = formData.get("id") as string;

    const result: DeleteResponse = await deleteProduct(id);

    if (result.success && result.product) {
      toast.success(
        `Deleted : ${result.product.title} with id ${result.product.id}`
      );
    } else {
      toast.error(`Failed to delete ${result.error}`);
    }
  }
  return (
    <Form action={clientActionDeleteProduct}>
      <input type="text" hidden readOnly name="id" value={id} />
      <button
        type="submit"
        className="button p-0 border-0 bg-transparent shadow-none"
      >
        <Trash2Icon strokeWidth={1} size={25} />
      </button>
    </Form>
  );
}
