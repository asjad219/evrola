import { useEffect, useMemo, useRef, useState } from "react";

// Determine backend URL based on environment
const getBackendUrl = () => {
  if (import.meta.env.DEV) {
    // Local development
    return import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
  } else {
    // Production - use environment variable or default to production backend
    return import.meta.env.VITE_BACKEND_URL || 'https://your-backend-domain.com';
  }
};

const BACKEND_URL = getBackendUrl();

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#insights" },
];

const socialMarquee = [
  "Arctic Flow Mechanical • Phoenix, AZ",
  "BluePipe Pros • Dallas, TX",
  "Coastal Comfort Air • Tampa, FL",
  "TrueNorth Plumbing • Denver, CO",
  "Summit Duct & Drain • Boise, ID",
  "MetroHeat Experts • Columbus, OH",
  "Golden State Cooling • Fresno, CA",
  "Rapid Rooter Co. • Charlotte, NC",
];

const serviceCards = [
  {
    title: "Website + AI Receptionist Bundle",
    description:
      "Our flagship build pairs a premium sales website with 24/7 lead capture, smart routing, and booking automation.",
    kind: "featured",
    bullets: ["Conversion-first design", "AI chat + voice flows", "Launch in 21 days"],
  },
  {
    title: "2.3x More Calls in 60 Days",
    description:
      "Average early lift after redesigning weak mobile funnels, speeding up pages, and fixing CTA dead zones.",
    kind: "stat",
    value: 2.3,
  },
  {
    title: "SEO Optimization",
    description: "Service-area architecture, semantic headings, and local trust signals that help you rank faster.",
  },
  {
    title: "Mobile Speed",
    description: "Fast-loading layouts, click-to-call actions, and sticky mobile conversion paths that feel effortless.",
  },
  {
    title: "Google Reviews Integration",
    description: "Above-the-fold proof, rotating review highlights, and review badges placed where decisions happen.",
  },
  {
    title: "AI Booking System",
    description: "Website chat, SMS follow-up, calendar checks, and lead logging into your ops stack.",
  },
];

const caseStudies = [
  {
    company: "Polar Peak HVAC",
    city: "Salt Lake City, UT",
    metric: "+180% calls",
    metrics: ["PageSpeed 34 → 97", "Lead forms +64%", "Local rank #9 → #3"],
    beforePalette: "linear-gradient(135deg, #4b5563, #111827)",
    afterPalette: "linear-gradient(135deg, #0066ff, #38bdf8)",
  },
  {
    company: "Anchor Plumbing Co.",
    city: "Jacksonville, FL",
    metric: "+92% booked jobs",
    metrics: ["Bounce rate -41%", "Calls +118%", "Reviews CTR +29%"],
    beforePalette: "linear-gradient(135deg, #5b4a3f, #271b15)",
    afterPalette: "linear-gradient(135deg, #0ea5e9, #10b981)",
  },
  {
    company: "Elite Comfort Systems",
    city: "Nashville, TN",
    metric: "+2.4x service leads",
    metrics: ["Form fill +133%", "CPL down 31%", "Map pack growth +17%"],
    beforePalette: "linear-gradient(135deg, #374151, #0f172a)",
    afterPalette: "linear-gradient(135deg, #6366f1, #ff6b35)",
  },
];

const processSteps = [
  {
    day: "Day 1",
    title: "Free Website Audit",
    description: "We identify conversion leaks, weak mobile UX, and local SEO gaps with a no-fluff scorecard.",
  },
  {
    day: "Days 2-5",
    title: "Design Sprint",
    description: "You get a focused visual direction built around trust, speed, and booked-job intent.",
  },
  {
    day: "Days 6-14",
    title: "Build & Revise",
    description: "We turn approved screens into a production-ready site and refine the funnel with your feedback.",
  },
  {
    day: "Days 15-18",
    title: "Launch & Submit",
    description: "We go live, test mobile actions, and prep the site for Google indexing and review visibility.",
  },
  {
    day: "Days 18-21",
    title: "AI Receptionist Setup",
    description: "Chat flows, intake logic, calendar checks, and owner notifications are wired into one system.",
  },
];

