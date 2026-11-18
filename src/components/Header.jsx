import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar fluid className="bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/30 sticky top-0 z-50 px-4 sm:px-8 py-4">
      {/* Brand / Logo - using as={NavLink} or a standard anchor to prevent undefined render issues */}
      <Navbar.Brand as={NavLink} to="/">
        <span className="self-center whitespace-nowrap text-2xl font-extrabold text-[#D4AF37] font-serif tracking-wider">
          MyWebsite
        </span>
      </Navbar.Brand>

      {/* Mobile Toggle Button */}
      <Navbar.Toggle className="text-[#D4AF37] bg-zinc-900 border border-[#D4AF37]/30 hover:bg-zinc-800 focus:ring-2 focus:ring-[#D4AF37]" />

      {/* Navbar Links */}
      <Navbar.Collapse className="bg-zinc-950 md:bg-transparent p-4 md:p-0 rounded-xl mt-4 md:mt-0 border border-[#D4AF37]/20 md:border-none">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `font-medium text-base transition-colors py-2 md:py-0 block ${
              isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `font-medium text-base transition-colors py-2 md:py-0 block ${
              isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
            }`
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => 
            `font-medium text-base transition-colors py-2 md:py-0 block ${
              isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
            }`
          }
        >
          Services
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `font-medium text-base transition-colors py-2 md:py-0 block ${
              isActive ? "text-[#D4AF37]" : "text-gray-300 hover:text-[#D4AF37]"
            }`
          }
        >
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;