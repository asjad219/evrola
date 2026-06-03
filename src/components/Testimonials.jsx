import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const row1Testimonials = [
  {
    stars: 5,
    quote: "InfuSyn rebuilt our site in 10 days and added the AI receptionist. We got 3 emergency calls on the first weekend that would have gone to voicemail!",
    name: "Dave Richardson",
    role: "Owner, Apex Heating",
    city: "Houston, TX",
    initials: "DR"
  },
  {
    stars: 5,
    quote: "Our old template site was a mobile disaster. Now we load instantly and are on page 1 of Google in our city.",
    name: "Mike Sullivan",
    role: "Founder, Cascade Plumbing",
    city: "Portland, OR",
    initials: "MS"
  },
  {
    stars: 5,
    quote: "The n8n AI booking system is a game-changer. It books calls directly into Jobber. No more missed calls at night.",
    name: "Jeff Taylor",
    role: "Owner, Desert Air",
    city: "Las Vegas, NV",
    initials: "JT"
  },
  {
    stars: 5,
    quote: "We've tried 3 different web design agencies. InfuSyn is the only one that understands the HVAC niche. Highly recommend!",
    name: "Brandon King",
    role: "President, Sunbelt AC",
    city: "Miami, FL",
    initials: "BK"
  }
];

const row2Testimonials = [
  {
    stars: 5,
    quote: "The Before/After PageSpeed score alone convinced me. Our old site was a 32, new is 98. More traffic and double the calls.",
    name: "Chris Larsen",
    role: "Manager, Vanguard Mechanical",
    city: "Chicago, IL",
    initials: "CL"
  },
  {
    stars: 5,
    quote: "Outstanding service. The claymorphic design looks premium and pressable. Our customers love the mobile sticky CTAs.",
    name: "Steve Graham",
    role: "Owner, Metro Plumbers",
    city: "Atlanta, GA",
    initials: "SG"
  },
  {
    stars: 5,
    quote: "We spend $2k a month on Google Ads, and our old site was wasting clicks. InfuSyn doubled our conversion rate.",
    name: "Ryan Hughes",
    role: "Owner, Heartland Heating",
    city: "Omaha, NE",
    initials: "RH"
  },
  {
    stars: 5,
    quote: "Having an AI receptionist answering questions and qualifying leads 24/7 is like having a full-time assistant.",
    name: "Kevin Patterson",
    role: "Founder, Ironclad Plumbing",
    city: "Pittsburgh, PA",
    initials: "KP"
  }
];

const Testimonials = () => {
  // Triple items for infinite scrolling loop
  const displayRow1 = [...row1Testimonials, ...row1Testimonials, ...row1Testimonials];
  const displayRow2 = [...row2Testimonials, ...row2Testimonials, ...row2Testimonials];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">VOICE OF CLIENTS</span>
          <h2 className="section-title">What HVAC & Plumbing Owners Are Saying</h2>
          <p className="section-subtitle">Read how our high-performance portfolio sites and AI receptionist integrations transform local service companies.</p>
        </div>
      </div>

      <div className="testimonials-marquee-container">
        {/* Row 1 - Left scrolling */}
        <div className="t-marquee-track t-scroll-left">
          <div className="t-marquee-content">
            {displayRow1.map((item, index) => (
              <div key={`t1-${index}`} className="testimonial-card">
                <div className="t-stars">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                
                <p className="t-quote">"{item.quote}"</p>
                
                <div className="t-divider"></div>
                
                <div className="t-author">
                  <div className="t-avatar">
                    {item.initials}
                  </div>
                  <div className="t-info">
                    <span className="t-name">{item.name}</span>
                    <span className="t-role">{item.role} | {item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right scrolling */}
        <div className="t-marquee-track t-scroll-right">
          <div className="t-marquee-content">
            {displayRow2.map((item, index) => (
              <div key={`t2-${index}`} className="testimonial-card">
                <div className="t-stars">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                
                <p className="t-quote">"{item.quote}"</p>
                
                <div className="t-divider"></div>
                
                <div className="t-author">
                  <div className="t-avatar">
                    {item.initials}
                  </div>
                  <div className="t-info">
                    <span className="t-name">{item.name}</span>
                    <span className="t-role">{item.role} | {item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
