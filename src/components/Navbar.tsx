import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-lg animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Brand Name - NOW WITH GRADIENT */}
          {/* <div
            className="text-3xl font-extrabold tracking-wider select-none cursor-default
                       bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent"
            // You can adjust the gradient colors as needed.
            // I've used lighter grays to stand out against the dark Navbar.
            // If you want the exact gradient from your example:
            // from-gray-900 via-gray-500 to-gray-900
            // but those might be too dark against the dark navbar.
          >
            Sreenivas
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-400 group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-1 rounded-full bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-700/40 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-5 bg-gray-900/95 rounded-3xl shadow-2xl border border-gray-800 animate-fade-in-up space-y-3 py-5 px-6"
          >
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-xl font-semibold text-gray-400 hover:text-white px-5 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
