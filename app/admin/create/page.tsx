"use client";
import Form from "next/form";
import Link from "next/link";
import toast from "react-hot-toast";
import { addProduct } from "@/lib/actions";
import { redirect } from "next/navigation";

export default function FormInput() {
  async function submitForm(formData: FormData) {
    const productTitle = formData.get("product-title") as string;
    const productPrice = formData.get("product-price") as string;
    const productDesc = formData.get("product-description") as string;
    const result = await addProduct({
      productTitle,
      productPrice,
      productDesc,
    });
    if (result.success) {
      toast.success(
        `Added product ${productTitle} with id ${result.product.id}`
      );
      redirect("/admin");
    } else {
      toast.error(result.error);
    }
  }
  return (
    <Form className="content-small flex flex-col" action={submitForm}>
      <h2 className="text-xl font-bold text-center mb-5">Add a new item</h2>
      <label htmlFor="product-title">Title</label>
      <input
        className="input-field mb-5"
        required
        type="text"
        name="product-title"
        id="product-title"
        placeholder="Cat food"
      />
      <label htmlFor="product-price">Price</label>
      <input
        className="input-field mb-5"
        required
        type="text"
        name="product-price"
        id="product-price"
        placeholder="$20"
      />
      <label htmlFor="product-description">Description</label>
      <textarea
        className="input-field mb-5"
        required
        rows={10}
        name="product-description"
        id="product-description"
        placeholder="Delicious and nutricious food that any feline companion would enjoy!"
      />
      <div className="flex justify-center gap-4">
        <Link className="button py-1 px-5 text-lg" href="/admin">
          Cancel
        </Link>
        <button className="button py-1 px-5 text-lg" type="submit">
          Add new item
        </button>
      </div>
    </Form>
  );
}
