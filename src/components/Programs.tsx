
import React from 'react';
import { Button } from '@/components/ui/button';

const programsList = [
  {
    title: "Early Childhood Development",
    ageRange: "Ages 3-6",
    description: "A nurturing introduction to learning through play, movement, and mindfulness practices tailored for young explorers.",
    image: "https://images.unsplash.com/photo-1602002336793-c5d0a8d62053?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Elementary Education",
    ageRange: "Ages 7-12",
    description: "Building fundamental academic skills while developing emotional intelligence and physical well-being through integrated yoga practices.",
    image: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Middle School Program",
    ageRange: "Ages 13-15",
    description: "Supporting adolescents through this transformative time with a balanced approach to academic challenges and personal development.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Programs</h2>
          <p className="text-yoga-navy/70 mt-8 text-lg max-w-2xl mx-auto">
            We offer specialized educational programs designed to meet the unique developmental 
            needs of children at each stage of growth.
          </p>
        </div>
        
        <div className="space-y-16">
          {programsList.map((program, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px]">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <div className="inline-block bg-yoga-sand/30 px-4 py-1 rounded-full text-yoga-navy font-medium">
                  {program.ageRange}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-yoga-navy">
                  {program.title}
                </h3>
                <p className="text-yoga-navy/70 text-lg">
                  {program.description}
                </p>
                <Button 
                  className="mt-4 bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
