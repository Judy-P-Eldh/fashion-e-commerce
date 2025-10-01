import Form from "next/form";
import Link from "next/link";
import toast from 'react-hot-toast';

export default async function FormInput() {
    return (
        <main className="content-grid gap-4">
            <h2 className="text-xl font-bold text-center">Add a new item</h2>
            <Form className="gap-2" action={submitForm}>
                <label htmlFor="product-id">ID</label>
                <input className="border p-2" type="text" name="product-id" id="product-id" placeholder="###" />
                <label htmlFor="product-title">Title</label>
                <input className="border p-2" type="text" name="product-title" id="product-title" placeholder="Cat food" />
                <label htmlFor="product-price">Price</label>
                <input className="border p-2" type="text" name="product-price" id="product-price" placeholder="20$" />
                <label htmlFor="product-description">Description</label>
                <textarea className="border p-2" rows={10} name="product-description" id="product-description" placeholder="Delicious and nutricious food that any feline companion would enjoy!" />
                <Link className="flex items-center gap-2 text-sm border-1 p-2 my-2 rounded-sm hover:bg-beige-dark" href="/admin">Cancel</Link>
                <button className="flex items-center gap-2 text-sm border-1 p-2 my-2 rounded-sm hover:bg-beige-dark" type="submit">Add new item</button>
            </Form>
        </main>
    );
};

export async function submitForm(formData: FormData) {
    "use server"

    const productID = formData.get("product-id");
    const productTitle = formData.get("product-title");
    const productPrice = formData.get("product-price");
    const productDesc = formData.get("product-description");
    
    console.log(productID, productTitle, productPrice, productDesc);
};
