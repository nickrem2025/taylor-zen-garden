
import React from 'react';
import { Heart, Leaf, Sun, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const philosophyItems = [
  {
    icon: <Sun className="w-10 h-10 text-yoga-terracotta" />,
    title: "Mindful Awareness",
    description: "We teach students to cultivate present-moment awareness as a foundation for all learning and growth."
  },
  {
    icon: <Heart className="w-10 h-10 text-yoga-terracotta" />,
    title: "Compassionate Leadership",
    description: "Students learn to lead with empathy, understanding, and a genuine desire to elevate others."
  },
  {
    icon: <Leaf className="w-10 h-10 text-yoga-terracotta" />,
    title: "Sustainable Living",
    description: "We emphasize our connection with nature and responsibility to protect our environment."
  },
  {
    icon: <Users className="w-10 h-10 text-yoga-terracotta" />,
    title: "Community Engagement",
    description: "Learning extends beyond the classroom through meaningful service and community involvement."
  }
];

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 px-4 bg-yoga-cream/30 subtle-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Philosophy</h2>
          <p className="text-yoga-navy/70 mt-8 text-lg max-w-2xl mx-auto">
            Our educational approach is guided by four core principles that weave together the intellectual, 
            physical, emotional, and spiritual dimensions of learning.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophyItems.map((item, index) => (
            <Card key={index} className="organic-card border-none h-full">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-5 p-3 rounded-full bg-yoga-sand/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-yoga-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-yoga-navy/70">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
