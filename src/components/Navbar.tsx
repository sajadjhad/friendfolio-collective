
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          فريقنا
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#team" className="text-sm tracking-wide hover:text-black/70 transition-colors me-8">
            الفريق
          </a>
          <a href="#about" className="text-sm tracking-wide hover:text-black/70 transition-colors me-8">
            عن الفريق
          </a>
          <a href="#contact" className="text-sm tracking-wide hover:text-black/70 transition-colors">
            اتصل بنا
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
