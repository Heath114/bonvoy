'use client';

import { Product } from '@/types';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="text-pink-600 hover:text-pink-700 mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg p-8">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-12">
          <div className="text-9xl">
            {product.category === 'cookies' && '🍪'}
            {product.category === 'cakes' && '🎂'}
            {product.category === 'cupcakes' && '🧁'}
            {product.category === 'brownies' && '🍫'}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          
          {product.featured && (
            <span className="inline-block bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold mb-4 w-fit">
              ⭐ Featured
            </span>
          )}

          <p className="text-3xl font-bold text-pink-600 mb-6">
            {formatPrice(product.price)}
          </p>

          <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

          {product.servings && (
            <p className="text-gray-600 mb-4">
              <strong>Servings:</strong> {product.servings}
            </p>
          )}

          {product.ingredients && (
            <div className="mb-4">
              <strong className="text-gray-700">Ingredients:</strong>
              <p className="text-gray-600">{product.ingredients.join(', ')}</p>
            </div>
          )}

          {product.allergens && (
            <div className="mb-6">
              <strong className="text-gray-700">Allergens:</strong>
              <p className="text-red-600">{product.allergens.join(', ')}</p>
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <label className="font-semibold">Quantity:</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            size="lg"
            className="mb-4"
          >
            {addedToCart ? '✓ Added to Cart!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>

          {!product.inStock && (
            <p className="text-red-600 text-center">This item is currently out of stock</p>
          )}
        </div>
      </div>
    </div>
  );
}
