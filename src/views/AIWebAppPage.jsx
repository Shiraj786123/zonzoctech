'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebAppPage.css";

const AIWebAppDev = () => {
  const stats =[
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const services = [
    { i: "🚀", t: "AI SaaS Platform Development", points:["Scalable multi-tenant builds.", "Subscription billing engines.", "Advanced user management.", "AI feature integration logic."] },
    { i: "🧠", t: "GPT & LLM Web Applications", points:["OpenAI & Claude integration.", "Context-aware smart search.", "Automated content generation.", "Intelligent business workflows."] },
    { i: "⚙️", t: "AI Business Automation Tools", points:["Automated data entry layers.", "Report generation systems.", "Lead qualification automation.", "Customer communication tools."] },
    { i: "📊", t: "AI Dashboards & Analytics", points:["Live data processing feeds.", "Predictive analysis models.", "Actionable business insights.", "Smart data visualizations."] },
    { i: "🤖", t: "AI Chatbots & Assistants", points:["24/7 customer query handling.", "Lead capture & qualification.", "Automated appointment booking.", "Seamless system escalation."] },
    { i: "🔌", t: "API & Third Party Integrations", points:["Integrating existing web apps.", "Custom AI API development.", "Third-party tool connection.", "Minimal rebuild requirements."] }
  ];

  const whyChoosePoints = [
    { i: "✅", t: "AI-First Approach", points:["Design with AI at the core.", "Optimal model selection data.", "Strategic integration points.", "Future-ready scalability."] },
    { i: "✅", t: "Full-Stack Expertise", points:["Frontend and Backend teams.", "Database architecture setup.", "Secure cloud deployment.", "End-to-end code ownership."] },
    { i: "✅", t: "Business-Focused Dev", points:["Real-world business outcomes.", "Measurable ROI features.", "Value-driven user experience.", "Competitive market advantage."] },
    { i: "✅", t: "Affordable UK Agency", points:["Competitive offshore rates.", "Local UK agency quality.", "Transparent cost models.", "Zero hidden fee billing."] },
    { i: "✅", t: "Long-Term Partnership", points:["Launch day optimization.", "Ongoing feature development.", "Continuous tech maintenance.", "Growth-aligned support model."] },
    { i: "✅", t: "Technical Excellence", points:["Clean maintainable code.", "Rigorous testing standards.", "Modern framework usage.", "Scalable system performance."] }
  ];

  const processSteps =[
    { n: "1", t: "Discovery & Strategy", i: "✨", d: <>Defining business goals,<br/>user workflows and<br/>identify the perfect AI<br/>use cases for growth.</> },
    { n: "2", t: "Architecture & Design", i: "📐", d: <>Designing data flows,<br/>AI models, and the UI/UX<br/>technical blueprint for a<br/>robust system build.</> },
    { n: "3", t: "Agile Development", i: "💻", d: <>Building in agile sprints<br/>with regular demos to<br/>ensure total transparency<br/>and iterative releases.</> },
    { n: "4", t: "Testing & Quality", i: "🚀", d: <>Thorough performance and<br/>security audits including<br/>AI accuracy and real<br/>edge case validation.</> },
    { n: "5", t: "Launch & Support", i: "⚙️", d: <>Full deployment followed<br/>by ongoing optimization<br/>and scaling to keep your<br/>system ahead of rivals.</> }
  ];

  const technologies =[
    { c: "Frontend", icon: "https://img.icons8.com/color/96/react-native.png", items:["React & Next.js", "TypeScript", "Tailwind CSS"] },
    { c: "Backend", icon: "https://img.icons8.com/color/96/nodejs.png", items:["Node.js", "Java & Spring Boot", "Python"] },
    { c: "AI & ML", icon: "https://img.icons8.com/color/96/artificial-intelligence.png", items:["OpenAI GPT & API", "LangChain", "TensorFlow"] },
    { c: "Infrastructure", icon: "https://img.icons8.com/color/96/amazon-web-services.png", items:["AWS & Google Cloud", "Docker", "CI/CD pipelines"] },
    { c: "Databases", icon: "https://img.icons8.com/color/96/database.png", items:["PostgreSQL & MongoDB", "Firebase", "Redis"] },
    { c: "Security & QA", icon: "https://img.icons8.com/color/96/security-shield.png", items:["OWASP Standards", "Jest & Cypress", "Performance Testing"] },
  ];

  return (
    <div className="aiwa__wrapper">
      <Navbar />

      {/* 1. HERO */}
      <section className="aiwa__hero_section">
        <div className="aiwa__container">
          {/* MOVED BREADCRUMB HERE: Renders inside the dark container above the title */}
          <Breadcrumb />

          {/* Top Label / Pill Badge with Safe inline-span wrapper */}
          <span className="aiwa__hero_badge_wrapper">
            <span className="aiwa__hero_badge_dot"></span>
            <span className="aiwa__hero_badge_text">
              AI Web Application Development Agency
            </span>
          </span>

          {/* Heading */}
          <h1 className="aiwa__heading">
            AI Web Application Development for{" "}
            <span className="text_light_blue">UK & USA Businesses</span>
          </h1>

          <p className="aiwa__hero_text_white">
            ZonzocTech builds custom AI-powered web applications. From intelligent
            dashboards to GPT-powered tools — we scale your business growth.
          </p>

          {/* CTA BUTTONS */}
          <div className="aiwa__hero_actions">
            <a href="/contact" className="aiwa__btn_primary">
              Get Free Consultation
            </a>
            <a href="/#portfolio" className="aiwa__btn_secondary">
              View Portfolio →
            </a>
          </div>

          {/* TRUST TEXT */}
          <p className="aiwa__hero_trust_text">
            Trusted by 120+ businesses across the UK, USA & Europe
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="aiwa__stats_section">
        <div className="aiwa__container">
          <div className="aiwa__stats_border_box">
            {stats.map((s, i) => (
              <div key={i} className="stat_item">
                <span className="stat_num">{s.number}</span>
                <span className="stat_lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION */}
      <section className="aiwa__section white_bar">
        <div className="aiwa__container">
          {/* Unchanged Intro Card (Yellow Marked Area) */}
          <h2 className="aiwa__title_dark">What Is AI Web Application Development?</h2>
          <div className="aiwa__bar_row">
            <div className="aiwa__bar_num"><h2>AI</h2></div>
            <div className="aiwa__bar_content">
              <p>AI development uses artificial intelligence to automate tasks, analyze data, and personalize experiences without manual intervention. Unlike standard apps, these learn from data and improve over time, providing a major competitive edge for UK and USA businesses.</p>
            </div>
          </div>

          {/* Modern Interactive Feature Cards */}
          <h3 className="aiwa__grid_title">Examples of AI Web Applications We Build:</h3>
          
          <div className="aiwa__grid_examples_fixed">
            {[ 
              "Intelligent dashboards & reporting", 
              "AI-powered SaaS platforms", 
              "GPT powered customer tools", 
              "Automated lead qualification", 
              "AI recommendation engines", 
              "Internal workflow automation", 
              "Predictive analytics platforms", 
              "AI chatbots & virtual assistants" 
            ].map((item, index) => (
              <div key={index} className="aiwa__example_stripe_card">
                <span className="aiwa__stripe_text">{item}</span>
                
                {/* Micro-arrow icon that animates on card hover */}
                <span className="aiwa__stripe_arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="aiwa__section grey_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Custom AI Web App Services</h2>
          <div className="aiwa__grid_3">
            {services.map((s, i) => (
              <div key={i} className="aiwa__service_box hover_lift">
                {/* Flex Row Header: Groups Icon & Title Side-by-Side */}
                <div className="aiwa__service_header">
                  <div className="aiwa__box_icon">{s.i}</div>
                  <h4 className="aiwa__box_title_left">{s.t}</h4>
                </div>
                
                <ul className="aiwa__card_bullets_left">
                  {s.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* 5. PROCESS SECTION */}
     <section className="aiwa__section process-section">
  <div className="aiwa__container">
    {/* Section Label */}
    <div className="process-label">Our Process</div>

    {/* Heading */}
    <h2 className="aiwa__title_dark">
      Our Proven <span className="text_light_blue">5-Step Process</span>
    </h2>

    {/* Subtitle */}
    <p className="process-subtitle">
      We follow a structured methodology to design, build, and launch AI-powered web applications.
    </p>

    {/* Process Steps */}
    <div className="steps-grid">
      {[
        {
          number: "01",
          title: "Discovery",
          theme: "blue",
          description:
            "We study your business goals, current systems, and challenges to identify the optimal opportunities for high-impact automation.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          )
        },
        {
          number: "02",
          title: "Planning",
          theme: "purple",
          description:
            "We orchestrate the complete project roadmap, technical architecture, and user blueprints to guarantee absolute clarity before production.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          )
        },
        {
          number: "03",
          title: "Development",
          theme: "emerald",
          description:
            "Our engineering squad builds your architecture in rapid, agile sprints with transparent milestone reviews and automated quality assurance metrics.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          )
        },
        {
          number: "04",
          title: "Launch",
          theme: "amber",
          description:
            "We run deep stress tests, multi-layered security audits, and full cross-platform responsiveness benchmarks before deploying into high-availability production environments.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          )
        },
        {
          number: "05",
          title: "Growth",
          theme: "rose",
          description:
            "We stay connected with continuous platform optimization, system upgrades, and strategic monitoring metrics to adapt as your business expands operations.",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          )
        }
      ].map((step, index) => (
        <div key={index} className={`step-card step-card--${step.theme}`}>
          {/* Circular badge for modern vector icon */}
          <div className="step-circle">
            {step.icon}
          </div>

          {/* Clean, absolute numbered pill */}
          <div className="step-number">
            {step.number}
          </div>

          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* 6. WHY CHOOSE SECTION */}
 <section className="aiwa__section premium-trust-bg">
  <div className="aiwa__container">
    
    <h2 className="trust-grid-main-title">
      Why UK & USA Businesses Choose ZonzocTech
    </h2>
    
    <div className="trust-premium-grid">
      {whyChoosePoints.map((w, i) => (
        <div key={i} className="trust-premium-card">
          
          {/* Top Tech Decorative Element Layout */}
          <div className="tech-decor-wrapper">
            <div className="tech-line-nodes"></div>
          </div>
          
          <h4 className="trust-premium-card-title">{w.t}</h4>
          
          <ul className="trust-premium-list">
            {w.points.map((p, idx) => (
              <li key={idx} className="trust-premium-item">
                {/* CSS Crafted 3D Iridescent Geometric Prism Vector */}
                <div className="prism-icon" aria-hidden="true">
                  <div className="prism-face face-top"></div>
                  <div className="prism-face face-left"></div>
                  <div className="prism-face face-right"></div>
                </div>
                <span className="trust-premium-text">{p}</span>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>

  </div>
</section>
      {/* 7. TECH GRID */}
      <section className="aiwa__section white_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Technologies We Use</h2>
          <div className="aiwa__grid_3">
            {technologies.map((t, i) => (
              <div key={i} className="tech_box_full hover_lift">
                <div className="tech_box_head">
                  <img src={t.icon} alt={t.c} style={{ width: '32px', height: '32px', objectFit: 'contain' }} /> 
                  {t.c}
                </div>
                <div className="tech_pills_wrap">
                    {t.items.map((item, j) => <span key={j} className="tech_pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="aiwa__section grey_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Frequently Asked Questions</h2>
          <div className="aiwa__faq_narrow">
            {[
                {q:"How much does it cost?", a:"Cost depends on complexity and features. As an offshore agency, we offer significantly more competitive pricing than UK-based studios without compromising quality."},
                {q:"How long does it take?", a:"Simple tools take 4-8 weeks, while full SaaS platforms typically take 3-6 months. We provide clear timelines before any work begins."},
                {q:"Can you add AI to existing apps?", a:"Yes. We regularly integrate GPT capabilities, automation layers, and chatbots into existing systems without needing full rebuilds."},
                {q:"Do you provide post-launch maintenance?", a:"Absolutely. We offer flexible support packages to ensure your AI models stay updated, secure, and performant as your user base grows."},
                {q:"Is my data secure with AI?", a:"Security is our priority. We implement enterprise-grade encryption and ensure your data privacy complies with GDPR and industry-standard security protocols."}
            ].map((f, i) => (
              <details key={i} className="faq_item">
                <summary><div><span>{i + 1}.</span> {f.q}</div> <span className="faq_plus">+</span></summary>
                <div className="faq_ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="aiwd-final-cta">
        <div className="aiwd-container">

          <div className="aiwd-cta-box">
            
            <h2 className="aiwd-cta-title">
              Ready to Build Your AI Website?
            </h2>

            <p className="aiwd-cta-subtext">
              Let’s turn your idea into a high-converting AI-powered website for your business.
              Get a free consultation and project roadmap today.
            </p>

            {/* CTA BUTTONS */}
            <div className="aiwd-hero-actions">
              <a href="/contact" className="aiwd-btn-primary">
                Get Free Consultation →
              </a>

              <a href="#work" className="aiwd-btn-secondary">
                View Portfolio →
              </a>
            </div>

            <p className="aiwd-cta-note">
              No commitment • No spam • Just real strategy
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebAppDev;