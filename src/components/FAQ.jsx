import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import './FAQ.css';

const faqItems = [
  {
    question: "Will this work in my city?",
    answer: "Yes, absolutely. We build advanced local SEO schemas and dedicated service area pages targeting your specific suburbs and zip codes so local homeowners find you first."
  },
  {
    question: "How many leads will I get?",
    answer: "On average, our clients see a 2.3x increase in inbound phone calls and form requests within 60 days. The exact volume varies depending on your local market competitiveness and active advertising."
  },
  {
    question: "How long does a typical website build take?",
    answer: "Our Starter package launches in 7 days. The Professional package takes 14 days, and the Growth + AI package takes 18 days from onboarding to live launch."
  },
  {
    question: "Do I need to write the website copy or provide photos?",
    answer: "No, we handle everything. We provide expert copywriting tailored specifically to the HVAC & plumbing trades to maximize conversions. You just review and approve."
  },
  {
    question: "How does the AI Receptionist booking integration work?",
    answer: "We configure an n8n-powered chatbot that connects directly to your calendar (Jobber, ServiceTitan, Housecall Pro, or Google Calendar). It qualifies leads 24/7 and books slots automatically."
  },
  {
    question: "Do I own 100% of the website after launch?",
    answer: "Yes. Once the setup fee is paid, you own 100% of the code, domain, assets, and database. There is no 'hostage-taking' of your digital property."
  },
  {
    question: "What is covered in the monthly retainer fee?",
    answer: "It covers lightning-fast cloud hosting, security monitoring, SSL certificates, weekly backups, and minor text/image edits whenever you need them."
  },
  {
    question: "What if I already have Google Ads or local SEO running?",
    answer: "Perfect! A high-converting website acts as a multiplier. By converting a higher percentage of visitors into booked jobs, it makes your current ad spend significantly more profitable."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Starts with first item open as standard
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const filteredFaqs = faqItems.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Everything HVAC & Plumbing Owners Ask Before Hiring Us</h2>
          <p className="section-subtitle">Got questions? We've got answers. Explore how we help home service owners build highly profitable websites.</p>
        </div>

        {/* Live Search Bar */}
        <div className="faq-search-wrapper">
          <div className="faq-search-bar glass-panel">
            <Search size={18} className="faq-search-icon" />
            <input 
              type="text" 
              placeholder="Search frequently asked questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question-btn" 
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <Plus className="faq-toggle-icon" size={18} />
                  </button>
                  
                  <div className={`faq-answer-panel ${isOpen ? 'expanded' : ''}`}>
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faq-no-results glass-panel">
              No questions matched your search query. Try searching for "speed", "leads", or "AI".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
