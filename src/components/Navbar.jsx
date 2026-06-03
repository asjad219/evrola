import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          {/* Custom SVG combining flame (heating) & pipe/water droplet (plumbing) */}
          <svg className="logo-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 17 6.5 17 11.5C17 14.5 14.5 17 12 17C9.5 17 7 14.5 7 11.5C7 6.5 12 2 12 2Z" fill="#FF6B35" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#0066FF" />
          </svg>
          <span className="logo-text">Infu<span className="text-accent-blue">Syn</span></span>
        </div>

        <div className="nav-links desktop-only">
          <a href="#work">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="nav-actions desktop-only">
          <a href="#pricing" className="btn-clay-orange">
            Get Your Free Audit
          </a>
        </div>

        <button 
          className="mobile-menu-toggle mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-links">
            <a href="#work" className="mobile-link" style={{'--index': 1}} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#services" className="mobile-link" style={{'--index': 2}} onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="mobile-link" style={{'--index': 3}} onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="#pricing" className="mobile-link" style={{'--index': 4}} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#blog" className="mobile-link" style={{'--index': 5}} onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          </div>
          <div className="mobile-menu-cta" style={{'--index': 6}}>
            <a href="#pricing" className="btn-clay-orange w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Get Your Free Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
