
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">Get In Touch</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
              </div>
              <div>
                <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"></textarea>
              </div>
              <button type="submit" className="w-full bg-gold text-white font-semibold py-3 rounded-lg hover:bg-pastel-pink hover:text-charcoal transition-colors duration-300">
                Send Message
              </button>
            </form>
            <div className="w-full h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085887258004!2d-122.4194154846816!3d37.77492957975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e80b159%3A0x33b09d311559e51!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1618386377853!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg shadow-xl"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
