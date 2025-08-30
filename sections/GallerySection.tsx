import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
// FIX: Import 'useScrollObserver' to resolve reference error.
import { useScrollObserver } from '../hooks/useScrollObserver';

const galleryImages = [
  { src: 'https://picsum.photos/600/800?random=10', alt: 'Dish 1' },
  { src: 'https://picsum.photos/600/400?random=11', alt: 'Dish 2' },
  { src: 'https://picsum.photos/600/600?random=12', alt: 'Dish 3' },
  { src: 'https://picsum.photos/600/400?random=13', alt: 'Dish 4' },
  { src: 'https://picsum.photos/600/800?random=14', alt: 'Dish 5' },
  { src: 'https://picsum.photos/600/600?random=15', alt: 'Dish 6' },
];

const GalleryItem: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
    const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });
    return (
        <div ref={ref} className={`relative overflow-hidden rounded-lg shadow-lg group transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img src={src} alt={alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-500">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Dish</span>
            </div>
        </div>
    );
}

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">Culinary Creations</h2>
        </AnimatedSection>
        <div className="columns-2 md:columns-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
               <GalleryItem src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;