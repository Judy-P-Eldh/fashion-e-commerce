import { deleteProduct } from '@/lib/data/productdata';
import Form from 'next/form';

export default function DeleteButton() {

async function deleteP() {

    "use server"
    let resp = await deleteProduct(2);
    console.log("hej hopp",resp);
    
    
}
  return (
    <Form action={deleteP}>
      <button type="submit">DELETE</button>
    </Form>
  );
}
