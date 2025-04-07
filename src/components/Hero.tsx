
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-hero-pattern"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yoga-cream/80 to-yoga-sage/40"></div>
      </div>
      
      <div className="container mx-auto z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-navy leading-tight mb-6">
              Holistic Education <br />
              <span className="text-yoga-terracotta">through Mindful Practice</span>
            </h1>
            
            <p className="text-lg md:text-xl text-yoga-navy/80 mb-8">
              Nurturing mind, body, and spirit in Taylor, Texas through 
              our innovative yoga-based educational approach.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white px-8 py-6 rounded-full"
                asChild
              >
                <a href="#contact">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-yoga-sage text-yoga-navy hover:bg-yoga-sage/10 px-8 py-6 rounded-full"
                asChild
              >
                <a href="#programs">Our Programs</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="wave-shape animate-gentle-wave" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,141.14c67.64,0,133.76-18.11,206.53-39.7Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
