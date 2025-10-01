"use client";
import { inShoppingCart } from "@/lib/data/variables";
import { ShoppingBagIcon } from "lucide-react";
export default function BuyButton({ productName }: { productName: string }) {
  function handleClick() {
    inShoppingCart.push(productName);
    alert(`${productName} added to shopping cart.`);
  }
  return (
    <button onClick={handleClick} className="button">
      <ShoppingBagIcon size={20} />
      Add to cart
    </button>
  );
}
