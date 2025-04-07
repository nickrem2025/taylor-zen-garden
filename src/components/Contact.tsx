
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="text-yoga-navy/70 mt-8 text-lg max-w-2xl mx-auto">
            We're here to answer your questions and help you learn more about our holistic education programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-yoga-navy mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-yoga-navy mb-2">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-yoga-cream/30 border-yoga-sage/30 focus:border-yoga-sage"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-yoga-navy mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-yoga-cream/30 border-yoga-sage/30 focus:border-yoga-sage"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-yoga-navy mb-2">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  className="bg-yoga-cream/30 border-yoga-sage/30 focus:border-yoga-sage"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-yoga-navy mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more..." 
                  className="bg-yoga-cream/30 border-yoga-sage/30 focus:border-yoga-sage h-36"
                />
              </div>
              
              <Button 
                className="w-full bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white rounded-full"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-yoga-navy mb-6">Visit Our School</h3>
            
            <div className="bg-yoga-cream/30 p-6 rounded-2xl shadow-sm">
              <div className="aspect-video w-full mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55016.75532887289!2d-97.45025935!3d30.5699807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d782e6ab8903%3A0x581c901b4a15922b!2sTaylor%2C%20TX!5e0!3m2!1sen!2sus!4v1659123533215!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: "12px" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-yoga-terracotta mr-3 mt-1 flex-shrink-0" />
                  <p className="text-yoga-navy">123 Harmony Way, Taylor, TX 76574</p>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-yoga-terracotta mr-3 mt-1 flex-shrink-0" />
                  <p className="text-yoga-navy">(512) 555-0187</p>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-yoga-terracotta mr-3 mt-1 flex-shrink-0" />
                  <p className="text-yoga-navy">info@taylorholisticschool.com</p>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-yoga-terracotta mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-yoga-navy">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    <p className="text-yoga-navy">Weekend: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
