(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const m=[{label:"Portfolio",href:"#portfolio"},{label:"Services",href:"#services"},{label:"Process",href:"#process"},{label:"Pricing",href:"#pricing"},{label:"Blog",href:"#insights"}],p=["Arctic Flow Mechanical &bull; Phoenix, AZ","BluePipe Pros &bull; Dallas, TX","Coastal Comfort Air &bull; Tampa, FL","TrueNorth Plumbing &bull; Denver, CO","Summit Duct & Drain &bull; Boise, ID","MetroHeat Experts &bull; Columbus, OH","Golden State Cooling &bull; Fresno, CA","Rapid Rooter Co. &bull; Charlotte, NC"],b=[{title:"Website + AI Receptionist Bundle",description:"Our flagship build pairs a premium sales website with 24/7 lead capture, smart routing, and booking automation.",kind:"featured",bullets:["Conversion-first design","AI chat + voice flows","Launch in 21 days"]},{title:"2.3x More Calls in 60 Days",description:"Average early lift after redesigning weak mobile funnels, speeding up pages, and fixing CTA dead zones.",kind:"stat"},{title:"SEO Optimization",description:"Service-area architecture, semantic headings, and local trust signals that help you rank faster."},{title:"Mobile Speed",description:"Fast-loading layouts, click-to-call actions, and sticky mobile conversion paths that feel effortless."},{title:"Google Reviews Integration",description:"Above-the-fold proof, rotating review highlights, and review badges placed where decisions happen."},{title:"AI Booking System",description:"Website chat, SMS follow-up, calendar checks, and lead logging into your ops stack."}],w=[{company:"Polar Peak HVAC",city:"Salt Lake City, UT",metric:"+180% calls",metrics:["PageSpeed 34 &rarr; 97","Lead forms +64%","Local rank #9 &rarr; #3"],beforePalette:"linear-gradient(135deg, #4b5563, #111827)",afterPalette:"linear-gradient(135deg, #0066ff, #38bdf8)"},{company:"Anchor Plumbing Co.",city:"Jacksonville, FL",metric:"+92% booked jobs",metrics:["Bounce rate -41%","Calls +118%","Reviews CTR +29%"],beforePalette:"linear-gradient(135deg, #5b4a3f, #271b15)",afterPalette:"linear-gradient(135deg, #0ea5e9, #10b981)"},{company:"Elite Comfort Systems",city:"Nashville, TN",metric:"+2.4x service leads",metrics:["Form fill +133%","CPL down 31%","Map pack growth +17%"],beforePalette:"linear-gradient(135deg, #374151, #0f172a)",afterPalette:"linear-gradient(135deg, #6366f1, #ff6b35)"}],k=[{day:"Day 1",title:"Free Website Audit",description:"We identify conversion leaks, weak mobile UX, and local SEO gaps with a no-fluff scorecard."},{day:"Days 2-5",title:"Design Sprint",description:"You get a focused visual direction built around trust, speed, and booked-job intent."},{day:"Days 6-14",title:"Build & Revise",description:"We turn approved screens into a production-ready site and refine the funnel with your feedback."},{day:"Days 15-18",title:"Launch & Submit",description:"We go live, test mobile actions, and prep the site for Google indexing and review visibility."},{day:"Days 18-21",title:"AI Receptionist Setup",description:"Chat flows, intake logic, calendar checks, and owner notifications are wired into one system."}],f=[{quote:"Our old site looked fine, but the new one finally makes customers call. We felt the difference the first week.",name:"Mike Alvarez",company:"Rapid Rooter Co.",city:"Charlotte, NC"},{quote:"Evrola understood our industry fast. The site looks premium and the AI chat keeps leads from slipping overnight.",name:"Sarah Benton",company:"TrueNorth Plumbing",city:"Denver, CO"},{quote:"The mobile experience is night-and-day better. More people tap to call instead of bouncing.",name:"Chris Donnelly",company:"Arctic Flow Mechanical",city:"Phoenix, AZ"},{quote:"We stopped looking like every other contractor in town. That alone changed how prospects talked to us.",name:"Jason Reed",company:"Coastal Comfort Air",city:"Tampa, FL"},{quote:"The before-and-after proof helped us trust the process. The design hit fast and the launch felt organized.",name:"Elena Ortiz",company:"BluePipe Pros",city:"Dallas, TX"},{quote:"The audit was brutally useful. They showed exactly where our site was losing jobs and then fixed it.",name:"Nolan Bishop",company:"Summit Duct & Drain",city:"Boise, ID"}],E=[{name:"Starter",monthly:997,yearly:957,audience:"Solo plumber or first-time site launch",features:[["5 conversion-focused pages",!0],["Mobile optimized",!0],["Click-to-call CTA",!0],["Google Reviews widget",!1],["Scroll animations",!1],["Local SEO setup",!1],["AI chat booking",!1]]},{name:"Professional",monthly:1997,yearly:1598,audience:"Established company replacing a weak site",popular:!0,features:[["8 conversion-focused pages",!0],["Google Reviews widget",!0],["Scroll animations",!0],["Local SEO setup",!0],["Before/After slider",!0],["AI chat booking",!1],["Monthly SEO reporting",!1]]},{name:"Growth + AI",monthly:3497,yearly:2798,audience:"Growth-minded team that wants more booked jobs",features:[["12 pages + service area scaling",!0],["Google Reviews widget",!0],["AI chat booking",!0],["CRM sync + intake logging",!0],["Monthly SEO reporting",!0],["Google Business support",!0],["AI voice receptionist",!0]]}],L=[{q:"Will this work in my city?",a:"Yes. Evrola is built for local service businesses, so every page structure, CTA, and proof block is designed around city-level trust and service-area SEO."},{q:"How many leads will I get?",a:"No honest agency can guarantee a fixed number, but we can improve the inputs that matter most: speed, mobile calls, trust, and after-hours capture."},{q:"Can you keep my current domain?",a:"Absolutely. We can rebuild around your existing domain, preserve valuable URLs where needed, and handle launch coordination."},{q:"Do you write the copy too?",a:"Yes. We write positioning and service copy in plain language that HVAC and plumbing buyers actually respond to."},{q:"What if I already run Google Ads?",a:"That is a strong fit. A better website usually makes your ad budget go further because more visitors convert into calls or quote requests."},{q:"How fast can we launch?",a:"Most projects launch in 14 to 21 days depending on package tier, content readiness, and whether AI automation is included."},{q:"Do I need the AI receptionist?",a:"Not always, but if you miss leads after hours, during emergencies, or on weekends, it quickly becomes one of the highest-leverage upgrades."},{q:"What happens after launch?",a:"We can continue with hosting, maintenance, reporting, local SEO refinement, and AI system support depending on the package you choose."}],A=[{title:"Why Most HVAC Sites Still Look the Same",detail:"A quick breakdown of the template trap and how premium positioning changes perception in seconds."},{title:"3 Mobile CTA Fixes That Lift Call Volume",detail:"Small interface choices make a huge difference when someone needs emergency service now."},{title:"What an AI Receptionist Should Actually Do",detail:"Qualify, route, book, and notify. Anything less is just a chatbot wearing a new label."}];let r=0,c;const l={get(e){try{return window.localStorage.getItem(e)}catch{return null}},set(e,t){try{window.localStorage.setItem(e,t)}catch{}}};function I(){const e=m.map(t=>`<a href="${t.href}">${t.label}</a>`).join("");document.getElementById("desktop-nav").innerHTML=e,document.getElementById("footer-links").innerHTML=e,document.getElementById("mobile-menu-panel").innerHTML=`
    ${m.map(t=>`<a href="${t.href}" class="mobile-link">${t.label}</a>`).join("")}
    <a class="button button-orange" href="#contact">Get Your Free Audit</a>
  `}function g(e,t){const a=document.getElementById(e);a&&(a.innerHTML=[...t,...t].map(n=>`<div class="brand-pill">${n}</div>`).join(""))}function q(){document.getElementById("services-grid").innerHTML=b.map(e=>{const t=e.kind==="featured"?`
              <ul class="feature-list">
                ${e.bullets.map(a=>`<li>${a}</li>`).join("")}
              </ul>
              <a class="text-link" href="#ai-demo">Watch the AI demo</a>
            `:e.kind==="stat"?`
                <div class="stat-value">
                  <strong id="stat-counter">0.0x</strong>
                  <span>Average call growth</span>
                </div>
              `:"";return`
        <article class="bento-card ${e.kind||""}" data-reveal>
          <h3>${e.title}</h3>
          <p>${e.description}</p>
          ${t}
        </article>
      `}).join("")}function S(){document.getElementById("portfolio-grid").innerHTML=w.map(e=>`
        <article class="case-study-card" data-reveal>
          <div class="case-study-panel">
            <div class="mini-comparison">
              <div class="mini-shot before-shot">
                <div class="mini-shot-surface" style="background:${e.beforePalette}">
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
                <div class="mini-shot-surface" style="background:${e.afterPalette}">
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
              <div class="metric-pill">${e.metric}</div>
              <h3>${e.company}</h3>
              <p>${e.city}</p>
              <div class="metric-stack">
                ${e.metrics.map(t=>`<span>${t}</span>`).join("")}
              </div>
            </div>
          </div>
        </article>
      `).join("")}function $(){document.getElementById("timeline").innerHTML=k.map((e,t)=>`
        <article class="timeline-step">
          <div class="timeline-badge">${t+1}</div>
          <span class="timeline-day">${e.day}</span>
          <h3>${e.title}</h3>
          <p>${e.description}</p>
        </article>
      `).join("")}function h(e){return`
    <article class="testimonial-card">
      <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p>${e.quote}</p>
      <div class="testimonial-meta">
        <div class="avatar">${e.name.charAt(0)}</div>
        <div>
          <strong>${e.name}</strong>
          <span>${e.company} &bull; ${e.city}</span>
        </div>
      </div>
    </article>
  `}function C(){const e=f.slice(0,3),t=f.slice(3);document.getElementById("testimonials-row-1").innerHTML=[...e,...e].map(h).join(""),document.getElementById("testimonials-row-2").innerHTML=[...t,...t].map(h).join("")}function B(){document.getElementById("pricing-grid").innerHTML=E.map(e=>`
        <article class="pricing-card ${e.popular?"popular":""}" data-reveal>
          ${e.popular?'<div class="popular-badge">Most Popular</div>':""}
          <h3>${e.name}</h3>
          <p>${e.audience}</p>
          <div class="price-row">
            <strong>$${e.monthly}</strong>
            <span>/project</span>
          </div>
          <ul class="pricing-features">
            ${e.features.map(([t,a])=>`
                  <li class="${a?"enabled":"disabled"}">
                    <span>${a?"&#10003;":"&times;"}</span>
                    ${t}
                  </li>
                `).join("")}
          </ul>
          <a class="button button-blue full" href="#contact">Book a strategy call</a>
        </article>
      `).join(""),y()}function d(e=""){const t=e.trim().toLowerCase(),a=L.filter(n=>!t||n.q.toLowerCase().includes(t)||n.a.toLowerCase().includes(t));a.length===0?r=-1:(r<0&&!t||r>=a.length)&&(r=0),document.getElementById("faq-list").innerHTML=a.length>0?a.map((n,i)=>`
              <article class="faq-item ${i===r?"open":""}" data-index="${i}">
                <button class="faq-question" type="button">
                  <span>${n.q}</span>
                  <span class="faq-icon">${i===r?"&times;":"+"}</span>
                </button>
                <div class="faq-answer">
                  <p>${n.a}</p>
                </div>
              </article>
            `).join(""):'<div class="empty-state">No FAQ matches that search yet.</div>',document.querySelectorAll(".faq-item").forEach(n=>{const i=n.querySelector(".faq-answer"),s=Number(n.dataset.index);i&&(i.style.maxHeight=n.classList.contains("open")?`${i.scrollHeight}px`:"0px"),n.querySelector(".faq-question")?.addEventListener("click",()=>{r=r===s?-1:s,d(document.getElementById("faq-search").value)})})}function T(){document.getElementById("insights-grid").innerHTML=A.map(e=>`
        <article class="insight-card" data-reveal>
          <div class="insight-badge">Playbook</div>
          <h3>${e.title}</h3>
          <p>${e.detail}</p>
          <a class="text-link" href="#contact">Turn this into a free audit</a>
        </article>
      `).join("")}function M(){const e=document.getElementById("comparison-slider"),t=document.getElementById("slider-handle"),a=document.getElementById("after-screen");if(!e||!t||!a)return;const n=()=>{const i=Number(e.value);t.style.left=`${i}%`,a.style.clipPath=`inset(0 ${100-i}% 0 0)`};e.addEventListener("input",n),n()}function P(){const e=document.getElementById("audit-form"),t=document.getElementById("quote-form");e?.addEventListener("submit",a=>{if(a.preventDefault(),!e.reportValidity())return;const n=Object.fromEntries(new FormData(e).entries());l.set("evrola-audit-lead",JSON.stringify(n)),document.getElementById("audit-message")?.classList.add("visible"),e.reset()}),t?.addEventListener("submit",a=>{if(a.preventDefault(),!t.reportValidity())return;const n=Object.fromEntries(new FormData(t).entries());l.set("evrola-quote-lead",JSON.stringify(n)),document.getElementById("quote-message")?.classList.add("visible"),t.reset()})}function x(){const e=document.getElementById("floating-quote"),t=document.getElementById("quote-toggle");if(!e||!t)return;const a=i=>{e.classList.toggle("minimized",i),t.setAttribute("aria-expanded",String(!i)),t.setAttribute("aria-label",i?"Expand quote form":"Minimize quote form"),t.setAttribute("title",i?"Expand":"Minimize"),t.innerHTML=i?"+":"&minus;"},n=l.get("evrola-quote-minimized")==="true";a(n),t.addEventListener("click",()=>{const i=!e.classList.contains("minimized");a(i),l.set("evrola-quote-minimized",String(i))})}function O(){const e=document.getElementById("faq-search");e&&e.addEventListener("input",t=>d(t.target.value))}function D(){const e=document.getElementById("site-header"),t=document.getElementById("emergency-ribbon"),a=document.getElementById("dismiss-ribbon"),n=document.getElementById("menu-button"),i=document.getElementById("mobile-menu");if(!e||!a||!n||!i)return;a.innerHTML="&times;";const s=()=>{window.scrollY>60?e.classList.add("solid"):e.classList.remove("solid")};a.addEventListener("click",()=>{t?.remove(),e.style.top="0px"}),n.addEventListener("click",()=>{const o=i.classList.toggle("open");n.setAttribute("aria-expanded",String(o))}),i.querySelectorAll("a").forEach(o=>{o.addEventListener("click",()=>{i.classList.remove("open"),n.setAttribute("aria-expanded","false")})}),document.addEventListener("keydown",o=>{o.key==="Escape"&&(i.classList.remove("open"),n.setAttribute("aria-expanded","false"))}),window.addEventListener("scroll",s,{passive:!0}),s()}function y(){c||(c=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.14})),document.querySelectorAll("[data-reveal]").forEach(e=>{c.observe(e)})}function H(){const e=document.getElementById("stat-counter");if(!e)return;const t=new IntersectionObserver(([a])=>{if(!a.isIntersecting)return;const n=performance.now(),i=1200,s=2.3,o=v=>{const u=Math.min((v-n)/i,1);e.textContent=`${(s*u).toFixed(1)}x`,u<1&&window.requestAnimationFrame(o)};window.requestAnimationFrame(o),t.disconnect()},{threshold:.25});t.observe(e)}function F(){I(),g("brands-row-1",p),g("brands-row-2",[...p].reverse()),q(),S(),$(),C(),B(),d(),T(),D(),M(),P(),x(),O(),y(),H()}document.addEventListener("DOMContentLoaded",F);
