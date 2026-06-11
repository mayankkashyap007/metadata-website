import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { STATS, WHY_US, OFFICE_GALLERY } from '../data';
import './About.css';

function CounterNum({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let c = 0;
        const step = value / 60;
        const t = setInterval(() => {
          c = Math.min(c + step, value);
          setCount(Math.floor(c));
          if (c >= value) clearInterval(t);
        }, 25);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <div className="breadcrumb-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop)` }} />
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">About Our Company</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main intro */}
      <section className="about-intro section-spacing">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-imgs">
              <div className="ai-main"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop" alt="team" /></div>
              <div className="ai-badge">
                <i className="fa-solid fa-shield-halved" />
                <div>
                  <span className="badge-num">15+</span>
                  <span className="badge-txt">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="about-intro-content">
              <span className="section-tag">Digital Transformation Solutions</span>
              <h2 className="section-title">Optimize Your Technology Infrastructure for <span>Business Growth</span></h2>
              <p className="about-text">Our comprehensive IT modernization services help organizations streamline operations, enhance security, and leverage cutting-edge technologies to drive competitive advantage. We implement future-proof solutions that scale with your business needs while reducing operational costs.</p>
              <ul className="check-list">
                <li><i className="fa-solid fa-circle-check" />Proactive System Monitoring</li>
                <li><i className="fa-solid fa-circle-check" />Comprehensive Data Protection</li>
                <li><i className="fa-solid fa-circle-check" />Hybrid Cloud Solutions</li>
              </ul>
              <div className="cta-contact-box">
                <div className="cta-icon"><i className="fa-solid fa-phone" /></div>
                <div>
                  <a href="tel:+917249130238" className="cta-number">+91 724 913 0238</a>
                  <span className="cta-label">Have any question?</span>
                </div>
              </div>
              <Link to="/services" className="btn-primary" style={{ marginTop: '24px' }}>View Our Services <i className="fa-solid fa-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="about-cta-banner">
        <div className="about-cta-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1200&auto=format&fit=crop)` }} />
        <div className="container">
          <div className="about-cta-inner">
            <div className="cta-left">
              <p className="cta-tag">Schedule a Consultation</p>
              <div className="cta-avatars">
                {[1,2,3,4,5,6].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="" className="cta-avatar" />
                ))}
              </div>
              <div className="cta-rating">
                <span className="stars">★★★★★</span>
                <span>3200+ Client Reviews</span>
              </div>
            </div>
            <div className="cta-mid">
              <h2 className="section-title" style={{ marginBottom: '12px' }}>Schedule Your Consultation Today</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>At Metadata Technology, we are committed to forging lasting partnerships with our clients.</p>
              <Link to="/contact" className="btn-primary">Book Now</Link>
            </div>
            <div className="cta-right">
              <span className="cta-big-num">65,000+</span>
              <span className="cta-big-label">Satisfied Clients Across India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="stats-band">
        <div className="stats-band-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop)` }} />
        <div className="container">
          <div className="stats-band-grid">
            {STATS.map(s => (
              <div className="stat-band-item" key={s.label}>
                <i className={s.icon} />
                <h3 className="stat-band-num"><CounterNum value={s.value} />{s.suffix}</h3>
                <p className="stat-band-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="why-us section-spacing">
        <div className="container">
          <div className="section-header centered" style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why Clients Trust <span>Metadata Technology</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto' }}>
              At Metadata Technology, we put our clients at the core of our operations, listening to their vision and delivering tailored solutions.
            </p>
          </div>
          <div className="why-grid">
            {WHY_US.map(w => (
              <div className="why-card" key={w.title}>
                <div className="why-icon"><i className={w.icon} /></div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Gallery ── */}
      <section className="about-gallery-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">Our Workplace</span>
            <h2 className="section-title">A Glimpse Inside <span>Our Office</span></h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '12px auto 0' }}>
              Where great minds collaborate to build technology that matters.
            </p>
          </div>
          <div className="office-gallery-grid">
            {OFFICE_GALLERY.map((item, i) => (
              <div className="gallery-card" key={i}>
                <img src={item.img} alt={item.caption} />
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
