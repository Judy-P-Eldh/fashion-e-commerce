"use client";
import { inShoppingCart } from "@/lib/interfaces/product";
import { ShoppingBasketIcon } from "lucide-react";
export default function BuyButton({productName}:{productName: string}) {
  function handleClick() {
    inShoppingCart.push(productName);
    alert(`${productName} added to shoppin cart.`);
  }
  return (
    <button
      onClick={handleClick}
      
      className=" flex gap-2 text-sm border-1 p-2 my-2 rounded-sm hover:bg-stone-400"
    >
      <ShoppingBasketIcon size={20}/>
      Add to cart
    </button>
  );
}
