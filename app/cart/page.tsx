'use client';

import { CartItems } from '@/components/cart/CartItems';
import { CartSummary } from '@/components/cart/CartSummary';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart 🛒</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        
        <div>
          <CartSummary />
          <Link 
            href="/products" 
            className="block text-center text-pink-600 hover:text-pink-700 mt-4"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
