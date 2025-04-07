
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const teachersList = [
  {
    name: "Sarah Johnson",
    role: "Founder & Head Teacher",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "With over 15 years of experience in holistic education, Sarah brings passion and expertise to her role as founder and lead instructor."
  },
  {
    name: "Michael Chen",
    role: "Elementary Education",
    image: "https://images.unsplash.com/photo-1542142430-6c91a7c123b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Michael specializes in creating engaging learning environments that balance academic excellence with mindfulness practices."
  },
  {
    name: "Priya Patel",
    role: "Early Childhood Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Priya's gentle approach helps our youngest students develop a love for learning through movement, story, and creative expression."
  },
  {
    name: "David Rodriguez",
    role: "Middle School Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "David guides adolescents through their transformative years with mindfulness techniques and a strong academic foundation."
  }
];

const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 px-4 bg-yoga-cream/30 subtle-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Teachers</h2>
          <p className="text-yoga-navy/70 mt-8 text-lg max-w-2xl mx-auto">
            Meet our dedicated team of educators who bring expertise, passion, and mindfulness 
            to every aspect of our learning community.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachersList.map((teacher, index) => (
            <Card key={index} className="organic-card border-none overflow-hidden h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-yoga-navy mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-yoga-terracotta font-medium mb-3">
                    {teacher.role}
                  </p>
                  <p className="text-yoga-navy/70 flex-grow">
                    {teacher.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
