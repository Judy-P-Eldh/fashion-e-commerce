"use client";
import { inShoppingCart } from "@/lib/data/variables";
import { ShoppingBagIcon } from "lucide-react";
export default function BuyButton({ productName }: { productName: string }) {
  function handleClick() {
    inShoppingCart.push(productName);
    alert(`${productName} added to shopping cart.`);
  }
  return (
    <button
      onClick={handleClick}
      className="flex justify-center gap-3 text-sm border p-2 m-auto rounded-sm hover:bg-stone-400"
    >
      <ShoppingBagIcon size={20} />
      Add to cart
    </button>
  );
}
