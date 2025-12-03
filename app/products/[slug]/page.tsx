import { getProductBySlug, getAllProductSlugs, products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-[#FFF8F0] py-20">
      <div className="container mx-auto px-8 md:px-16">
        <Link href="/" className="text-[#1B7A9E] hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Product Image */}
          <div className="bg-[#FFF4E6] rounded-3xl p-8">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 uppercase">
              {product.name}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <p className="text-4xl font-bold text-gray-800 mb-6">${product.price}</p>
              
              {product.servings && (
                <p className="text-lg text-gray-600 mb-2">
                  Servings: {product.servings}
                </p>
              )}
              
              <p className="text-lg text-gray-600">
                {product.inStock ? (
                  <span className="text-green-600 font-semibold">In Stock</span>
                ) : (
                  <span className="text-red-600 font-semibold">Out of Stock</span>
                )}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-6 mb-8">
              <button className="w-14 h-14 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-3xl font-bold hover:bg-orange-200 cursor-pointer">
                −
              </button>
              <span className="text-3xl font-bold min-w-[40px] text-center text-gray-800">1</span>
              <button className="w-14 h-14 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-3xl font-bold hover:bg-orange-200 cursor-pointer">
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full py-4 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-xl mb-8 cursor-pointer">
              Add to Cart
            </button>

            {/* Product Information */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ingredients</h3>
                <p className="text-gray-600">{product.ingredients.join(', ')}</p>
              </div>
            )}

            {product.allergens && product.allergens.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Allergens</h3>
                <p className="text-gray-600">{product.allergens.join(', ')}</p>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like Section */}
        <section className="mt-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 uppercase">You May Also Like:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-8xl mx-auto">
            {products
              .filter(p => p.slug !== slug && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link href={`/products/${relatedProduct.slug}`} key={relatedProduct.id}>
                  <div className="bg-white border-[3px] border-[#1B7A9E] p-14 pt-12 pb-10 flex flex-col cursor-pointer" style={{ borderRadius: '500px 500px 5rem 5rem' }}>
                    <div className="w-full aspect-square mb-4 flex items-center justify-center">
                      <Image 
                        src="/3.webp"
                        alt={relatedProduct.name}
                        width={375}
                        height={375}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 uppercase text-gray-800">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-800 mb-6">Box of 6 • 4oz</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-2xl font-normal text-gray-800">{relatedProduct.price}$</p>
                      <div className="flex items-center gap-4">
                        <button className="w-12 h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-3xl font-bold">
                          −
                        </button>
                        <span className="text-2xl font-bold min-w-[30px] text-center text-gray-800">1</span>
                        <button className="w-12 h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-3xl font-bold">
                          +
                        </button>
                      </div>
                    </div>
                    <button className="w-full py-3 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-md">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