const testimonials = [
  {
    quote:
      "Our old site looked fine, but the new one finally makes customers call. We felt the difference the first week.",
    name: "Mike Alvarez",
    company: "Rapid Rooter Co.",
    city: "Charlotte, NC",
  },
  {
    quote:
      "InfuSyn understood our industry fast. The site looks premium and the AI chat keeps leads from slipping overnight.",
    name: "Sarah Benton",
    company: "TrueNorth Plumbing",
    city: "Denver, CO",
  },
  {
    quote:
      "The mobile experience is night-and-day better. More people tap to call instead of bouncing.",
    name: "Chris Donnelly",
    company: "Arctic Flow Mechanical",
    city: "Phoenix, AZ",
  },
  {
    quote:
      "We stopped looking like every other contractor in town. That alone changed how prospects talked to us.",
    name: "Jason Reed",
    company: "Coastal Comfort Air",
    city: "Tampa, FL",
  },
  {
    quote:
      "The before-and-after proof helped us trust the process. The design hit fast and the launch felt organized.",
    name: "Elena Ortiz",
    company: "BluePipe Pros",
    city: "Dallas, TX",
  },
  {
    quote:
      "The audit was brutally useful. They showed exactly where our site was losing jobs and then fixed it.",
    name: "Nolan Bishop",
    company: "Summit Duct & Drain",
    city: "Boise, ID",
  },
];

const pricing = [
  {
    name: "Starter",
    monthly: 997,
    yearly: 957,
    audience: "Solo plumber or first-time site launch",
    features: [
      ["5 conversion-focused pages", true],
      ["Mobile optimized", true],
      ["Click-to-call CTA", true],
      ["Google Reviews widget", false],
      ["Scroll animations", false],
      ["Local SEO setup", false],
      ["AI chat booking", false],
    ],
  },
  {
    name: "Professional",
    monthly: 1997,
    yearly: 1598,
    audience: "Established company replacing a weak site",
    popular: true,
    features: [
      ["8 conversion-focused pages", true],
      ["Google Reviews widget", true],
      ["Scroll animations", true],
      ["Local SEO setup", true],
      ["Before/After slider", true],
      ["AI chat booking", false],
      ["Monthly SEO reporting", false],
    ],
  },
  {
    name: "Growth + AI",
    monthly: 3497,
    yearly: 2798,
    audience: "Growth-minded team that wants more booked jobs",
    features: [
      ["12 pages + service area scaling", true],
      ["Google Reviews widget", true],
      ["AI chat booking", true],
      ["CRM sync + intake logging", true],
      ["Monthly SEO reporting", true],
      ["Google Business support", true],
      ["AI voice receptionist", true],
    ],
  },
];

const faqs = [
  {
    q: "Will this work in my city?",
    a: "Yes. InfuSyn is built for local service businesses, so every page structure, CTA, and proof block is designed around city-level trust and service-area SEO.",
  },
  {
    q: "How many leads will I get?",
    a: "No honest agency can guarantee a fixed number, but we can improve the inputs that matter most: speed, mobile calls, trust, and after-hours capture.",
  },
  {
    q: "Can you keep my current domain?",
    a: "Absolutely. We can rebuild around your existing domain, preserve valuable URLs where needed, and handle launch coordination.",
  },
  {
    q: "Do you write the copy too?",
    a: "Yes. We write positioning and service copy in plain language that HVAC and plumbing buyers actually respond to.",
  },
  {
    q: "What if I already run Google Ads?",
    a: "That is a strong fit. A better website usually makes your ad budget go further because more visitors convert into calls or quote requests.",
  },
  {
    q: "How fast can we launch?",
    a: "Most projects launch in 14 to 21 days depending on package tier, content readiness, and whether AI automation is included.",
  },
  {
    q: "Do I need the AI receptionist?",
    a: "Not always, but if you miss leads after hours, during emergencies, or on weekends, it quickly becomes one of the highest-leverage upgrades.",
  },
  {
    q: "What happens after launch?",
    a: "We can continue with hosting, maintenance, reporting, local SEO refinement, and AI system support depending on the package you choose.",
  },
];

const insightCards = [
  {
    title: "Why Most HVAC Sites Still Look the Same",
    detail: "A quick breakdown of the template trap and how premium positioning changes perception in seconds.",
  },
  {
    title: "3 Mobile CTA Fixes That Lift Call Volume",
    detail: "Small interface choices make a huge difference when someone needs emergency service now.",
  },
  {
    title: "What an AI Receptionist Should Actually Do",
    detail: "Qualify, route, book, and notify. Anything less is just a chatbot wearing a new label.",
  },
];

