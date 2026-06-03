import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowDown, ChevronRight, MessageSquare, Check, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Radial Glow */}
      <div className="hero-radial-glow"></div>

      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge chip */}
          <div className="badge-chip hero-badge">
            <span className="badge-dot">■</span>
            <span>HVAC & Plumbing Web Design Specialists</span>
          </div>
          
          {/* H1 Display */}
          <h1 className="hero-title">
            We Build Websites <br />
            That Make Your <br />
            Phone <span className="text-gradient font-bold">Ring</span>
          </h1>
          
          {/* Subtext */}
          <p className="hero-subtext">
            Conversion-first websites + AI booking systems for US HVAC & plumbing companies. 
            No fluff. Real leads.
          </p>

          {/* Two CTAs */}
          <div className="hero-actions">
            <a href="#work" className="btn-clay-blue btn-lg">
              See Our Work <ArrowDown size={16} />
            </a>
            <a href="#pricing" className="btn-outline-orange btn-lg">
              Get Free Audit <ChevronRight size={16} />
            </a>
          </div>

          {/* Trust Row */}
          <div className="trust-row">
            <div className="trust-item stars-container">
              <div className="gold-stars">
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
              </div>
              <span className="trust-text">4.9 from 47 clients</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="square-bullet">■</span>
              <span className="trust-text">Avg. 2.3x more calls in 60 days</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="square-bullet">■</span>
              <span className="trust-text">HVAC Niche Only</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* 3D clay-style device frame */}
          <div className="device-mockup glass-panel">
            <div className="device-header">
              <div className="header-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="device-address-bar">
                <span className="lock-icon">🔒</span> apexheating-air.com
              </div>
            </div>
            <div className="device-body">
              {/* Mini mockup interior */}
              <div className="mini-navbar">
                <div className="mini-logo">APEX</div>
                <div className="mini-nav-links">
                  <span></span>
                  <span></span>
                </div>
                <div className="mini-cta-btn">Call Now</div>
              </div>
              
              <div className="mini-hero">
                <div className="mini-title-line"></div>
                <div className="mini-title-line short"></div>
                <div className="mini-paragraph-line"></div>
                <div className="mini-paragraph-line"></div>
                
                {/* 3D Pressable Button in Mockup */}
                <div className="mini-hero-btn">Get Emergency Repair</div>
              </div>

              <div className="mini-features">
                <div className="mini-feature-card">
                  <div className="feature-card-icon">🔥</div>
                  <div className="feature-card-line"></div>
                </div>
                <div className="mini-feature-card">
                  <div className="feature-card-icon">❄️</div>
                  <div className="feature-card-line"></div>
                </div>
              </div>
            </div>

            {/* Floating Lead Card (New Lead!) */}
            <motion.div 
              className="floating-card lead-card glass-panel"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="lead-icon-circle">
                <Phone size={14} color="#FFFFFF" />
              </div>
              <div className="lead-card-text">
                <div className="lead-card-title">New Lead!</div>
                <div className="lead-card-sub text-success">Emergency AC Repair</div>
              </div>
              <span className="lead-time">Just now</span>
            </motion.div>

            {/* Floating Review Card */}
            <motion.div 
              className="floating-card review-card glass-panel"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="review-stars">
                <Star size={10} fill="#F59E0B" color="#F59E0B" />
                <Star size={10} fill="#F59E0B" color="#F59E0B" />
                <Star size={10} fill="#F59E0B" color="#F59E0B" />
                <Star size={10} fill="#F59E0B" color="#F59E0B" />
                <Star size={10} fill="#F59E0B" color="#F59E0B" />
              </div>
              <div className="review-text">"Our calendar is completely full!"</div>
              <div className="review-author">- Apex HVAC, TX</div>
            </motion.div>

            {/* Floating AI Agent Card */}
            <motion.div 
              className="floating-card ai-card glass-panel"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="ai-pulse-dot"></div>
              <div className="ai-card-text">
                <div className="ai-title">AI Receptionist</div>
                <div className="ai-status">Booking lead...</div>
              </div>
            </motion.div>
          </div>
          <div className="hero-glow-blob"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
