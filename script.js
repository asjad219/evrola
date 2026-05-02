const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#insights" },
];

const socialMarquee = [
  "Arctic Flow Mechanical &bull; Phoenix, AZ",
  "BluePipe Pros &bull; Dallas, TX",
  "Coastal Comfort Air &bull; Tampa, FL",
  "TrueNorth Plumbing &bull; Denver, CO",
  "Summit Duct & Drain &bull; Boise, ID",
  "MetroHeat Experts &bull; Columbus, OH",
  "Golden State Cooling &bull; Fresno, CA",
  "Rapid Rooter Co. &bull; Charlotte, NC",
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
  },
  {
    title: "SEO Optimization",
    description:
      "Service-area architecture, semantic headings, and local trust signals that help you rank faster.",
  },
  {
    title: "Mobile Speed",
    description:
      "Fast-loading layouts, click-to-call actions, and sticky mobile conversion paths that feel effortless.",
  },
  {
    title: "Google Reviews Integration",
    description:
      "Above-the-fold proof, rotating review highlights, and review badges placed where decisions happen.",
  },
  {
    title: "AI Booking System",
    description:
      "Website chat, SMS follow-up, calendar checks, and lead logging into your ops stack.",
  },
];

const caseStudies = [
  {
    company: "Polar Peak HVAC",
    city: "Salt Lake City, UT",
    metric: "+180% calls",
    metrics: ["PageSpeed 34 &rarr; 97", "Lead forms +64%", "Local rank #9 &rarr; #3"],
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
    description:
      "We identify conversion leaks, weak mobile UX, and local SEO gaps with a no-fluff scorecard.",
  },
  {
    day: "Days 2-5",
    title: "Design Sprint",
    description:
      "You get a focused visual direction built around trust, speed, and booked-job intent.",
  },
  {
    day: "Days 6-14",
    title: "Build & Revise",
    description:
      "We turn approved screens into a production-ready site and refine the funnel with your feedback.",
  },
  {
    day: "Days 15-18",
    title: "Launch & Submit",
    description:
      "We go live, test mobile actions, and prep the site for Google indexing and review visibility.",
  },
  {
    day: "Days 18-21",
    title: "AI Receptionist Setup",
    description:
      "Chat flows, intake logic, calendar checks, and owner notifications are wired into one system.",
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
      "Evrola understood our industry fast. The site looks premium and the AI chat keeps leads from slipping overnight.",
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
    a: "Yes. Evrola is built for local service businesses, so every page structure, CTA, and proof block is designed around city-level trust and service-area SEO.",
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
    detail:
      "A quick breakdown of the template trap and how premium positioning changes perception in seconds.",
  },
  {
    title: "3 Mobile CTA Fixes That Lift Call Volume",
    detail:
      "Small interface choices make a huge difference when someone needs emergency service now.",
  },
  {
    title: "What an AI Receptionist Should Actually Do",
    detail:
      "Qualify, route, book, and notify. Anything less is just a chatbot wearing a new label.",
  },
];

let openFaq = 0;
let revealObserver;

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures when opened in restricted contexts.
    }
  },
};

function renderNav() {
  const navHtml = navLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("");
  const mobilePanel = document.getElementById("mobile-menu-panel");

  document.getElementById("desktop-nav").innerHTML = navHtml;
  document.getElementById("footer-links").innerHTML = navHtml;

  if (mobilePanel) {
    mobilePanel.insertAdjacentHTML(
      "beforeend",
      `
        ${navLinks.map((link) => `<a href="${link.href}" class="mobile-link">${link.label}</a>`).join("")}
        <a class="button button-orange" href="#contact">Get Your Free Audit</a>
      `,
    );
  }
}

function renderMarquee(targetId, items) {
  const track = document.getElementById(targetId);
  if (!track) {
    return;
  }

  track.innerHTML = [...items, ...items]
    .map((item) => `<div class="brand-pill">${item}</div>`)
    .join("");
}