const chatScript = [
  {
    role: "assistant",
    text: "Hi, this is the InfuSyn AI receptionist. What do you need help with today?",
  },
  {
    role: "user",
    text: "My AC stopped working and I need someone tomorrow.",
  },
  {
    role: "assistant",
    text: "Got it. What city are you in, and is this an emergency with no cooling right now?",
  },
  {
    role: "assistant",
    text: "After qualification, the workflow checks your calendar, offers two slots, then texts a confirmation to the customer and business owner.",
  },
];

function App() {
  const [ribbonDismissed, setRibbonDismissed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [annualPricing, setAnnualPricing] = useState(false);
  const [faqQuery, setFaqQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [sliderValue, setSliderValue] = useState(56);
  const [heroVisible, setHeroVisible] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [animatedStat, setAnimatedStat] = useState(0);
  const statRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.18 },
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!heroVisible) {
      return undefined;
    }

    const target = 2.3;
    const startedAt = performance.now();
    let frameId = 0;

    const tick = (time) => {
      const progress = Math.min((time - startedAt) / 1200, 1);
      setAnimatedStat(Number((target * progress).toFixed(1)));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [heroVisible]);

  useEffect(() => {
    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !seen.has(entry.target)) {
            entry.target.classList.add("is-visible");
            seen.add(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const filteredFaqs = useMemo(() => {
    const query = faqQuery.trim().toLowerCase();
    if (!query) {
      return faqs;
    }
    return faqs.filter(
      (item) =>
        item.q.toLowerCase().includes(query) ||
        item.a.toLowerCase().includes(query),
    );
  }, [faqQuery]);

  useEffect(() => {
    if (openFaq >= filteredFaqs.length) {
      setOpenFaq(0);
    }
  }, [filteredFaqs, openFaq]);

  const onAuditSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }
    const payload = Object.fromEntries(new FormData(form).entries());
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/submit-audit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.localStorage.setItem("infusyn-audit-lead", JSON.stringify(payload));
        setAuditSubmitted(true);
        form.reset();
      } else {
        const error = await response.json();
        alert('Error submitting form: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      window.localStorage.setItem("infusyn-audit-lead", JSON.stringify(payload));
      setAuditSubmitted(true);
      form.reset();
    }
  };

  const onQuoteSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }
    const payload = Object.fromEntries(new FormData(form).entries());
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/submit-quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.localStorage.setItem("infusyn-quote-lead", JSON.stringify(payload));
        setQuoteSubmitted(true);
        form.reset();
      } else {
        const error = await response.json();
        alert('Error submitting form: ' + (error.error || 'Unknown error'));
      }
    } catch (error) {
      window.localStorage.setItem("infusyn-quote-lead", JSON.stringify(payload));
      setQuoteSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="app-shell">
      <EmergencyRibbon
        dismissed={ribbonDismissed}
        onDismiss={() => setRibbonDismissed(true)}
      />
      <header
        className={`site-header ${navSolid ? "solid" : ""}`}
        style={{ top: ribbonDismissed ? 0 : 44 }}
      >
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="InfuSyn home">
            <span className="brand-mark">
              <span className="brand-pipe" />
              <span className="brand-flame" />
            </span>
            <span>InfuSyn</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="button button-orange compact" href="#contact">
              Get Your Free Audit
            </a>
            <button
              className="menu-button"
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-panel">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="button button-orange"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Your Free Audit
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow-pill">HVAC & Plumbing Web Design Specialists</div>
              <h1>
                We Build Websites That Make Your Phone{" "}
                <span className="gradient-text">Ring</span>
              </h1>
              <p className="hero-lead">
                Conversion-first websites and AI booking systems for US HVAC and
                plumbing companies. No fluff. Real leads. Real trust. Real booked
                jobs.
              </p>
              <div className="hero-actions">
                <a className="button button-blue" href="#portfolio">
                  See Our Work
                </a>
                <a className="button button-outline" href="#contact">
                  Get Free Audit
                </a>
              </div>
              <div className="trust-row">
                <span>4.9/5 from 47 clients</span>
                <span>Avg. 2.3x more calls in 60 days</span>
                <span>HVAC niche only</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="device-card desktop-device">
                <div className="device-screen">
                  <div className="mockup-topbar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-site">
                    <div className="mockup-hero">
                      <div className="mockup-kicker" />
                      <div className="mockup-title" />
                      <div className="mockup-title short" />
                      <div className="mockup-metrics">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className="mockup-columns">
                      <div className="mockup-card large" />
                      <div className="mockup-card" />
                      <div className="mockup-card accent" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="device-card mobile-device">
                <div className="device-screen mobile">
                  <div className="mockup-title tiny" />
                  <div className="mockup-card accent tall" />
                  <div className="mockup-card" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-section">
          <div className="container">
            <div className="section-label centered">
              Trusted by home service companies across the US
            </div>
          </div>
          <Marquee rows={[socialMarquee, [...socialMarquee].reverse()]} type="brands" />
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">What we build for you</div>
              <h2>Every tool your business needs to dominate local search.</h2>
              <p>
                We combine premium design, practical UX, local SEO architecture,
                and automation that keeps leads from dying after hours.
              </p>
            </div>

            <div className="bento-grid">
              {serviceCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`bento-card ${card.kind ?? ""}`}
                  data-reveal
                  style={{ transitionDelay: `${index * 70}ms` }}
                  ref={card.kind === "stat" ? statRef : undefined}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  {card.kind === "featured" && (
                    <>
                      <ul className="feature-list">
                        {card.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <a className="text-link" href="#ai-demo">
                        Watch the AI demo
                      </a>
                    </>
                  )}
                  {card.kind === "stat" && (
                    <div className="stat-value">
                      <strong>{animatedStat.toFixed(1)}x</strong>
                      <span>Average call growth</span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">Proof it works</div>
              <h2>Real websites. Real results. Real HVAC and plumbing companies.</h2>
              <p>
                Every case study is designed to show transformation, not just pretty
                screens. Better speed, better trust, better conversion flow.
              </p>
            </div>

            <div className="slider-card" data-reveal>
              <div className="slider-top">
                <div>
                  <div className="section-label">Before / After proof</div>
                  <h3>See how InfuSyn turns dead pages into booked-job funnels.</h3>
                </div>
                <div className="score-chips">
                  <span className="chip chip-bad">Before 32</span>
                  <span className="chip chip-good">After 98</span>
                </div>
              </div>
              <div className="before-after">
                <div className="screen before">
                  <span className="screen-label">Old Site - Losing Leads</span>
                  <div className="screen-content old" />
                </div>
                <div
                  className="screen after overlay"
                  style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                >
                  <span className="screen-label">New Site - More Calls</span>
                  <div className="screen-content new" />
                </div>
                <div
                  className="slider-handle"
                  style={{ left: `${sliderValue}%` }}
                  aria-hidden="true"
                />
                <input
                  aria-label="Before and after comparison"
                  className="slider-range"
                  max="100"
                  min="0"
                  type="range"
                  value={sliderValue}
                  onChange={(event) => setSliderValue(Number(event.target.value))}
                />
              </div>
            </div>

            <div className="portfolio-grid">
              {caseStudies.map((study, index) => (
                <article
                  key={study.company}
                  className="case-study-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="case-study-blob" />
                  <div className="case-study-panel">
                    <div className="mini-comparison">
                      <div className="mini-shot" style={{ background: study.beforePalette }}>
                        <span>Before</span>
                      </div>
                      <div className="mini-shot" style={{ background: study.afterPalette }}>
                        <span>After</span>
                      </div>
                    </div>
                    <div className="case-study-copy">
                      <div className="metric-pill">{study.metric}</div>
                      <h3>{study.company}</h3>
                      <p>{study.city}</p>
                      <div className="metric-stack">
                        {study.metrics.map((metric) => (
                          <span key={metric}>{metric}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="section-cta">
              <a className="text-link large" href="#contact">
                See all 12 case studies
              </a>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">How it works</div>
              <h2>From first call to more bookings in 21 days.</h2>
            </div>
            <div className="timeline" data-reveal>
              {processSteps.map((step, index) => (
                <article key={step.title} className="timeline-step">
                  <div className="timeline-badge">{index + 1}</div>
                  <span className="timeline-day">{step.day}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ai-section" id="ai-demo">
          <div className="container ai-grid">
            <div className="section-header narrow" data-reveal>
              <div className="section-label">AI receptionist demo</div>
              <h2>The upsell your competitors still do not offer.</h2>
              <p>
                InfuSyn turns missed calls into booked appointments with a workflow
                that qualifies leads, checks availability, sends confirmations, and
                logs every interaction.
              </p>
              <div className="tech-stack">
                <span>n8n</span>
                <span>OpenAI</span>
                <span>Twilio</span>
                <span>Google Calendar</span>
                <span>Supabase</span>
              </div>
            </div>

            <div className="chat-demo" data-reveal>
              <div className="chat-header">
                <div>
                  <strong>InfuSyn Reception Desk</strong>
                  <span>Live workflow preview</span>
                </div>
                <span className="status-dot">Online 24/7</span>
              </div>
              <div className="chat-body">
                {chatScript.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`chat-bubble ${message.role}`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="workflow-strip">
                <span>Capture</span>
                <span>Qualify</span>
                <span>Check calendar</span>
                <span>Book</span>
                <span>Notify owner</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">Voice of clients</div>
              <h2>What HVAC and plumbing owners are saying.</h2>
            </div>
          </div>
          <Marquee
            rows={[testimonials.slice(0, 3), testimonials.slice(3)]}
            type="testimonials"
          />
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">The offer</div>
              <h2>Transparent pricing. No surprises. Just results.</h2>
              <p>
                Clear tiers help pre-qualify serious leads and make your process feel
                more trustworthy before the first call.
              </p>
            </div>

            <div className="pricing-toggle" data-reveal>
              <button
                className={!annualPricing ? "active" : ""}
                type="button"
                onClick={() => setAnnualPricing(false)}
              >
                Monthly
              </button>
              <button
                className={annualPricing ? "active" : ""}
                type="button"
                onClick={() => setAnnualPricing(true)}
              >
                Annual
              </button>
              <span className="save-badge">Save 20%</span>
            </div>

            <div className="pricing-grid">
              {pricing.map((tier, index) => (
                <article
                  key={tier.name}
                  className={`pricing-card ${tier.popular ? "popular" : ""}`}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  {tier.popular && <div className="popular-badge">Most Popular</div>}
                  <h3>{tier.name}</h3>
                  <p>{tier.audience}</p>
                  <div className="price-row">
                    <strong>${annualPricing ? tier.yearly : tier.monthly}</strong>
                    <span>{annualPricing ? "/mo billed yearly" : "/project"}</span>
                  </div>
                  <ul className="pricing-features">
                    {tier.features.map(([feature, enabled]) => (
                      <li key={feature} className={enabled ? "enabled" : "disabled"}>
                        <span aria-hidden="true">{enabled ? "✓" : "×"}</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a className="button button-blue full" href="#contact">
                    Book a strategy call
                  </a>
                </article>
              ))}
            </div>
            <p className="pricing-footnote">
              50% upfront. 50% on launch. Money-back design guarantee if we miss the
              approved direction.
            </p>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">FAQ</div>
              <h2>Everything HVAC and plumbing owners ask before hiring us.</h2>
            </div>
            <div className="faq-search-wrap" data-reveal>
              <input
                className="faq-search"
                placeholder="Search questions..."
                type="search"
                value={faqQuery}
                onChange={(event) => setFaqQuery(event.target.value)}
              />
            </div>
            <div className="faq-list">
              {filteredFaqs.map((item, index) => {
                const isOpen = index === openFaq;
                return (
                  <article
                    key={item.q}
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    data-reveal
                  >
                    <button
                      className="faq-question"
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon">{isOpen ? "×" : "+"}</span>
                    </button>
                    <div className="faq-answer" style={{ maxHeight: isOpen ? "180px" : "0px" }}>
                      <p>{item.a}</p>
                    </div>
                  </article>
                );
              })}
              {!filteredFaqs.length && (
                <div className="empty-state">No FAQ matches that search yet.</div>
              )}
            </div>
          </div>
        </section>

        <section className="section insights-section" id="insights">
          <div className="container">
            <div className="section-header" data-reveal>
              <div className="section-label">Blog / insights</div>
              <h2>Short-form authority content built for skeptical buyers.</h2>
            </div>
            <div className="insight-grid">
              {insightCards.map((card, index) => (
                <article
                  key={card.title}
                  className="insight-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="insight-badge">Playbook</div>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                  <a className="text-link" href="#contact">
                    Turn this into a free audit
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container cta-banner-inner">
            <div>
              <div className="section-label inverse">Ready to get more booked jobs?</div>
              <h2>Build a site that works after business hours too.</h2>
            </div>
            <a className="button button-inverse" href="#contact">
              Get Your Free Audit
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="section-header narrow" data-reveal>
              <div className="section-label">Free audit</div>
              <h2>Tell us where your current website is letting leads slip.</h2>
              <p>
                Send your site and service area. We will respond with the three
                biggest conversion and trust issues holding it back.
              </p>
              <div className="contact-points">
                <span>hello@infusyn.co</span>
                <span>(555) 014-8821</span>
                <span>Built for US home service companies</span>
              </div>
            </div>
            <form className="audit-form" data-reveal onSubmit={onAuditSubmit}>
              <label>
                Your name
                <input name="name" placeholder="Alex Carter" required type="text" />
              </label>
              <label>
                Business email
                <input
                  name="email"
                  placeholder="owner@yourcompany.com"
                  required
                  type="email"
                />
              </label>
              <label>
                Current website
                <input
                  name="website"
                  placeholder="https://yourcompany.com"
                  required
                  type="url"
                />
              </label>
              <label>
                Service area
                <input
                  name="location"
                  placeholder="Phoenix metro, AZ"
                  required
                  type="text"
                />
              </label>
              <label>
                What do you want more of?
                <textarea
                  name="goal"
                  placeholder="More calls, better mobile speed, help with missed after-hours leads..."
                  rows="4"
                />
              </label>
              <button className="button button-blue full" type="submit">
                Request My Free Audit
              </button>
              <p className={`form-message ${auditSubmitted ? "visible" : ""}`}>
                Audit request saved locally. Your form flow is ready to connect to email,
                Supabase, or an n8n webhook.
              </p>
            </form>
          </div>
        </section>
      </main>

      <aside className="floating-quote">
        <div className="quote-header">
          <strong>Quick Quote Request</strong>
          <span>Highest-converting side form</span>
        </div>
        <form onSubmit={onQuoteSubmit}>
          <input name="name" placeholder="Name" required type="text" />
          <input name="phone" placeholder="Phone" required type="tel" />
          <select defaultValue="" name="service" required>
            <option disabled value="">
              Service type
            </option>
            <option>HVAC redesign</option>
            <option>Plumbing redesign</option>
            <option>Website + AI receptionist</option>
          </select>
          <input name="time" placeholder="Best time to call" required type="text" />
          <button className="button button-blue full" type="submit">
            Get My Free Quote
          </button>
          <p className={`form-message ${quoteSubmitted ? "visible" : ""}`}>
            Quote request saved locally and ready for webhook wiring.
          </p>
        </form>
      </aside>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">
                <span className="brand-pipe" />
                <span className="brand-flame" />
              </span>
              <span>InfuSyn</span>
            </a>
            <p>
              We build 24/7 lead-generation websites for HVAC and plumbing
              businesses that want more booked jobs, not just prettier pages.
            </p>
          </div>
          <div>
            <h3>Navigation</h3>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <div className="footer-links">
              <a href="mailto:hello@infusyn.co">hello@infusyn.co</a>
              <a href="tel:+15550148821">(555) 014-8821</a>
              <a href="#ai-demo">See AI Receptionist Demo</a>
              <a href="#pricing">Explore Pricing</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 InfuSyn. All rights reserved.</span>
          <div>
            <a href="#top">Privacy Policy</a>
            <span>Built with care for US home service companies.</span>
          </div>
        </div>
      </footer>

      <div className="mobile-cta-bar">
        <a href="tel:+15550148821">Call Now</a>
        <a href="#ai-demo">Chat Now</a>
      </div>
    </div>
  );
}

function EmergencyRibbon({ dismissed, onDismiss }) {
  if (dismissed) {
    return null;
  }

  return (
    <div className="emergency-ribbon">
      <div className="container emergency-inner">
        <a href="#ai-demo">
          <span className="pulse-dot" />
          Missing after-hours leads? See the 24/7 AI receptionist demo.
        </a>
        <button type="button" className="ribbon-dismiss" onClick={onDismiss} aria-label="Dismiss ribbon">
          ×
        </button>
      </div>
    </div>
  );
}

function Marquee({ rows, type }) {
  return (
    <div className={`marquee-wrap ${type}`}>
      {rows.map((items, rowIndex) => (
        <div
          key={`${type}-${rowIndex}`}
          className={`marquee-row ${rowIndex % 2 === 1 ? "reverse" : ""}`}
        >
          <div className="marquee-track">
            {[...items, ...items].map((item, index) =>
              type === "testimonials" ? (
                <article key={`${index}-${item.name}`} className="testimonial-card">
                  <div className="stars">★★★★★</div>
                  <p>{item.quote}</p>
                  <div className="testimonial-meta">
                    <div className="avatar">{item.name.charAt(0)}</div>
                    <div>
                      <strong>{item.name}</strong>
                      <span>
                        {item.company} • {item.city}
                      </span>
                    </div>
                  </div>
                </article>
              ) : (
                <div key={`${index}-${item}`} className="brand-pill">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
