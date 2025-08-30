
import React, { useState } from 'react';

const allImages = [
  { src: 'https://picsum.photos/800/600?random=40', category: 'Starters' },
  { src: 'https://picsum.photos/800/600?random=41', category: 'Main Dishes' },
  { src: 'https://picsum.photos/800/600?random=42', category: 'Desserts' },
  { src: 'https://picsum.photos/800/600?random=43', category: 'Events' },
  { src: 'https://picsum.photos/800/600?random=44', category: 'Starters' },
  { src: 'https://picsum.photos/800/600?random=45', category: 'Main Dishes' },
  { src: 'https://picsum.photos/800/600?random=46', category: 'Desserts' },
  { src: 'https://picsum.photos/800/600?random=47', category: 'Events' },
  { src: 'https://picsum.photos/800/600?random=48', category: 'Starters' },
  { src: 'https://picsum.photos/800/600?random=49', category: 'Main Dishes' },
  { src: 'https://picsum.photos/800/600?random=50', category: 'Desserts' },
  { src: 'https://picsum.photos/800/600?random=51', category: 'Events' },
];

const categories = ['All', 'Starters', 'Main Dishes', 'Desserts', 'Events'];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filteredImages = filter === 'All' ? allImages : allImages.filter(img => img.category === filter);

  return (
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4">Our Gallery</h1>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">A feast for the eyes. Explore our gallery of culinary delights and event stylings.</p>

          <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                  filter === category ? 'bg-gold text-white' : 'bg-gray-200 text-charcoal hover:bg-pastel-pink/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group aspect-w-4 aspect-h-3">
                <img src={image.src} alt={`${image.category} dish`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-end p-4 transition-all duration-500">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
