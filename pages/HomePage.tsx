
import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import GallerySection from '../sections/GallerySection';
import EventsSection from '../sections/EventsSection';
import ReviewsSection from '../sections/ReviewsSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <EventsSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
