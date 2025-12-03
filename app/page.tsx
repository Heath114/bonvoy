import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <section className="mx-auto py-12 md:py-20 bg-[#FFF8F0]">
        <div className="w-full flex flex-col md:flex-row justify-between px-4 md:px-16 items-start gap-8 md:gap-16">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-[#D4AA84] mb-6 md:mb-8 leading-tight uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
              GOOD FOOD SHOULD BOTH COMFORT AND NOURISH THE SOUL.
            </h2>

            <Image 
              src="/m.png"
              alt="Cake"
              width={220}
              height={300}
              className="mx-0 md:mx-10 hidden md:block"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-2/5">
            <p className="text-base md:text-xl lg:text-2xl text-[#D4AA84] leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
              We are centrally located in the neighborhood of St-Henri. Stop by for a coffee, catch up on work, or grab some of our delicious goodies to go. With cookies available for online order, there&apos;s something for everyone, and every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Cards Section */}
      <section className="mx-auto py-12 md:py-20 bg-[#FFF8F0] mb-12 md:mb-20">
        <div className="w-full px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-8xl mx-auto">
            {/* Birthday Card */}
            <Link href="/products/classic-chocolate-chip-cookies">
              <div className="bg-[#FFF8F0] border-[3px] border-[#D4AA84] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/2.webp"
                  alt="Birthday Cookie"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
             <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Classic Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-black mb-4 md:mb-6 text-gray-800">Box of 15 + 2 DIPS</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29 JOD</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>              
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>

            {/* Chocolate Chunk Card */}
            <Link href="/products/chocolate-chunk-cookies">
            <div className="bg-[#FFF8F0] border-[3px] border-[#D4AA84] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/3.webp"
                  alt="Chocolate Chunk Cookie"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
             <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Chunk Cookies</h3>
              <p className="text-xs md:text-sm text-black mb-4 md:mb-6 text-gray-800">Box of 15 + 2 DIPS</p>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29 JOD</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-black">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>  
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>

            {/* S'mores Card */}
            <Link href="/products/smores-cookies">
            <div className="bg-[#FFF8F0] border-[3px] border-[#D4AA84] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/11.webp"
                  alt="S'mores Cookie"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">S&apos;mores Cookies</h3>
              <p className="text-xs md:text-sm text-black mb-4 md:mb-6 text-gray-800">Box of 15 + 2 DIPS</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29 JOD</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>

              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-20 bg-[#FFF8F0] overflow-hidden">
        <div className="relative">
          
      <div className="bg-[#FFF8F0] py-30">
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center text-gray-800 px-4">The best things in life are sweet
        </h1>
      </div>
          <div className="flex gap-8 animate-scroll items-end">
            
            {/* First Set */}
            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/5.webp"
                alt="Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/6.webp"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-56 md:h-96 overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/8.webp"
                alt="Pastry"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/8.webp"
                alt="Cake 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-56 md:h-96 overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/4.webp"
                alt="Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-56 md:h-96 overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/9.webp"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/4.webp"
                alt="Pastry"
                fill
                className="object-cover"
              />
            </div>

            {/* Duplicate Set for seamless loop */}
            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/5.webp"
                alt="Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/6.webp"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-56 md:h-96 overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/7.webp"
                alt="Pastry"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/8.webp"
                alt="Cake 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-56 md:h-96 overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/4.webp"
                alt="Cake"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-56 md:h-96 overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/9.webp"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-48 md:w-80 h-64 md:h-[450px] overflow-hidden relative" style={{ borderRadius: '150px 150px 2rem 2rem' }}>
              <Image 
                src="/10.webp"
                alt="Pastry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Product Section - Row 1 */}
      <section className="mx-auto bg-[#FFF8F0] pt-12 md:pt-20">
        <div className="w-full px-4 md:px-16">
          <h1 className="text-4xl md:text-8xl font-bold text-center text-gray-800 mb-8 md:mb-12">OUR COOKIES</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-8xl mx-auto">
            {/* Product Card 1 */}
            <Link href="/products/chocolate-chunk-cookies">
            <div className="bg-[#FFF8F0] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/2.webp"
                  alt="Cookie Product"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-gray-800 mb-4 md:mb-6 text-gray-800">Box of 6 • 4oz</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29$</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>

            {/* Product Card 2 */}
            <Link href="/products/smores-cookies">
            <div className="bg-[#FFF8F0] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/3.webp"
                  alt="Cookie Product"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-gray-800 mb-4 md:mb-6 text-gray-800">Box of 6 • 4oz</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29$</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>

            {/* Product Card 3 */}
            <Link href="/products/classic-chocolate-chip-cookies">
            <div className="bg-[#FFF8F0] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/3.webp"
                  alt="Cookie Product"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-gray-800 mb-4 md:mb-6 text-gray-800">Box of 6 • 4oz</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29$</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Second Product Section - Row 2 */}
      <section className="mx-auto bg-[#FFF8F0] mb-12 md:mb-20">
        <div className="w-full px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 max-w-8xl mx-auto">
            {/* Product Card 4 */}
            <Link href="/products/chocolate-chunk-cookies">
            <div className="bg-[#FFF8F0] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/2.webp"
                  alt="Cookie Product"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-gray-800 mb-4 md:mb-6 text-gray-800">Box of 6 • 4oz</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29$</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>

            {/* Product Card 5 */}
            <Link href="/products/smores-cookies">
            <div className="bg-[#FFF8F0] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/3.webp"
                  alt="Cookie Product"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-gray-800 mb-4 md:mb-6 text-gray-800">Box of 6 • 4oz</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29$</p>          
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>

            {/* Product Card 6 */}
            <Link href="/products/classic-chocolate-chip-cookies">
            <div className="bg-[#FFF8F0] p-6 md:p-14 pt-8 md:pt-12 pb-8 md:pb-10 flex flex-col cursor-pointer hover:shadow-xl transition-shadow" style={{ borderRadius: '300px 300px 3rem 3rem' }}>
              <div className="w-full aspect-square mb-4 flex items-center justify-center">
                <Image 
                  src="/3.webp"
                  alt="Cookie Product"
                  width={375}
                  height={375}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-gray-800">Chocolate Cookie</h3>
              <p className="text-xs md:text-sm text-gray-800 mb-4 md:mb-6 text-gray-800">Box of 6 • 4oz</p>
              
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-normal text-gray-800">29$</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    −
                  </button>
                  <span className="text-xl md:text-2xl font-bold min-w-[25px] text-center text-gray-800">1</span>
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F5E6D3] text-gray-800 flex items-center justify-center text-2xl md:text-3xl font-bold">
                    +
                  </button>
                </div>
              </div>
              <button className="w-full py-3 md:py-5 rounded-full bg-[#ed8023] text-white uppercase hover:bg-orange-500 transition-colors text-base md:text-xl cursor-pointer">
                Add to Cart
              </button>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Slider Section */}
      <section className="w-full bg-[#FFF8F0] py-12 md:py-20 overflow-hidden">
        <h1 className="text-4xl md:text-8xl font-bold text-center mb-8 md:mb-16 text-gray-800 px-4 md:px-16">REVIEWS</h1>
        <div className="relative">
          <div className="flex gap-6 md:gap-12 animate-scroll items-start">
            {/* Review Card 1 */}
            <div className="min-w-[280px] md:min-w-[500px] bg-[#D4AA84] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col text-white">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">&quot;</div>
              <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                Home is where the heart is—or is that cookies? Because many times our home has been at Bonvoy&apos;s, where the cookies are what all cookies should be.
              </p>
              <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Time Out
              </div>
            </div>
            
            {/* Review Card 3 */}
            <div className="min-w-[280px] md:min-w-[500px] bg-[#F2DDC6] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col text-white">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">&quot;</div>
              <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                I still remember that bite. A moist crumb which caresses here and which does not take long to melt, releasing its aromas of spices, and which does not saturate the palate with sugar. A brown butter icing, a bitter caramel. Bonvoy&apos;s Pumpkin, Carrot and Spice Layer Cake is sinful!
              </p>
              <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                LE JOURNAL DE MONTRÉAL
              </div>
            </div>

            {/* Review Card 4 */}
            <div className="min-w-[280px] md:min-w-[500px] bg-[#D4AA84] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col text-white">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">&quot;</div>
              <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                The best cookies in town! Every bite is pure heaven. The chocolate chunk cookies are my absolute favorite. Can&apos;t recommend this place enough!
              </p>
              <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Sarah M.
              </div>
            </div>

            {/* Review Card 5 */}
            <div className="min-w-[280px] md:min-w-[500px] bg-[#F2DDC6] rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col text-white">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">&quot;</div>
              <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                Amazing bakery with incredible treats. The birthday cake cookies are phenomenal and the staff is so friendly. This is my go-to spot for all celebrations!
              </p>
              <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Michael P.
              </div>
            </div>
            <div className="min-w-[500px] bg-[#D4AA84] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Why You Need To Go: This is one of those bakeries that&apos;s like stepping into a little heaven. Not only is the decor so beautiful and so serene, but the pastries themselves are incredible, too. Whether you&apos;re feeling an almond scone, a caramel cookie or more like a funfetti cake, Bonvoy has got you covered.
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                MTL BLOG
              </div>
            </div>
            {/* Review Card 6 */}
            <div className="min-w-[500px] bg-[#EEDCC9] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Absolutely delicious! The s&apos;mores cookies are out of this world. Perfect texture, perfect sweetness. I&apos;m hooked and come back every week!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Jessica L.
              </div>
            </div>

            {/* Review Card 7 */}
            <div className="min-w-[500px] bg-[#D4AA84] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Quality ingredients, beautiful presentation, and exceptional taste. Bonvoy&apos;s has set the bar high for what a bakery should be. Five stars!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                David K.
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            {/* Review Card 1 - Duplicate */}
            <div className="min-w-[500px] bg-[#1E3A3F] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Home is where the heart is—or is that cookies? Because many times our home has been at Bonvoy&apos;s, where the cookies are what all cookies should be.
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Time Out
              </div>
            </div>

            {/* Review Card 2 - Duplicate */}
            <div className="min-w-[500px] bg-[#D4AA84] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Why You Need To Go: This is one of those bakeries that&apos;s like stepping into a little heaven. Not only is the decor so beautiful and so serene, but the pastries themselves are incredible, too. Whether you&apos;re feeling an almond scone, a caramel cookie or more like a funfetti cake, Bonvoy has got you covered.
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                MTL BLOG
              </div>
            </div>

            {/* Review Card 3 - Duplicate */}
            <div className="min-w-[500px] bg-[#EEDCC9] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                I still remember that bite. A moist crumb which caresses here and which does not take long to melt, releasing its aromas of spices, and which does not saturate the palate with sugar. A brown butter icing, a bitter caramel. Bonvoy&apos;s Pumpkin, Carrot and Spice Layer Cake is sinful!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                LE JOURNAL DE MONTRÉAL
              </div>
            </div>

            {/* Review Card 4 - Duplicate */}
            <div className="min-w-[500px] bg-[#D4AA84] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                The best cookies in town! Every bite is pure heaven. The chocolate chunk cookies are my absolute favorite. Can&apos;t recommend this place enough!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Sarah M.
              </div>
            </div>

            {/* Review Card 5 - Duplicate */}
            <div className="min-w-[500px] bg-[#EEDCC9] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Amazing bakery with incredible treats. The birthday cake cookies are phenomenal and the staff is so friendly. This is my go-to spot for all celebrations!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Michael P.
              </div>
            </div>

            {/* Review Card 6 - Duplicate */}
            <div className="min-w-[500px] bg-[#D4AA84] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Absolutely delicious! The s&apos;mores cookies are out of this world. Perfect texture, perfect sweetness. I&apos;m hooked and come back every week!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                Jessica L.
              </div>
            </div>

            {/* Review Card 7 - Duplicate */}
            <div className="min-w-[500px] bg-[#EEDCC9] rounded-[3rem] p-10 flex flex-col text-white">
              <div className="text-6xl mb-4">&quot;</div>
              <p className="text-lg leading-relaxed mb-6">
                Quality ingredients, beautiful presentation, and exceptional taste. Bonvoy&apos;s has set the bar high for what a bakery should be. It is genuinely the best bakery in Montreal. Five stars!
              </p>
              <div className="text-5xl font-bold" style={{ fontFamily: 'Double Porter 3, sans-serif' }}>
                David K.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


