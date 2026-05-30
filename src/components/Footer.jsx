import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data';
import logo from '../assets/logo.png';
import './Footer.css';

const FOOTER_SERVICES = [
  'Cloud & Database Services',
  'Cybersecurity & Data Protection',
  'Web & Mobile Application Development',
  'AI & Machine Learning Solutions',
  'IT Consulting & Support',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="Metadata Technologies" className="footer-logo-img" />
              </Link>
              <p className="footer-desc">
                Metadata Technology delivers modern IT solutions that help businesses grow through innovation, security, and performance.
              </p>
              <div className="footer-social">
                <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f" /></a>
                <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter" /></a>
                <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
                <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" /></a>
              </div>
            </div>

            {/* Address */}
            <div className="footer-col">
              <h3 className="footer-heading">Address</h3>
              <ul className="footer-contact-list">
                <li><i className="fa-solid fa-location-dot" /><span>{COMPANY_INFO.address}</span></li>
                <li><i className="fa-solid fa-phone" /><a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a></li>
                <li><i className="fa-solid fa-envelope" /><a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></li>
                <li><i className="fa-solid fa-clock" /><span>Office: {COMPANY_INFO.hours}</span></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="footer-nav-list">
                {FOOTER_SERVICES.map(s => (
                  <li key={s}>
                    <Link to="/services"><i className="fa-solid fa-chevron-right" />{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>Copyright &copy; 2025 <Link to="/">MetaData Technology</Link>. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/contact">Privacy Policy</Link>
              <Link to="/contact">Terms of Use</Link>
              <Link to="/contact">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
