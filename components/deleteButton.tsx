import { deleteProduct } from "@/lib/actions";
import { Trash2Icon } from "lucide-react";
import Form from "next/form";
export default function DeleteButton({
  id,

}: {
  id: number;
}) {
  return (
    <Form action={deleteProduct}>
      <input type="text" hidden readOnly name="id" value={id} />
    <button type="submit">
      <Trash2Icon strokeWidth={1} size={25} />
    </button>
    </Form>
  );
}
