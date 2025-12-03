'use client';

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export function CartItems() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl text-gray-500 mb-4">Your cart is empty</p>
        <p className="text-gray-400">Add some delicious treats to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.items.map((item) => (
        <div
          key={item.product.id}
          className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
        >
          <div className="text-5xl">
            {item.product.category === 'cookies' && '🍪'}
            {item.product.category === 'cakes' && '🎂'}
            {item.product.category === 'cupcakes' && '🧁'}
            {item.product.category === 'brownies' && '🍫'}
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg">{item.product.name}</h3>
            <p className="text-gray-600">{formatPrice(item.product.price)}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              -
            </button>
            <span className="w-12 text-center font-semibold">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              +
            </button>
          </div>
          
          <div className="text-right">
            <p className="font-bold text-lg">
              {formatPrice(item.product.price * item.quantity)}
            </p>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-red-500 hover:text-red-700 text-sm mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
