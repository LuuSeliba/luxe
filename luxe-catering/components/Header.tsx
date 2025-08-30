
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', sectionId: 'hero' },
  { name: 'About', path: '/about', sectionId: 'about' },
  { name: 'Gallery', path: '/gallery', sectionId: 'gallery' },
  { name: 'Events', path: '/events', sectionId: 'events' },
  { name: 'Reviews', path: '/reviews', sectionId: 'reviews' },
  { name: 'Contact', path: '/contact', sectionId: 'contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const onHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (onHomePage) {
        const sections = navLinks.map(link => document.getElementById(link.sectionId));
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onHomePage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavItem: React.FC<{ link: typeof navLinks[0] }> = ({ link }) => {
    const baseClasses = "px-4 py-2 text-sm uppercase tracking-wider font-semibold border border-gold rounded-full transition-all duration-300 ease-in-out";
    const hoverClasses = "hover:border-pastel-pink hover:bg-pastel-pink/20 hover:text-charcoal";
    
    if (onHomePage) {
      const isActive = activeSection === link.sectionId;
      const activeClasses = isActive ? "bg-gold text-white" : "text-white md:text-charcoal";
      const scrolledText = isScrolled ? "text-charcoal" : "text-white";
      return (
        <a
          href={`#${link.sectionId}`}
          onClick={(e) => { e.preventDefault(); scrollToSection(link.sectionId); }}
          className={`${baseClasses} ${hoverClasses} ${isActive ? 'bg-gold !text-white' : scrolledText}`}
        >
          {link.name}
        </a>
      );
    }

    return (
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `${baseClasses} ${hoverClasses} text-charcoal ${isActive ? 'bg-gold text-white' : ''}`
        }
      >
        {link.name}
      </NavLink>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !onHomePage ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-playfair font-bold transition-colors duration-300 ${isScrolled || !onHomePage ? 'text-charcoal' : 'text-white'}`}>
          Luxe Catering
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => <NavItem key={link.name} link={link} />)}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none ${isScrolled || !onHomePage ? 'text-charcoal' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => {
               if (onHomePage) {
                return (
                  <a
                    key={link.name}
                    href={`#${link.sectionId}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.sectionId); }}
                    className="px-4 py-2 text-sm uppercase tracking-wider font-semibold border border-gold rounded-full text-charcoal"
                  >
                    {link.name}
                  </a>
                )
               }
               return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-sm uppercase tracking-wider font-semibold border border-gold rounded-full text-charcoal"
                >
                  {link.name}
                </NavLink>
               )
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
