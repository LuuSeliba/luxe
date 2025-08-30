
import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const testimonials = [
  {
    photo: 'https://picsum.photos/100/100?random=20',
    name: 'Jessica & Tom',
    event: 'Wedding',
    rating: 5,
    text: "Luxe Catering made our wedding day absolutely perfect. The food was divine, and the service was flawless. Our guests are still raving about it!"
  },
  {
    photo: 'https://picsum.photos/100/100?random=21',
    name: 'David Lee',
    event: 'Corporate Gala',
    rating: 5,
    text: "Truly professional from start to finish. The setup was elegant, and the menu was creative and delicious. Highly recommended for any corporate function."
  },
  {
    photo: 'https://picsum.photos/100/100?random=22',
    name: 'Maria Rodriguez',
    event: '50th Birthday Party',
    rating: 5,
    text: "The best catering experience I've ever had. They took care of every detail, allowing me to enjoy the party. The food was simply out of this world."
  }
];

const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 transition-colors duration-300 ${filled ? 'text-gold' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="relative h-80 md:h-64 overflow-hidden">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
                <img src={review.photo} alt={review.name} className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-8 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-gray-600 italic mb-4">"{review.text}"</p>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.event}</p>
                  <div className="flex justify-center md:justify-start mt-2 group">
                    {[...Array(5)].map((_, i) => <Star key={i} filled={i < review.rating} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
