import Form from "next/form";
import Link from "next/link";

export default async function FormInput() {
  return (
    <main className="content-grid">
      <div className="content-x-small">
        <h2 className="text-xl font-bold text-center">Add a new item</h2>
        <Form className="grid" action="/">
          <label htmlFor="product-id">ID</label>
          <input
            className="input-field mb-5"
            type="text"
            name="product-id"
            placeholder="###"
          />
          <label htmlFor="product-title">Title</label>
          <input
            className="input-field mb-5"
            type="text"
            name="product-title"
            placeholder="Cat food"
          />
          <label htmlFor="product-price">Price</label>
          <input
            className="input-field mb-5"
            type="text"
            name="product-price"
            placeholder="$20"
          />
          <label htmlFor="product-description">Description</label>
          <textarea
            className="input-field mb-5"
            rows={10}
            name="product-description"
            placeholder="Delicious and nutricious food that any feline companion would enjoy!"
          />
        </Form>
        <div className="flex justify-center gap-4">
          <Link href="/admin" className="button py-1 px-5 text-lg">
            Cancel
          </Link>
          <button type="submit" className="button py-1 px-5 text-lg">
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
