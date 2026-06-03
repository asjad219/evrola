import React from 'react';
import { Mail, Phone, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = ({ onOpenQuote }) => {
  return (
    <footer className="footer-wrapper">
      {/* Section 9: Full-width CTA Banner right above footer */}
      <div className="footer-cta-banner">
        <div className="container cta-banner-container">
          <h2>Ready to Get More Booked Jobs?</h2>
          <button onClick={onOpenQuote} className="btn-outlined-white">
            Get Your Free Audit <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Footer columns */}
      <div className="footer-main">
        <div className="container footer-grid-3">
          {/* Column 1: Logo + Tagline */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <svg className="logo-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 17 6.5 17 11.5C17 14.5 14.5 17 12 17C9.5 17 7 14.5 7 11.5C7 6.5 12 2 12 2Z" fill="#FF6B35" />
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#0066FF" />
              </svg>
              <span className="footer-logo-text">Evro<span className="text-accent-blue">la</span></span>
            </div>
            <p className="footer-tagline">Scaling HVAC & plumbing companies with high-conversion websites and 24/7 AI Receptionists.</p>
            <div className="footer-social">
              <a href="#" aria-label="Globe"><Globe size={18} /></a>
              <a href="#" aria-label="Chat"><MessageSquare size={18} /></a>
            </div>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact details */}
          <div className="footer-col contact-col">
            <h4>Get in Touch</h4>
            <a href="mailto:hello@evrola.com" className="footer-contact-item">
              <Mail size={16} />
              hello@evrola.com
            </a>
            <a href="tel:8003876521" className="footer-contact-item">
              <Phone size={16} />
              (800) EVROLA
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Evrola. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="legal-dot">•</span>
            <span>Built with <span className="blue-square">■</span> for US Home Service Companies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
