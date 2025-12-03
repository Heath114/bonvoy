'use client';

import { products, getProductsByCategory } from '@/lib/products';
import { ProductGrid } from '@/components/products/ProductGrid';
import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return getProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Products', emoji: '🛍️' },
    { id: 'cookies', name: 'Cookies', emoji: '🍪' },
    { id: 'cakes', name: 'Cakes', emoji: '🎂' },
    { id: 'cupcakes', name: 'Cupcakes', emoji: '🧁' },
    { id: 'brownies', name: 'Brownies', emoji: '🍫' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedCategory === category.id
                ? 'bg-pink-600 text-white'
                : 'bg-black text-gray-700 hover:bg-pink-50'
            }`}
          >
            <span className="mr-2">{category.emoji}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 text-center">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
