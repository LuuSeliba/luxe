
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
  { name: 'John Doe', role: 'Head Chef', img: 'https://picsum.photos/400/400?random=30' },
  { name: 'Jane Smith', role: 'Event Coordinator', img: 'https://picsum.photos/400/400?random=31' },
  { name: 'Sam Wilson', role: 'Sous Chef', img: 'https://picsum.photos/400/400?random=32' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4">Our Culinary Journey</h1>
            <p className="text-center max-w-3xl mx-auto text-gray-600">Discover the passion and dedication behind every dish we create.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img src="https://picsum.photos/800/600?random=33" alt="Our Kitchen" className="rounded-lg shadow-xl" />
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="font-playfair text-4xl font-bold mb-4">Our Philosophy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Luxe Catering, we believe that food is more than just sustenance; it's an experience. Our philosophy is rooted in three core principles: sourcing the finest local ingredients, crafting innovative and memorable menus, and providing service that is both personal and professional. We strive to create a seamless and beautiful experience that reflects your unique style and vision.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From intimate dinners to grand celebrations, our team works tirelessly to ensure every detail is perfect. We don't just cater events; we help create lasting memories.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-playfair text-4xl font-bold text-center mb-12">Meet the Team</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index}>
                <div className="text-center group">
                  <div className="relative inline-block">
                    <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full mx-auto shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mt-4">{member.name}</h3>
                  <p className="text-gold font-semibold">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