function renderServices() {
  document.getElementById("services-grid").innerHTML = serviceCards
    .map((card) => {
      const extra =
        card.kind === "featured"
          ? `
              <ul class="feature-list">
                ${card.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
              <a class="text-link" href="#ai-demo">Watch the AI demo</a>
            `
          : card.kind === "stat"
            ? `
                <div class="stat-value">
                  <strong id="stat-counter">0.0x</strong>
                  <span>Average call growth</span>
                </div>
              `
            : "";

      return `
        <article class="bento-card ${card.kind || ""}" data-reveal>
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          ${extra}
        </article>
      `;
    })
    .join("");
}

function renderPortfolio() {
  document.getElementById("portfolio-grid").innerHTML = caseStudies
    .map(
      (study) => `
        <article class="case-study-card" data-reveal>
          <div class="case-study-panel">
            <div class="mini-comparison">
              <div class="mini-shot before-shot">
                <div class="mini-shot-surface" style="background:${study.beforePalette}">
                  <div class="mini-browser">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="mini-shot-lines">
                    <i class="wide"></i>
                    <i></i>
                    <i class="short"></i>
                  </div>
                  <div class="mini-shot-boxes">
                    <b></b>
                    <b></b>
                  </div>
                </div>
                <span>Before</span>
              </div>
              <div class="mini-shot after-shot">
                <div class="mini-shot-surface" style="background:${study.afterPalette}">
                  <div class="mini-browser">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="mini-shot-lines">
                    <i class="wide"></i>
                    <i></i>
                    <i class="short"></i>
                  </div>
                  <div class="mini-shot-boxes">
                    <b></b>
                    <b></b>
                  </div>
                </div>
                <span>After</span>
              </div>
            </div>
            <div class="case-study-copy">
              <div class="metric-pill">${study.metric}</div>
              <h3>${study.company}</h3>
              <p>${study.city}</p>
              <div class="metric-stack">
                ${study.metrics.map((metric) => `<span>${metric}</span>`).join("")}
              </div>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = processSteps
    .map(
      (step, index) => `
        <article class="timeline-step">
          <div class="timeline-badge">${index + 1}</div>
          <span class="timeline-day">${step.day}</span>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </article>
      `,
    )
    .join("");
}

function testimonialCard(item) {
  return `
    <article class="testimonial-card">
      <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p>${item.quote}</p>
      <div class="testimonial-meta">
        <div class="avatar">${item.name.charAt(0)}</div>
        <div>
          <strong>${item.name}</strong>
          <span>${item.company} &bull; ${item.city}</span>
        </div>
      </div>
    </article>
  `;
}

function renderTestimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  document.getElementById("testimonials-row-1").innerHTML = [...row1, ...row1]
    .map(testimonialCard)
    .join("");

  document.getElementById("testimonials-row-2").innerHTML = [...row2, ...row2]
    .map(testimonialCard)
    .join("");
}

function renderPricing() {
  document.getElementById("pricing-grid").innerHTML = pricing
    .map(
      (tier) => `
        <article class="pricing-card ${tier.popular ? "popular" : ""}" data-reveal>
          ${tier.popular ? '<div class="popular-badge">Most Popular</div>' : ""}
          <h3>${tier.name}</h3>
          <p>${tier.audience}</p>
          <div class="price-row">
            <strong>$${tier.monthly}</strong>
            <span>/project</span>
          </div>
          <ul class="pricing-features">
            ${tier.features
              .map(
                ([feature, enabled]) => `
                  <li class="${enabled ? "enabled" : "disabled"}">
                    <span>${enabled ? "&#10003;" : "&times;"}</span>
                    ${feature}
                  </li>
                `,
              )
              .join("")}
          </ul>
          <a class="button button-blue full" href="#contact">Book a strategy call</a>
        </article>
      `,
    )
    .join("");

  observeReveals();
}

function renderFaqs(query = "") {
  const lowered = query.trim().toLowerCase();
  const filtered = faqs.filter(
    (item) =>
      !lowered ||
      item.q.toLowerCase().includes(lowered) ||
      item.a.toLowerCase().includes(lowered),
  );

  if (filtered.length === 0) {
    openFaq = -1;
  } else if (openFaq < 0 && !lowered) {
    openFaq = 0;
  } else if (openFaq >= filtered.length) {
    openFaq = 0;
  }

  document.getElementById("faq-list").innerHTML =
    filtered.length > 0
      ? filtered
          .map(
            (item, index) => `
              <article class="faq-item ${index === openFaq ? "open" : ""}" data-index="${index}">
                <button class="faq-question" type="button">
                  <span>${item.q}</span>
                  <span class="faq-icon">${index === openFaq ? "&times;" : "+"}</span>
                </button>
                <div class="faq-answer">
                  <p>${item.a}</p>
                </div>
              </article>
            `,
          )
          .join("")
      : '<div class="empty-state">No FAQ matches that search yet.</div>';

  document.querySelectorAll(".faq-item").forEach((item) => {
    const answer = item.querySelector(".faq-answer");
    const index = Number(item.dataset.index);

    if (answer) {
      answer.style.maxHeight = item.classList.contains("open")
        ? `${answer.scrollHeight}px`
        : "0px";
    }

    item.querySelector(".faq-question")?.addEventListener("click", () => {
      openFaq = openFaq === index ? -1 : index;
      renderFaqs(document.getElementById("faq-search").value);
    });
  });
}

function renderInsights() {
  document.getElementById("insights-grid").innerHTML = insightCards
    .map(
      (card) => `
        <article class="insight-card" data-reveal>
          <div class="insight-badge">Playbook</div>
          <h3>${card.title}</h3>
          <p>${card.detail}</p>
          <a class="text-link" href="#contact">Turn this into a free audit</a>
        </article>
      `,
    )
    .join("");
}

function initComparisonSlider() {
  const slider = document.getElementById("comparison-slider");
  const handle = document.getElementById("slider-handle");
  const after = document.getElementById("after-screen");

  if (!slider || !handle || !after) {
    return;
  }

  const update = () => {
    const value = Number(slider.value);
    handle.style.left = `${value}%`;
    after.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  };

  slider.addEventListener("input", update);
  update();
}
function initForms() {
  const auditForm = document.getElementById("audit-form");
  const quoteForm = document.getElementById("quote-form");
  const BACKEND_URL = window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "";

  auditForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!auditForm.reportValidity()) {
      return;
    }

    const submitButton = auditForm.querySelector("button[type='submit']");
    const messageElement = document.getElementById("audit-message");
    const originalButtonText = submitButton.textContent;

    try {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";

      const payload = Object.fromEntries(new FormData(auditForm).entries());
      
      const response = await fetch(`${BACKEND_URL}/api/submit-audit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      messageElement.textContent = "✅ Audit request received! Check your email for confirmation.";
      messageElement.style.color = "#99f0c8";
      messageElement.classList.add("visible");
      auditForm.reset();
      submitButton.textContent = "Request My Free Audit";
      
      setTimeout(() => {
        messageElement.classList.remove("visible");
      }, 5000);
    } catch (error) {
      console.error("Audit form error:", error);
      messageElement.textContent = `❌ Error: ${error.message}. Please try again.`;
      messageElement.style.color = "#ff6b6b";
      messageElement.classList.add("visible");
      submitButton.textContent = originalButtonText;
    } finally {
      submitButton.disabled = false;
    }
  });

  quoteForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) {
      return;
    }

    const submitButton = quoteForm.querySelector("button[type='submit']");
    const messageElement = document.getElementById("quote-message");
    const originalButtonText = submitButton.textContent;

    try {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";

      const payload = Object.fromEntries(new FormData(quoteForm).entries());
      
      const response = await fetch(`${BACKEND_URL}/api/submit-quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      messageElement.textContent = "✅ Quote request received! We'll call you soon.";
      messageElement.style.color = "#99f0c8";
      messageElement.classList.add("visible");
      quoteForm.reset();
      submitButton.textContent = "Get My Free Quote";
      
      setTimeout(() => {
        messageElement.classList.remove("visible");
      }, 5000);
    } catch (error) {
      console.error("Quote form error:", error);
      messageElement.textContent = `❌ Error: ${error.message}. Please try again.`;
      messageElement.style.color = "#ff6b6b";
      messageElement.classList.add("visible");
      submitButton.textContent = originalButtonText;
    } finally {
      submitButton.disabled = false;
    }
  });
}

function initQuoteWidget() {
  const widget = document.getElementById("floating-quote");
  const toggle = document.getElementById("quote-toggle");

  if (!widget || !toggle) {
    return;
  }

  const applyState = (minimized) => {
    widget.classList.toggle("minimized", minimized);
    toggle.setAttribute("aria-expanded", String(!minimized));
    toggle.setAttribute("aria-label", minimized ? "Expand quote form" : "Minimize quote form");
    toggle.setAttribute("title", minimized ? "Expand" : "Minimize");
    toggle.innerHTML = minimized ? "+" : "&minus;";
  };

  const savedState = storage.get("evrola-quote-minimized") === "true";
  applyState(savedState);

  toggle.addEventListener("click", () => {
    const minimized = !widget.classList.contains("minimized");
    applyState(minimized);
    storage.set("evrola-quote-minimized", String(minimized));
  });
}

function initFaqSearch() {
  const search = document.getElementById("faq-search");
  if (!search) {
    return;
  }

  search.addEventListener("input", (event) => renderFaqs(event.target.value));
}

function initHeader() {
  const header = document.getElementById("site-header");
  const ribbon = document.getElementById("emergency-ribbon");
  const dismiss = document.getElementById("dismiss-ribbon");
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("mobile-menu");
  const menuPanel = document.getElementById("mobile-menu-panel");
  const menuClose = document.getElementById("mobile-menu-close");

  if (!header || !dismiss || !menuButton || !menu || !menuPanel || !menuClose) {
    return;
  }

  dismiss.innerHTML = "&times;";

  const closeMenu = () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const update = () => {
    if (window.scrollY > 60) {
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  };

  dismiss.addEventListener("click", () => {
    ribbon?.remove();
    header.style.top = "0px";
  });

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menuClose.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeMenu();
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  menuPanel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("pointerdown", (event) => {
    if (!menu.classList.contains("open")) {
      return;
    }

    const target = event.target;
    if (!menuPanel.contains(target) && !menuButton.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 },
    );
  }

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    revealObserver.observe(element);
  });
}

function initCounter() {
  const element = document.getElementById("stat-counter");
  if (!element) {
    return;
  }

  const counterObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }

      const startedAt = performance.now();
      const duration = 1200;
      const target = 2.3;

      const tick = (time) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        element.textContent = `${(target * progress).toFixed(1)}x`;
        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };

      window.requestAnimationFrame(tick);
      counterObserver.disconnect();
    },
    { threshold: 0.25 },
  );

  counterObserver.observe(element);
}

function init() {
  renderNav();
  renderMarquee("brands-row-1", socialMarquee);
  renderMarquee("brands-row-2", [...socialMarquee].reverse());
  renderServices();
  renderPortfolio();
  renderTimeline();
  renderTestimonials();
  renderPricing();
  renderFaqs();
  renderInsights();
  initHeader();
  initComparisonSlider();
  initForms();
  initQuoteWidget();
  initFaqSearch();
  observeReveals();
  initCounter();
}

document.addEventListener("DOMContentLoaded", init);
