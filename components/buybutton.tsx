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
    <button onClick={handleClick} className="button">
      <ShoppingBagIcon size={20} />
      Add to cart
    </button>
  );
}
