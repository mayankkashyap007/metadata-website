import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_TABS, PROJECTS } from '../data';
import './Portfolio.css';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const filtered = PROJECTS.filter(p => p.categories.includes(activeTab));

  return (
    <>
      <div className="breadcrumb-section">
        <div className="breadcrumb-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop)` }} />
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Our Portfolio</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Portfolio</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="portfolio-page section-spacing">
        <div className="container">
          <div className="section-header centered" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Featured Client <span>Success Stories</span></h2>
          </div>

          <div className="portfolio-tabs" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {PORTFOLIO_TABS.map(t => (
              <button
                key={t.id}
                className={`tab-btn${activeTab === t.id ? ' active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label} <span className="tab-count">({t.count})</span>
              </button>
            ))}
          </div>

          <div className="port-grid">
            {filtered.map(p => (
              <div className="port-card" key={p.id}>
                <div className="port-thumb">
                  <img src={p.img} alt={p.title} />
                  <div className="port-overlay">
                    <Link to="/contact" className="btn-primary" style={{ fontSize: '13px', padding: '10px 22px' }}>
                      View Project <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="port-body">
                  <div className="port-cats">
                    {p.categories.filter(c => c !== 'all').map(c => (
                      <span className="port-cat" key={c}>{c}</span>
                    ))}
                  </div>
                  <h3 className="port-title">{p.title}</h3>
                  <p className="port-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
