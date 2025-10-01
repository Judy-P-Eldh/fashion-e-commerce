'use client';
import { inShoppingCart } from '@/lib/data/variables';
import { ShoppingBagIcon } from 'lucide-react';
import toast from 'react-hot-toast';
export default function BuyButton({ productName }: { productName: string }) {
  function handleClick() {
    inShoppingCart.push(productName);
    toast.success(`${productName} added to shopping cart.`);
  }
  return (
    <button
      onClick={handleClick}
      className="flex justify-center gap-3 text-sm border p-2 rounded-sm hover:bg-dark"
    >
      <ShoppingBagIcon size={20} />
      Add to cart
    </button>
  );
}
