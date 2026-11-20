const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/30">
      <nav className="mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8 py-4">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="whitespace-nowrap text-2xl font-extrabold text-[#D4AF37] font-serif tracking-wider"
        >
          MyWebsite
        </a>

        {/* Mobile toggle (CSS only, no JS) */}
        <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer rounded-lg border border-[#D4AF37]/30 bg-zinc-900 p-2 text-[#D4AF37] hover:bg-zinc-800"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>

        {/* Links */}
        <ul className="hidden peer-checked:flex md:flex w-full md:w-auto flex-col md:flex-row gap-1 md:gap-8 mt-4 md:mt-0 p-4 md:p-0 rounded-xl bg-zinc-950 md:bg-transparent border border-[#D4AF37]/20 md:border-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-2 md:py-0 text-base font-medium text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;