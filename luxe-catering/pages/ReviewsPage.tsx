
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const allTestimonials = [
  { photo: 'https://picsum.photos/100/100?random=20', name: 'Jessica & Tom', event: 'Wedding', rating: 5, text: "Luxe Catering made our wedding day absolutely perfect. The food was divine, and the service was flawless. Our guests are still raving about it!" },
  { photo: 'https://picsum.photos/100/100?random=21', name: 'David Lee', event: 'Corporate Gala', rating: 5, text: "Truly professional from start to finish. The setup was elegant, and the menu was creative and delicious. Highly recommended for any corporate function." },
  { photo: 'https://picsum.photos/100/100?random=22', name: 'Maria Rodriguez', event: '50th Birthday Party', rating: 5, text: "The best catering experience I've ever had. They took care of every detail, allowing me to enjoy the party. The food was simply out of this world." },
  { photo: 'https://picsum.photos/100/100?random=23', name: 'The Chen Family', event: 'Family Reunion', rating: 5, text: "Amazing food that pleased everyone from grandparents to young children. The team was so friendly and professional. It felt like they were part of the family." },
  { photo: 'https://picsum.photos/100/100?random=24', name: 'Emily White', event: 'Private Dinner', rating: 5, text: "An unforgettable culinary journey. Each course was a work of art. It was the highlight of our anniversary celebration." },
  { photo: 'https://picsum.photos/100/100?random=25', name: 'Global Tech Inc.', event: 'Product Launch', rating: 5, text: "Luxe Catering exceeded our expectations. The canapés were a huge hit, and their attention to detail was impeccable. They helped make our launch a success." },
];

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-gold' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

const ReviewCard: React.FC<typeof allTestimonials[0]> = ({ photo, name, event, rating, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold h-full flex flex-col">
    <div className="flex items-center mb-4">
      <img src={photo} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{event}</p>
      </div>
    </div>
    <p className="font-poppins text-gray-600 italic mb-4 flex-grow">"{text}"</p>
    <div className="flex mt-auto">
      {[...Array(5)].map((_, i) => <Star key={i} filled={i < rating} />)}
    </div>
  </div>
);

const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4">Client Testimonials</h1>
            <p className="text-center max-w-3xl mx-auto text-gray-600">We are honored to have been a part of so many special moments. Here's what our clients have to say.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {allTestimonials.map((review, index) => (
              <AnimatedSection key={index}>
                <ReviewCard {...review} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
