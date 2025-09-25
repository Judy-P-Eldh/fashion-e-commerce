import Form from "next/form"
import Link from "next/link";

export default async function FormInput() {
    return (
        <section className="grid gap-4">
            <h2 className="text-xl font-bold text-center">Add a new item</h2>
            <Form className="grid gap-2" action="/">
                <label htmlFor="product-id">ID</label>
                <input className="border p-2" type="text" name="product-id" placeholder="###"/>
                <label htmlFor="product-title">Title</label>
                <input className="border p-2" type="text" name="product-title" placeholder="Cat food" />
                <label htmlFor="product-price">Price</label>
                <input className="border p-2" type="text" name="product-price" placeholder="20$"/>
                <label htmlFor="product-description">Description</label>
                <textarea className="border p-2" rows={10} name="product-description" placeholder="Delicious and nutricious food that any feline companion would enjoy!"/>
            </Form>
            <div>
                <Link href="/admin">Cancel</Link>
                <button type="submit">Save</button>
            </div>
        </section>
    );
}