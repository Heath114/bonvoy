'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64 bg-gray-100">
          <div className="flex items-center justify-center h-full text-6xl">
            {product.category === 'cookies' && '🍪'}
            {product.category === 'cakes' && '🎂'}
            {product.category === 'cupcakes' && '🧁'}
            {product.category === 'brownies' && '🍫'}
          </div>
          {product.featured && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
              ⭐ Featured
            </span>
          )}
        </div>
      </Link>
      
      <CardContent className="pt-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-bold text-gray-800 hover:text-pink-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
        <p className="text-2xl font-bold text-pink-600 mt-3">{formatPrice(product.price)}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full"
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}
