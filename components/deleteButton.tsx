import { deleteProduct } from '@/lib/data/productdata';
import { Trash2Icon } from 'lucide-react';
import Form from 'next/form';

export default function DeleteButton({
  id,
  logger,
}: {
  id: number;
  logger: (msg: string) => void;
}) {
  async function deleteP() {
    'use server';
    let resp = await deleteProduct(id);
    if (resp.success) {
      logger(resp.product.title);
    }
    else {
      logger(resp.error)
    }
  }
  return (
    <Form action={deleteP}>
      <button type="submit">
        {' '}
        <Trash2Icon strokeWidth={1} size={25} />
      </button>
    </Form>
  );
}
