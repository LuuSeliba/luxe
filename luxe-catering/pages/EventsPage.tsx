
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const eventDetails = [
  {
    name: 'Weddings',
    img: 'https://picsum.photos/1200/800?random=50',
    description: 'From intimate ceremonies to grand receptions, we provide bespoke menus and flawless service to make your wedding day unforgettable. Our team works with you to create a culinary experience that perfectly complements your love story.'
  },
  {
    name: 'Corporate Events',
    img: 'https://picsum.photos/1200/800?random=51',
    description: 'Impress your clients and colleagues with our sophisticated corporate catering. Whether it\'s a product launch, a holiday party, or a formal gala, we deliver professional service and exceptional cuisine that reflects your brand\'s excellence.'
  },
  {
    name: 'Private Dinners',
    img: 'https://picsum.photos/1200/800?random=52',
    description: 'Host an exclusive dining experience in the comfort of your own home or a private venue. Our chefs will craft a multi-course meal tailored to your tastes, providing a luxurious, restaurant-quality experience for you and your guests.'
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4">Catering for All Occasions</h1>
            <p className="text-center max-w-3xl mx-auto text-gray-600">No matter the event, we bring the flavor and elegance to make it special.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-24">
          {eventDetails.map((event, index) => (
            <AnimatedSection key={event.name}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`overflow-hidden rounded-lg shadow-2xl ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <img src={event.img} alt={event.name} className="w-full h-full object-cover"/>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <h2 className="font-playfair text-4xl font-bold mb-4">{event.name}</h2>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
