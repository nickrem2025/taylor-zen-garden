
import React from 'react';
import { Button } from '@/components/ui/button';
import { TreeDeciduous } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <TreeDeciduous className="h-12 w-12 text-yoga-sage" />
            </div>
            <h2 className="section-heading">About Trauma Free Tree</h2>
            <p className="text-yoga-navy/70 mt-8 text-lg">
              Pioneering a new approach to education in Taylor, Texas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Trees in a forest" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yoga-navy">Our Journey</h3>
              <p className="text-yoga-navy/80">
                Founded with the belief that education should nurture the whole person, our school 
                integrates traditional academic excellence with mindfulness practices, physical 
                wellness, and emotional intelligence.
              </p>
              <p className="text-yoga-navy/80">
                Just as trees grow strong with proper care, we've created a supportive environment where students develop not just knowledge, 
                but wisdom; not just skills, but purpose; not just credentials, but character.
              </p>
              <Button 
                className="mt-4 bg-yoga-sage hover:bg-yoga-sage/90 text-white rounded-full" 
                asChild
              >
                <a href="#philosophy">Learn Our Philosophy</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
