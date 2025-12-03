export function Footer() {
  return (
    <footer className="bg-[#ed8023] text-white py-8">
      <div className="mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20">
          {/* Left Section - Brand and Address */}
          <div className="px-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase">Bonvoy BAKERY</h3>
            <p className="text-sm md:text-base mb-2">139 Queen Rania Street</p>
            <p className="text-sm md:text-base mb-4 md:mb-6">Amman, Jordan</p>
            <p className="text-sm md:text-base mb-1">bonjour@bonvoybakery.com</p>
            <p className="text-sm md:text-base">999 9999 999</p>
            
            <p className="text-sm md:text-base mt-4 md:mt-6">Follow us on Instagram</p>
          </div>      
          
          {/* Second Column - Navigation Links */}
          <div>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="/cookies" className="text-base md:text-lg font-bold uppercase hover:text-pink-300">COOKIES</a></li>
                  </ul>
          </div>
          
          {/* Third Column - More Links */}
          <div>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="/about" className="text-base md:text-lg font-bold uppercase hover:text-pink-300">ABOUT</a></li>
              <li><a href="/contact" className="text-base md:text-lg font-bold uppercase hover:text-pink-300">CONTACT</a></li>
              <li><a href="/wholesale" className="text-base md:text-lg font-bold uppercase hover:text-pink-300">WHOLESALE</a></li>
            </ul>
          </div>
          
          {/* Right Section - Newsletter */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase">JOIN OUR NEWSLETTER</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="flex-1 px-4 py-3 md:py-5 rounded-full bg-white text-black placeholder-black text-sm md:text-md outline-none"
              />
              <button className="px-6 md:px-8 py-3 md:py-5 rounded-full bg-black text-white font-bold uppercase text-sm md:text-md hover:bg-gray-800">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        {/* Big BONVOY Text */}
        <div className="text-center mb-4 md:mb-6 mt-8 md:mt-12">
          <h2 className="font-black leading-none text-white overflow-hidden" style={{ fontFamily: 'Double Porter 3, sans-serif', fontSize: 'clamp(60px, 25vw, 400px)' }}>
            BONVOY
          </h2>
        </div>
        
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm border-t border-white/20 pt-4 md:pt-2 gap-3 md:gap-0">
          <p className="text-center md:text-left">Copyright 2025 | Bonvoy Bakery</p>
          <div className="flex gap-3 md:gap-6">
            <a href="/terms" className="hover:text-pink-300">Terms of use</a>
            <span>|</span>
            <a href="/privacy" className="hover:text-pink-300">Privacy policy</a>
          </div>
          <p className="text-center md:text-right">Made by Casa Media</p>
        </div>
      </div>
    </footer>
  );
}
