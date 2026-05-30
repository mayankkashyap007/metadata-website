import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  HERO_SLIDES, HOME_SERVICES, PORTFOLIO_TABS, PROJECTS,
  SKILLS, TESTIMONIALS, PROCESS_STEPS, ABOUT_FEATURES
} from '../data';
import './Home.css';

/* ─── Hero Slider ─── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  const slide = HERO_SLIDES[current];
  return (
    <section className="hero" style={{ backgroundImage: `url(${slide.bg})` }}>
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content" key={current}>
          <span className="hero-tag">{slide.tag}</span>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <h1 className="hero-title">{slide.title.split(slide.titleHighlight).map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <span>{slide.titleHighlight}</span>}
            </React.Fragment>
          ))}</h1>
          <p className="hero-desc">{slide.desc}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Get Started Now <i className="fa-solid fa-arrow-right" /></Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
      <div className="hero-nav">
        <button onClick={() => setCurrent((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}><i className="fa-solid fa-arrow-left" /></button>
        <button onClick={() => setCurrent((current + 1) % HERO_SLIDES.length)}><i className="fa-solid fa-arrow-right" /></button>
      </div>
    </section>
  );
}

/* ─── Skills progress ─── */
function SkillBar({ label, value }) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span>{label}</span>
        <span className="skill-val">{value}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: animated ? `${value}%` : '0%' }} />
      </div>
    </div>
  );
}

/* ─── Counter ─── */
function CounterNum({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = value / 60;
        const t = setInterval(() => {
          start = Math.min(start + step, value);
          setCount(Math.floor(start));
          if (start >= value) clearInterval(t);
        }, 25);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}</span>;
}

/* ─── Portfolio tabs ─── */
function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const filtered = PROJECTS.filter(p => p.categories.includes(activeTab));
  return (
    <section className="portfolio-section section-spacing">
      <div className="container">
        <div className="section-header centered">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">Featured Client Success Stories</h2>
        </div>
        <div className="portfolio-tabs">
          {PORTFOLIO_TABS.map(t => (
            <button key={t.id} className={`tab-btn${activeTab === t.id ? ' active' : ''}`} onClick={() => setActiveTab(t.id)}>
              {t.label} <span className="tab-count">({t.count})</span>
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filtered.slice(0, 4).map(p => (
            <div className="card project-card" key={p.id}>
              <div className="project-thumb">
                <img src={p.img} alt={p.title} />
                <div className="project-overlay"><Link to="/portfolio" className="btn-primary">Read More</Link></div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section className="testimonials-section section-spacing">
      <div className="container">
        <div className="section-header centered">
          <span className="section-tag">Client Testimonials</span>
          <h2 className="section-title">What Our Clients Say About Us</h2>
        </div>
        <div className="testimonial-wrapper">
          <div className="testimonial-card" key={idx}>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <div>
                <h4 className="author-name">{t.name}</h4>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Home ─── */
export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About teaser */}
      <section className="about-teaser section-spacing">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <div className="about-img-main">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop" alt="team" />
              </div>
              <div className="about-img-sub">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" alt="office" />
              </div>
            </div>
            <div className="about-content">
              <span className="section-tag">About Our Company</span>
              <h2 className="section-title">Driving Digital Growth Through <span>Innovation</span></h2>
              <p className="about-text">We build future-ready software solutions that empower businesses to optimize operations, enhance customer experience, and scale with confidence.</p>
              <div className="features-grid">
                {ABOUT_FEATURES.map(f => (
                  <div className="feature-item" key={f.title}>
                    <div className="feature-icon"><i className={f.icon} /></div>
                    <div>
                      <h4 className="feature-title">{f.title}</h4>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">Take Our Service <i className="fa-solid fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-services section-spacing" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">What We Deliver</span>
            <h2 className="section-title">Comprehensive Technology <span>Solutions</span></h2>
          </div>
          <div className="services-grid">
            {HOME_SERVICES.map(s => (
              <div className="card service-card" key={s.id}>
                <div className="service-img"><img src={s.img} alt={s.title} /></div>
                <div className="service-body">
                  <div className="service-icon"><i className={s.icon} /></div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <Link to="/services" className="service-link">Read More <i className="fa-solid fa-arrow-right" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* Skills / Progress */}
      <section className="skills-section section-spacing" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="skills-grid">
            <div className="skills-images">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" alt="team" className="skills-img-main" />
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop" alt="coding" className="skills-img-sub" />
            </div>
            <div className="skills-content">
              <span className="section-tag">Our Expertise</span>
              <h2 className="section-title">Driving Innovation Through <span>Technology</span></h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>We deliver innovative solutions that connect people and enhance business growth through cutting-edge technology.</p>
              <div className="skills-list">
                {SKILLS.map(s => <SkillBar key={s.label} label={s.label} value={s.value} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Process */}
      <section className="process-section section-spacing" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div className="section-header centered">
            <span className="section-tag">Our Work Process</span>
            <h2 className="section-title">We are building a great future together, <span>Be with us</span></h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map(p => (
              <div className="process-card" key={p.step}>
                <div className="process-step">{p.step}</div>
                <div className="process-icon"><i className={p.icon} /></div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="cta-form-section section-spacing">
        <div className="cta-form-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop)` }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-form-grid">
            <div>
              <span className="section-tag">Contact Us</span>
              <h2 className="section-title">Let Metadata Technology <span>Help You Grow Digitally</span></h2>
              <ContactMiniForm />
            </div>
            <div className="cta-form-image">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470&auto=format&fit=crop" alt="team" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: 'fa-solid fa-clock-rotate-left', value: 15, label: 'Years in IT Industry' },
              { icon: 'fa-solid fa-handshake', value: 850, label: 'Projects Delivered' },
              { icon: 'fa-solid fa-users', value: 120, label: 'Expert Engineers' },
              { icon: 'fa-solid fa-trophy', value: 25, label: 'Industry Awards' },
            ].map(s => (
              <div className="stat-item" key={s.label}>
                <i className={s.icon} />
                <h3 className="stat-num"><CounterNum value={s.value} />+</h3>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactMiniForm() {
  const [form, setForm] = useState({ name: '', email: '', service: '' });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); };
  return (
    <form className="mini-form" onSubmit={submit}>
      <div className="mini-form-row">
        <div className="mini-form-field">
          <i className="fa-regular fa-user" />
          <input name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
        </div>
        <div className="mini-form-field">
          <i className="fa-regular fa-envelope" />
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handle} required />
        </div>
      </div>
      <div className="mini-form-field">
        <i className="fa-solid fa-angle-down" />
        <select name="service" value={form.service} onChange={handle} required>
          <option value="" disabled>Select Service</option>
          <option>Business</option>
          <option>Cybersecurity</option>
          <option>IT Service</option>
          <option>Marketing</option>
          <option>Cloud Service</option>
        </select>
      </div>
      <button type="submit" className="btn-primary">
        {sent ? 'Message Sent! ✓' : 'Request a Call Back'}
      </button>
    </form>
  );
}
