
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-center max-w-3xl mx-auto text-gray-600">We'd love to hear about your event. Please fill out the form below or reach out to us directly.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="md:col-span-2">
                <AnimatedSection>
                    <form className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
                            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
                        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
                        <input type="text" placeholder="Event Type (e.g., Wedding, Corporate)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
                        <textarea placeholder="Tell us about your event..." rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"></textarea>
                        <button type="submit" className="w-full bg-gold text-white font-semibold py-3 rounded-lg hover:bg-pastel-pink hover:text-charcoal transition-colors duration-300">
                            Submit Inquiry
                        </button>
                    </form>
                </AnimatedSection>
            </div>
            
            <div className="space-y-8">
                <AnimatedSection>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h3 className="font-playfair text-2xl font-bold mb-3">Our Office</h3>
                        <p className="text-gray-600">123 Flavor St,<br/>Gourmet City, 45678</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h3 className="font-playfair text-2xl font-bold mb-3">Contact Details</h3>
                        <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
                        <p className="text-gray-600"><strong>Email:</strong> contact@luxecatering.com</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h3 className="font-playfair text-2xl font-bold mb-3">Opening Hours</h3>
                        <p className="text-gray-600">Mon - Fri: 9am - 6pm</p>
                        <p className="text-gray-600">Sat: 10am - 4pm</p>
                        <p className="text-gray-600">Sun: By Appointment</p>
                    </div>
                </AnimatedSection>
            </div>
          </div>
          
           <AnimatedSection>
              <div className="mt-16 w-full h-96 rounded-lg shadow-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085887258004!2d-122.4194154846816!3d37.77492957975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e80b159%3A0x33b09d311559e51!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1618386377853!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
              </div>
           </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
