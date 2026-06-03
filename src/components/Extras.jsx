import React, { useState } from 'react';
import './Extras.css';
import { Phone, X } from 'lucide-react';

export const EmergencyRibbon = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="emergency-ribbon">
      <div className="container ribbon-content">
        <a href="tel:5550000000" className="ribbon-text-link">
          <div className="ribbon-text">
            <Phone size={14} className="phone-pulse-icon" />
            <span>Emergency Service? Call 24/7 &rarr; (555) 000-0000</span>
          </div>
        </a>
        <button 
          className="ribbon-close-btn desktop-only" 
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export const MobileStickyBar = () => {
  return (
    <div className="mobile-sticky-bar mobile-only">
      <div className="sticky-bar-grid">
        <a href="tel:5550000000" className="sticky-btn btn-call">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a href="#contact" className="sticky-btn btn-chat">
          <span className="chat-dot"></span>
          <span>Chat Now</span>
        </a>
      </div>
    </div>
  );
};
