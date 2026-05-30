import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data';
import './Services.css';

export default function Services() {
  return (
    <>
      <div className="breadcrumb-section">
        <div className="breadcrumb-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop)` }} />
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Our IT Services</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Our Services</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="services-page section-spacing">
        <div className="container">
          <div className="section-header centered" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Full-Spectrum IT Solutions for <span>Modern Business</span></h2>
          </div>
          <div className="services-page-grid">
            {SERVICES.map(s => (
              <div className="svc-card" key={s.id}>
                <div className="svc-img">
                  <img src={s.img} alt={s.title} />
                  <div className="svc-num">{String(s.id).padStart(2, '0')}</div>
                </div>
                <div className="svc-body">
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <ul className="svc-features">
                    {s.features.map(f => (
                      <li key={f}><i className="fa-regular fa-shield-check" />{f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-outline" style={{ fontSize: '13px', padding: '10px 24px' }}>
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop)` }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-cta-inner">
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Ready to Transform Your Business?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' }}>
              Let's talk about how we can help you leverage technology to achieve your business goals.
            </p>
            <Link to="/contact" className="btn-primary">Get a Free Consultation <i className="fa-solid fa-arrow-right" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
