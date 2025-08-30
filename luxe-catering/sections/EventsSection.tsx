
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const events = [
  { name: 'Weddings', icon: '💍', description: 'Elegant dining for your special day.' },
  { name: 'Birthdays', icon: '🎂', description: 'Joyful celebrations with delicious food.' },
  { name: 'Corporate Events', icon: '💼', description: 'Professional and impressive catering solutions.' },
  { name: 'Private Dinners', icon: '🍽️', description: 'Intimate and exclusive culinary experiences.' },
  { name: 'Family Gatherings', icon: '👨‍👩‍👧‍👦', description: 'Heartwarming meals for your loved ones.' },
];

const EventCard: React.FC<{ name: string; icon: string; description: string; }> = ({ name, icon, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border-t-4 border-gold">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="font-playfair text-2xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">We Cater for Every Occasion</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {events.map((event, index) => (
            <AnimatedSection key={index} className={`transition-transform delay-${index * 100}`}>
                <EventCard {...event} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
