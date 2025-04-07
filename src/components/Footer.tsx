
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yoga-navy text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Holistic<span className="text-yoga-terracotta">Yoga</span></h3>
            <p className="text-white/70">
              Nurturing mind, body, and spirit through innovative education in Taylor, Texas.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-yoga-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yoga-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yoga-terracotta transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-yoga-terracotta transition-colors">About Us</a></li>
              <li><a href="#philosophy" className="text-white/70 hover:text-yoga-terracotta transition-colors">Our Philosophy</a></li>
              <li><a href="#programs" className="text-white/70 hover:text-yoga-terracotta transition-colors">Programs</a></li>
              <li><a href="#teachers" className="text-white/70 hover:text-yoga-terracotta transition-colors">Teachers</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-yoga-terracotta transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates, events, and mindfulness tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white px-4 py-2 rounded-l-lg focus:outline-none flex-1"
              />
              <button 
                type="submit" 
                className="bg-yoga-terracotta hover:bg-yoga-terracotta/80 px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} HolisticYoga School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
