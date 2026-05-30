import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const CONTACT_BOXES = [
    { icon: 'fa-solid fa-location-dot', title: 'Our Address', text: COMPANY_INFO.address, img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=500&auto=format&fit=crop' },
    { icon: 'fa-solid fa-envelope', title: 'Email Us', text: COMPANY_INFO.email, link: `mailto:${COMPANY_INFO.email}`, img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=500&auto=format&fit=crop' },
    { icon: 'fa-solid fa-phone-volume', title: 'Call Us', text: COMPANY_INFO.phone, link: `tel:${COMPANY_INFO.phone}`, img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <>
      <div className="breadcrumb-section">
        <div className="breadcrumb-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1170&auto=format&fit=crop)` }} />
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Contact Us</h1>
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Contact</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="contact-page section-spacing">
        <div className="container">
          {/* Contact boxes */}
          <div className="contact-boxes">
            {CONTACT_BOXES.map(c => (
              <div className="contact-box" key={c.title}>
                <div className="contact-box-icon"><i className={c.icon} /></div>
                <div className="contact-box-content">
                  <h3 className="contact-box-title">{c.title}</h3>
                  {c.link
                    ? <a href={c.link} className="contact-box-text">{c.text}</a>
                    : <p className="contact-box-text">{c.text}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="contact-main">
            <div className="contact-form-section">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">Hi, how are you doing today? <span>Let's talk now.</span></h2>

              {sent && (
                <div className="success-msg">
                  <i className="fa-solid fa-circle-check" /> Message sent! We'll get back to you soon.
                </div>
              )}

              <form className="contact-form" onSubmit={submit}>
                <div className="form-row">
                  <div className="form-field">
                    <i className="fa-regular fa-user" />
                    <input name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
                  </div>
                  <div className="form-field">
                    <i className="fa-regular fa-envelope" />
                    <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handle} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <i className="fa-regular fa-phone" />
                    <input name="phone" placeholder="Your Phone" value={form.phone} onChange={handle} />
                  </div>
                  <div className="form-field">
                    <i className="fa-solid fa-angle-down" />
                    <select name="service" value={form.service} onChange={handle} required>
                      <option value="" disabled>Reason for enquiry</option>
                      <option>IT Service</option>
                      <option>Cloud Service</option>
                      <option>Cybersecurity</option>
                      <option>Business</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <i className="fa-regular fa-pen" />
                  <textarea name="message" rows="5" placeholder="Tell us about your project..." value={form.message} onChange={handle} required />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message <i className="fa-solid fa-arrow-right" />
                </button>
              </form>
            </div>

            <div className="contact-map-wrapper">
              <iframe
                title="Metadata Technologies Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4692835243986!2d72.99081427466746!3d19.174694848867816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfda630d85f1%3A0x7cb2dc5e9e2aa788!2sMindspace%20Airoli%20West!5e0!3m2!1sen!2sin!4v1763734454015!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
