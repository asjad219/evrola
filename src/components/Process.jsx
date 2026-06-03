import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, Bot } from 'lucide-react';
import './Process.css';

const steps = [
  {
    day: "Day 1",
    title: "Free Website Audit",
    desc: "We analyze your site's speed, mobile responsiveness, and ranking gaps.",
    icon: <Search size={22} />
  },
  {
    day: "Days 2–5",
    title: "Design Sprint",
    desc: "We craft a premium, bespoke visual layout centered on conversions.",
    icon: <Palette size={22} />
  },
  {
    day: "Days 6–14",
    title: "Build & Revise",
    desc: "We code your fast website and refine it based on your feedback.",
    icon: <Code size={22} />
  },
  {
    day: "Days 15–18",
    title: "Launch & SEO",
    desc: "We point your domain and submit pages to Google Index.",
    icon: <Rocket size={22} />
  },
  {
    day: "Days 18–21",
    title: "AI Receptionist Setup",
    desc: "We configure n8n chat flows to sync with your calendar.",
    icon: <Bot size={22} />
  }
];

const Process = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">From First Call to More Bookings — in 21 Days</h2>
          <p className="section-subtitle">Our streamlined, 5-step blueprint designed to elevate your brand and capture missed calls rapidly.</p>
        </div>

        <div className="process-timeline-container">
          {/* Dashed Connector Line */}
          <div className="timeline-connector"></div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="step-badge-wrapper">
                  <div className="step-number-badge">{index + 1}</div>
                </div>
                
                <div className="step-card glass-panel">
                  <div className="step-icon-circle">
                    {step.icon}
                  </div>
                  <span className="step-day">{step.day}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
