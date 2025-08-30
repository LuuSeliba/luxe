
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img src="https://picsum.photos/800/600?random=2" alt="Catering setup" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"/>
            </div>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="font-poppins text-gray-600 mb-6 leading-relaxed">
                Luxe Catering began with a simple idea: to bring restaurant-quality dining experiences to private events. Our journey is fueled by a passion for culinary excellence and a commitment to impeccable service, ensuring every occasion is a masterpiece of flavor and elegance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gold mr-3">✓</span>
                  <h3 className="font-semibold">Fresh Ingredients</h3>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-3">✓</span>
                  <h3 className="font-semibold">Elegant Setup</h3>
                </div>
                <div className="flex items-center">
                  <span className="text-gold mr-3">✓</span>
                  <h3 className="font-semibold">Warm Service</h3>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
