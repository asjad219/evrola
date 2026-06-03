import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert, Star } from 'lucide-react';
import './Pricing.css';

const pricingTiers = [
  {
    name: "Starter",
    setup: 997,
    monthly: 149,
    ideal: "Solo plumber, 1-3 vans, first website ever",
    ctaText: "Get Started",
    recommended: false,
    features: [
      { name: "5 Pages", included: true },
      { name: "Mobile Optimized & Speed Tested", included: true },
      { name: "Click-to-Call Hero CTAs", included: true },
      { name: "Google Reviews Widget", included: false },
      { name: "Scroll-Triggered Animations", included: false },
      { name: "Local SEO Schema Setup", included: false },
      { name: "Interactive Before/After Slider", included: false },
      { name: "AI Chat Booking (n8n)", included: false },
      { name: "Monthly SEO Reporting", included: false },
      { name: "Google Business Mgmt Support", included: false },
      { name: "Support: 72hr Response Time", included: true },
      { name: "Delivery: 7 Days Speed Launch", included: true }
    ]
  },
  {
    name: "Professional",
    setup: 1997,
    monthly: 249,
    ideal: "Established company, replacing bad site",
    ctaText: "Go Professional",
    recommended: true,
    features: [
      { name: "8 Pages", included: true },
      { name: "Mobile Optimized & Speed Tested", included: true },
      { name: "Click-to-Call Hero CTAs", included: true },
      { name: "Google Reviews Widget", included: true },
      { name: "Scroll-Triggered Animations", included: true },
      { name: "Local SEO Schema Setup", included: true },
      { name: "Interactive Before/After Slider", included: true },
      { name: "AI Chat Booking (n8n)", included: false },
      { name: "Monthly SEO Reporting", included: false },
      { name: "Google Business Mgmt Support", included: false },
      { name: "Support: 48hr Response Time", included: true },
      { name: "Delivery: 14 Days Launch", included: true }
    ]
  },
  {
    name: "Growth + AI",
    setup: 3497,
    monthly: 399,
    ideal: "Growing company, 5-15 employees, wants scale",
    ctaText: "Unleash AI Power",
    recommended: false,
    features: [
      { name: "12 Pages", included: true },
      { name: "Mobile Optimized & Speed Tested", included: true },
      { name: "Click-to-Call Hero CTAs", included: true },
      { name: "Google Reviews Widget", included: true },
      { name: "Scroll-Triggered Animations", included: true },
      { name: "Local SEO Schema Setup", included: true },
      { name: "Interactive Before/After Slider", included: true },
      { name: "AI Chat Booking (n8n Integration)", included: true },
      { name: "Monthly SEO Reporting & Analytics", included: true },
      { name: "Google Business Mgmt Support", included: true },
      { name: "Support: 24hr Priority Response", included: true },
      { name: "Delivery: 18 Days Custom Launch", included: true }
    ]
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Discounted monthly calculation (20% off)
  const getMonthlyPrice = (monthly) => {
    return isAnnual ? Math.round(monthly * 0.8) : monthly;
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">OUR PACKAGES</span>
          <h2 className="section-title">Transparent Pricing. No Surprises. Just Results.</h2>
          <p className="section-subtitle">Choose the plan that fits your growth ambitions. All maintenance packages cover lightning-fast hosting and updates.</p>
        </div>

        {/* Monthly/Annual Toggle with Save 20% badge */}
        <div className="pricing-toggle-wrapper">
          <div className="pricing-toggle-pill glass-panel">
            <button 
              className={`toggle-option ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Retainer
            </button>
            <button 
              className={`toggle-option ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual Retainer
            </button>
          </div>
          {isAnnual && (
            <motion.div 
              className="save-badge-chip"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              🔥 Save 20%
            </motion.div>
          )}
        </div>

        {/* 3-tier pricing cards */}
        <div className="pricing-grid-3">
          {pricingTiers.map((tier, index) => {
            const monthlyPrice = getMonthlyPrice(tier.monthly);
            return (
              <motion.div 
                key={index}
                className={`pricing-card-v2 glass-panel ${tier.recommended ? 'recommended-highlight' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {tier.recommended && <div className="popular-ribbon">MOST POPULAR</div>}
                
                <div className="card-top">
                  <h3>{tier.name}</h3>
                  <p className="tier-ideal-text">{tier.ideal}</p>
                  
                  <div className="pricing-info">
                    <div className="setup-cost">
                      <span className="cost-label">Setup Fee</span>
                      <span className="cost-value">${tier.setup.toLocaleString()}</span>
                      <span className="cost-period">one-time</span>
                    </div>
                    
                    <div className="retainer-cost">
                      <span className="cost-label">Monthly Retainer</span>
                      <span className="cost-value">${monthlyPrice}</span>
                      <span className="cost-period">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="card-middle">
                  <div className="checklist-header">What's Included:</div>
                  <ul className="tier-checklist">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className={feature.included ? 'included' : 'excluded'}>
                        {feature.included ? (
                          <Check size={14} className="feature-icon-check" />
                        ) : (
                          <X size={14} className="feature-icon-cross" />
                        )}
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-bottom">
                  <a 
                    href="#contact" 
                    className={`pricing-cta-btn ${tier.recommended ? 'btn-clay-blue' : 'btn-outline-pricing'}`}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="pricing-trust-footer">
          <div className="trust-footer-pill glass-panel">
            <span className="trust-dot">■</span>
            <span>50% upfront. 50% on launch. Money-back design guarantee.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
