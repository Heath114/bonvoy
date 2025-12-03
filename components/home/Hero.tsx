'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Hero() {
  const container = useRef(null);
  const { scrollY } = useScroll();
  
  // Animate border radius based on scroll position
  // As user scrolls from 0 to 500px, border radius goes from 0 to 50px
  const borderRadius = useTransform(scrollY, [0, 500], [0, 50]);
  
  // Optional: Add a slight scale effect for better "card" feel
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  return (
    <div ref={container} className="relative h-[600px] md:h-screen w-full overflow-hidden bg-[#FFF8F0]">
      <motion.div 
        style={{ 
          borderRadius,
          scale
        }}
        className="relative w-full h-full overflow-hidden origin-top"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/1.webp"
            alt="Bakery Interior"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-20">
          <div className="px-4 md:px-16">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[200px] font-bold text-white mb-6 leading-none">
              A BAKING<br />
              LOVE AFFAIR
            </h1>
          </div>
        </div>
        {/* Indulge Button */}
        <Link href="/products">
          <button className="absolute bottom-16 right-6 md:bottom-32 md:right-16 w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#ed8023] transition-all duration-300 flex items-center justify-center text-white font-bold text-base md:text-xl tracking-widest shadow-2xl hover:scale-105 rotate-12">
            INDULGE
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
