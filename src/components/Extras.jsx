import React, { useState } from 'react';
import './Extras.css';
import { Phone, X, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export const FloatingQuoteForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Website + AI Receptionist',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep it open for 5 seconds to show success then auto close
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', service: 'Website + AI Receptionist', time: '' });
      }, 5000);
    }, 500);
  };

  return (
    <>
      {/* Floating Trigger Button in Bottom Right */}
      <div className="floating-trigger-container">
        <button 
          className="floating-trigger-btn btn-clay-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Request quote popup"
        >
          {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
          <span className="trigger-text">Get Free Audit</span>
        </button>
      </div>

      {/* Slide-in Glassmorphic Quote Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="floating-quote-panel glass-panel"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="panel-header">
              <h3>Get Your Free Audit</h3>
              <button className="panel-close-btn" onClick={() => setIsOpen(false)}>
                <X size={16} />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="panel-form">
                <p className="panel-subtitle">Get a custom performance, speed, & lead audit delivered in 24 hours.</p>
                
                <div className="form-group">
                  <label htmlFor="quote-name">Your Name *</label>
                  <input 
                    type="text" 
                    id="quote-name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quote-phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="quote-phone"
                    required
                    placeholder="e.g. (555) 000-0000"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quote-service">Select Niche Service</label>
                  <select 
                    id="quote-service"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Website + AI Receptionist">Website + AI Receptionist</option>
                    <option value="Local SEO / Google Maps">Local SEO & Google Maps</option>
                    <option value="PageSpeed Optimization">PageSpeed Optimization</option>
                    <option value="Custom Web Redesign">Custom Web Redesign</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quote-time">Best Time to Call</label>
                  <input 
                    type="text" 
                    id="quote-time"
                    placeholder="e.g. Mornings, Afternoon, Anytime"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-clay-blue panel-submit-btn w-full">
                  <span>Get My Free Audit</span>
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <motion.div 
                className="panel-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <CheckCircle size={48} className="success-icon" />
                <h4>Request Received!</h4>
                <p>Thank you, <strong>{formData.name}</strong>. We are compiling your report.</p>
                <div className="success-sms-alert">
                  <span>📱 SMS Confirmation sent to <strong>{formData.phone}</strong></span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
