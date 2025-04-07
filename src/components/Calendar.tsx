
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Calendar: React.FC = () => {
  return (
    <section id="calendar" className="py-20 px-4 bg-yoga-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <CalendarIcon className="h-12 w-12 text-yoga-terracotta" />
          </div>
          <h2 className="section-heading">Book a Session</h2>
          <p className="text-yoga-navy/70 mt-8 text-lg max-w-2xl mx-auto">
            Schedule time with us for consultations, workshops, or events.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-yoga-navy mb-4">Ready to Transform Your Life?</h3>
              <p className="text-yoga-navy/70 mb-6">
                Book a session directly through our calendar to start your journey toward healing and personal growth.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-yoga-terracotta mr-2">✓</span>
                  <span className="text-yoga-navy/80">One-on-one consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yoga-terracotta mr-2">✓</span>
                  <span className="text-yoga-navy/80">Group workshops and classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yoga-terracotta mr-2">✓</span>
                  <span className="text-yoga-navy/80">Community events</span>
                </li>
              </ul>
              <Button 
                className="mt-4 bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white rounded-full"
                onClick={() => {
                  // Open Calendly in a popup or redirect
                  window.open('https://calendly.com/YOUR_CALENDLY_USERNAME', '_blank');
                }}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Open Full Calendar
              </Button>
              <p className="text-xs text-yoga-navy/50 mt-4">
                Replace 'YOUR_CALENDLY_USERNAME' with your actual Calendly username in the code.
              </p>
            </div>
            
            <div className="h-[600px] bg-white">
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget w-full h-full" 
                data-url="https://calendly.com/YOUR_CALENDLY_USERNAME"
                style={{ minWidth: '320px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendly script */}
      <script 
        type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async
      ></script>
    </section>
  );
};

export default Calendar;
