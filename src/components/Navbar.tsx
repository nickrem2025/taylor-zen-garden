
import React, { useState, useEffect } from 'react';
import { Menu, X, TreePine } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold text-yoga-navy flex items-center">
            <TreePine className="h-7 w-7 mr-2 text-yoga-sage" />
            <span>Trauma <span className="text-yoga-terracotta">Free Tree</span></span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#philosophy" className="nav-link">Philosophy</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#teachers" className="nav-link">Teachers</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button 
            className="md:hidden text-yoga-navy hover:text-yoga-terracotta transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'fixed top-[76px] left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300',
        isOpen ? 'translate-y-0' : '-translate-y-full'
      )}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="nav-link py-2" onClick={toggleMenu}>About</a>
            <a href="#philosophy" className="nav-link py-2" onClick={toggleMenu}>Philosophy</a>
            <a href="#programs" className="nav-link py-2" onClick={toggleMenu}>Programs</a>
            <a href="#teachers" className="nav-link py-2" onClick={toggleMenu}>Teachers</a>
            <a href="#contact" className="nav-link py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
