import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, Globe, Zap, Search, Star, MessageSquare } from 'lucide-react';
import './BentoServices.css';

const Counter = ({ endVal, suffix = "", duration = 1.5 }) => {
  const [count, setCount] = useState(1.0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    let start = 1.0;
    const end = parseFloat(endVal);
    const steps = 30;
    const increment = (end - start) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [triggered, endVal, duration]);

  return (
    <motion.span 
      onViewportEnter={() => setTriggered(true)}
      viewport={{ once: true }}
    >
      {count.toFixed(1)}{suffix}
    </motion.span>
  );
};

const BentoServices = () => {
  const [showDemoChat, setShowDemoChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi! Apex Heating & Air Assistant here. Are you looking to schedule emergency service or regular maintenance?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply = "Got it! Let me check the schedule. We have an opening tomorrow at 10:00 AM or 2:00 PM. Which works best for you?";
      if (userMsg.toLowerCase().includes('emergency') || userMsg.toLowerCase().includes('now') || userMsg.toLowerCase().includes('leak')) {
        reply = "⚠️ Understood! Since this is an emergency, I'm alerting our technician immediately. Please confirm your phone number.";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 1000);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHAT WE BUILD FOR YOU</span>
          <h2 className="section-title">Every Tool Your Business Needs to Dominate Local Search</h2>
          <p className="section-subtitle">We don't just build websites; we design complete lead capture machines tailored for HVAC and plumbing niches.</p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Large (2-col span) Website + AI Receptionist Bundle */}
          <motion.div 
            className="bento-card col-span-2 bento-hero-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-card-header">
              <div className="bento-icon-wrapper hero-icon">
                <Bot size={24} />
              </div>
              <span className="badge-pill-accent">BEST SELLER</span>
            </div>
            <div className="bento-card-body">
              <h3>Website + AI Receptionist Bundle</h3>
              <p>Our flagship offer. A gorgeous, custom dark-luxury portfolio site fully integrated with an n8n AI booking system that converts traffic 24/7 while you sleep.</p>
              
              <button className="btn-clay-orange bento-demo-btn" onClick={() => setShowDemoChat(!showDemoChat)}>
                {showDemoChat ? 'Close Demo' : 'Try Live Chat Demo'}
              </button>

              {showDemoChat && (
                <motion.div 
                  className="interactive-chat-demo glass-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="chat-demo-header">
                    <div className="chat-avatar-dot"></div>
                    <div>
                      <div className="chat-demo-title">n8n AI Receptionist</div>
                      <div className="chat-demo-status">Active chatbot integration</div>
                    </div>
                  </div>
                  <div className="chat-demo-messages">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`chat-msg ${msg.sender}`}>
                        <div className="msg-text">{msg.text}</div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendChat} className="chat-demo-input-form">
                    <input 
                      type="text" 
                      placeholder="Ask the AI, e.g. 'I need emergency AC repair'..." 
                      value={chatInput} 
                      onChange={e => setChatInput(e.target.value)} 
                    />
                    <button type="submit">Send</button>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Card 2: Tall (2-row span) Real Results Stat */}
          <motion.div 
            className="bento-card row-span-2 bento-stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bento-card-body stat-body">
              <div className="stat-icon">
                <LineChart size={32} color="#0066FF" />
              </div>
              <div className="big-stat">
                <Counter endVal="2.3" suffix="x" />
              </div>
              <h4>More Calls in 60 Days</h4>
              <p className="stat-desc">Average increase in customer phone inquiries after replacing template clone sites with InfuSyn portfolio platforms.</p>
              
              <div className="stat-growth-bar">
                <div className="growth-fill"></div>
              </div>
              <span className="stat-tag">Verified SEO Metric</span>
            </div>
          </motion.div>

          {/* Card 3: Small SEO Optimization */}
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bento-card-header">
              <div className="bento-icon-wrapper">
                <Search size={20} />
              </div>
            </div>
            <div className="bento-card-body">
              <h3>SEO Optimization</h3>
              <p>Advanced local schema, semantic markup, and Google Map-pack injection to get your business ranked high in your service areas.</p>
            </div>
          </motion.div>

          {/* Card 4: Small Mobile Speed */}
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bento-card-header">
              <div className="bento-icon-wrapper">
                <Globe size={20} />
              </div>
            </div>
            <div className="bento-card-body">
              <h3>Mobile Speed Optimization</h3>
              <p>Fast-loading code achieving Google PageSpeed scores of 95+. Captures leads who leave slow, laggy template sites.</p>
            </div>
          </motion.div>

          {/* Card 5: Small Google Reviews Integration */}
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bento-card-header">
              <div className="bento-icon-wrapper">
                <Star size={20} />
              </div>
            </div>
            <div className="bento-card-body">
              <h3>Google Reviews Integration</h3>
              <p>Displays live Google review counts and rotating testimonies on your front page automatically to establish instant local trust.</p>
            </div>
          </motion.div>

          {/* Card 6: Small AI Booking System */}
          <motion.div 
            className="bento-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bento-card-header">
              <div className="bento-icon-wrapper">
                <Zap size={20} />
              </div>
            </div>
            <div className="bento-card-body">
              <h3>AI Booking System</h3>
              <p>Deep n8n pipeline setup. Form submissions sync directly into your scheduling software like ServiceTitan, Housecall Pro, or Calendar.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
