import React from 'react';
import { MapPin } from 'lucide-react';
import './Marquee.css';

const row1Items = [
  { name: "Apex Heating & Air", city: "Dallas, TX" },
  { name: "ProPlumb Services", city: "Seattle, WA" },
  { name: "Blue Collar AC", city: "Phoenix, AZ" },
  { name: "Vanguard Mechanical", city: "Chicago, IL" },
  { name: "Metro Plumbers", city: "Atlanta, GA" },
  { name: "Sunbelt AC", city: "Miami, FL" }
];

const row2Items = [
  { name: "Everest Air & Heat", city: "Denver, CO" },
  { name: "Cascade Plumbing", city: "Portland, OR" },
  { name: "Desert Breeze HVAC", city: "Las Vegas, NV" },
  { name: "Ironclad Plumbing", city: "Pittsburgh, PA" },
  { name: "Heartland Heating", city: "Omaha, NE" },
  { name: "Coastal Climate", city: "Charleston, SC" }
];

const Marquee = () => {
  // Triple the items for a seamless loop
  const displayRow1 = [...row1Items, ...row1Items, ...row1Items];
  const displayRow2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">TRUSTED BY HOME SERVICE COMPANIES ACROSS THE US</p>
      </div>

      <div className="marquee-container">
        {/* Row 1 - Scrolls Left */}
        <div className="marquee-track scroll-left">
          <div className="marquee-content">
            {displayRow1.map((item, index) => (
              <div key={`row1-${index}`} className="marquee-badge">
                <span className="company-name">{item.name}</span>
                <span className="badge-separator">|</span>
                <span className="company-city">
                  <MapPin size={12} className="map-pin-icon" />
                  {item.city}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="marquee-track scroll-right">
          <div className="marquee-content">
            {displayRow2.map((item, index) => (
              <div key={`row2-${index}`} className="marquee-badge">
                <span className="company-name">{item.name}</span>
                <span className="badge-separator">|</span>
                <span className="company-city">
                  <MapPin size={12} className="map-pin-icon" />
                  {item.city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
