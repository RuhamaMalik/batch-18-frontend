function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="text-2xl font-extrabold tracking-wider text-[#D4AF37] font-serif">
              MyWebsite
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies, sleek aesthetics, and a touch of elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                🌐
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                💼
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                📷
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-l-2 border-[#D4AF37] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-l-2 border-[#D4AF37] pl-3">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Frontend Architecture</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">React & Tailwind Apps</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Firebase Integration</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4 border-l-2 border-[#D4AF37] pl-3">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400">
              Subscribe to get latest updates, tips, and exclusive offers straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] text-sm"
              />
              <button 
                type="submit" 
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold text-sm shadow-lg shadow-[#D4AF37]/20 hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#D4AF37] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;