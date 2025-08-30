
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transform hover:scale-110 transition-all duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Luxe Catering</h3>
            <p className="text-gray-400 font-poppins text-sm">Catering made with love, passion, and style for your unforgettable moments.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-poppins uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-poppins uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Flavor St, Gourmet City, 45678</li>
              <li>(123) 456-7890</li>
              <li>contact@luxecatering.com</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.316 2.427-.364C9.79 2.013 10.144 2 12.315 2zM12 8.118c-2.146 0-3.882 1.736-3.882 3.882s1.736 3.882 3.882 3.882 3.882-1.736 3.882-3.882S14.146 8.118 12 8.118zM12 14.162c-1.205 0-2.182-.977-2.182-2.182s.977-2.182 2.182-2.182 2.182.977 2.182 2.182-.977 2.182-2.182 2.182zM16.802 6.118a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.96 7.31c.203.003.407.013.61.028 1.83.13 3.425 1.054 4.582 2.446 1.157 1.393 1.63 3.085 1.44 4.836-.19 1.75-1.08 3.32-2.4 4.45-1.32 1.13-3.03 1.71-4.83 1.6-1.8-.11-3.41-1.02-4.5-2.4-1.09-1.38-1.53-3.07-1.35-4.82.18-1.75 1.05-3.35 2.4-4.5 1.35-1.15 3.06-1.77 4.88-1.64.09.006.18.018.27.03zm-2.29 2.71c-.13-1.2.92-2.2 2.12-2.07 1.2.13 2.1 1.25 1.97 2.45-.13 1.2-.95 2.07-2.15 2.07-1.2 0-2.07-.95-1.94-2.45z" /><path d="M19.3 2H4.7C3.2 2 2 3.2 2 4.7v14.6C2 20.8 3.2 22 4.7 22h14.6c1.5 0 2.7-1.2 2.7-2.7V4.7C22 3.2 20.8 2 19.3 2zM12.13 18.42c2.4 0 4.63-1.4 5.6-3.6.97-2.2.43-4.85-1.3-6.45-1.73-1.6-4.23-2.1-6.45-1.3-2.2.8-3.6 2.9-3.6 5.3s1.4 4.5 3.75 5.05z" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxe Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
