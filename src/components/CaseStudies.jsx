import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeftRight } from 'lucide-react';
import './CaseStudies.css';

const BeforeAfterSlider = ({ beforeTitle, afterTitle, beforeBg, afterBg, beforeSpeed, afterSpeed }) => {
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {/* After / New Site (Bottom Layer) */}
        <div className="slider-pane after-pane" style={{ backgroundColor: afterBg }}>
          <div className="pane-content after-content">
            <span className="pane-watermark">AFTER (INFUSYN)</span>
            <div className="pane-nav">
              <span className="dot"></span>
              <span className="nav-line"></span>
            </div>
            <div className="pane-site-hero">
              <h5 className="after-h5">{afterTitle}</h5>
              <div className="after-paragraph-line"></div>
              <div className="after-paragraph-line short"></div>
              <div className="after-cta">Book Appointment</div>
            </div>
            {/* Speed Chip */}
            <div className="speed-chip speed-green">
              <span>PageSpeed</span>
              <strong>{afterSpeed}</strong>
            </div>
          </div>
        </div>
        
        {/* Before / Old Site (Top Layer, width is clipped) */}
        <div className="slider-pane before-pane" style={{ width: `${sliderVal}%`, backgroundColor: beforeBg }}>
          <div className="pane-content before-content">
            <span className="pane-watermark">BEFORE (TEMPLATE CLONE)</span>
            <div className="pane-site-hero">
              <h5 className="before-h5">{beforeTitle}</h5>
              <p className="before-p">Cheap prices. Quality work. Best in town since 1998.</p>
              <div className="before-cta">Call Us</div>
            </div>
            {/* Speed Chip */}
            <div className="speed-chip speed-red">
              <span>PageSpeed</span>
              <strong>{beforeSpeed}</strong>
            </div>
          </div>
        </div>
        
        {/* Divider Handle */}
        <div className="slider-handle" style={{ left: `${sliderVal}%` }}>
          <div className="slider-handle-button">
            <ArrowLeftRight size={14} className="slider-handle-icon" />
          </div>
        </div>
        
        {/* Drag controller overlay */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderVal} 
          onChange={(e) => setSliderVal(e.target.value)} 
          className="slider-range-input" 
          aria-label="Before/After drag slider"
        />
      </div>
    </div>
  );
};

const caseStudies = [
  {
    company: "Apex Heating & Air",
    city: "Dallas, TX",
    niche: "HVAC Specialists",
    metric: "+180% Calls",
    stats: {
      pageSpeed: "32 → 98",
      conversions: "1.2% → 5.4%",
      ranking: "Page 4 → Page 1"
    },
    beforeTitle: "Dallas AC Service & Repair",
    afterTitle: "Luxury Indoor Climate Systems",
    beforeBg: "#F3F4F6",
    afterBg: "#0D1B2A",
    beforeSpeed: "32",
    afterSpeed: "98"
  },
  {
    company: "Cascade Plumbing",
    city: "Portland, OR",
    niche: "Emergency Plumbers",
    metric: "+120% Leads",
    stats: {
      pageSpeed: "28 → 96",
      conversions: "0.9% → 4.8%",
      ranking: "Page 5 → Page 1"
    },
    beforeTitle: "Cascade Plumb Co.",
    afterTitle: "24/7 Rapid Emergency Response",
    beforeBg: "#E5E7EB",
    afterBg: "#051A2E",
    beforeSpeed: "28",
    afterSpeed: "96"
  },
  {
    company: "Desert Breeze HVAC",
    city: "Las Vegas, NV",
    niche: "Climate Control",
    metric: "+210% Bookings",
    stats: {
      pageSpeed: "35 → 99",
      conversions: "1.5% → 6.1%",
      ranking: "Page 3 → Page 1"
    },
    beforeTitle: "Vegas AC & Heating",
    afterTitle: "Luxury Air & Smart Controls",
    beforeBg: "#F9FAFB",
    afterBg: "#0A1D37",
    beforeSpeed: "35",
    afterSpeed: "99"
  }
];

const CaseStudies = () => {
  return (
    <section id="work" className="cases-section">
      <div className="cases-radial-glow"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-label">PROOF IT WORKS</span>
          <h2 className="section-title">Real Websites. Real Results. <br />Real HVAC & Plumbing Companies.</h2>
          <p className="section-subtitle">We replace generic, slow template clones with high-converting digital assets. Drag the slider to see the difference.</p>
        </div>

        <div className="cases-grid">
          {caseStudies.map((project, index) => (
            <motion.div 
              key={index}
              className="case-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Interactive Before/After slider */}
              <BeforeAfterSlider 
                beforeTitle={project.beforeTitle}
                afterTitle={project.afterTitle}
                beforeBg={project.beforeBg}
                afterBg={project.afterBg}
                beforeSpeed={project.beforeSpeed}
                afterSpeed={project.afterSpeed}
              />

              <div className="case-content">
                <div className="case-meta">
                  <span className="case-niche">{project.niche}</span>
                  <span className="case-bullet">•</span>
                  <span className="case-location">{project.company} | {project.city}</span>
                </div>
                
                <div className="case-metric-badge">{project.metric}</div>
                
                <div className="case-stats-grid">
                  <div className="case-stat-item">
                    <span className="stat-label">PageSpeed Score</span>
                    <strong className="stat-value text-success">{project.stats.pageSpeed}</strong>
                  </div>
                  <div className="case-stat-item">
                    <span className="stat-label">Lead Conversions</span>
                    <strong className="stat-value text-success">{project.stats.conversions}</strong>
                  </div>
                  <div className="case-stat-item">
                    <span className="stat-label">Google Ranking</span>
                    <strong className="stat-value text-success">{project.stats.ranking}</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="cases-cta-wrapper">
          <a href="#pricing" className="btn-clay-blue">
            See All 12 Case Studies <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
