
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white bg-charcoal">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <h1 className={`font-playfair text-5xl md:text-7xl font-bold transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Bringing Flavor to Every Occasion
        </h1>
        <p className={`font-poppins mt-4 text-lg md:text-xl transition-all duration-1000 ease-out delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Catering made with love, passion, and style.
        </p>
        <button 
          onClick={scrollToContact}
          className={`mt-8 px-8 py-3 bg-gradient-to-r from-gold to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:from-pastel-pink hover:to-pink-300 transform hover:scale-105 transition-all duration-500 ease-out delay-500 animate-bounce-slow ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          Book Us Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
