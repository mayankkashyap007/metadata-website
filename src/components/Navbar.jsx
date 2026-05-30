import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY_INFO } from '../data';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-inner">
            <span className="topbar-note">
              <span className="note-label">Update:</span>
              Sign Up and receive up to 20% bonus discount on checkout
            </span>
            <div className="topbar-social">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f" /></a>
              <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter" /></a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Metadata Technologies" className="logo-img" />
            </Link>

            <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="navbar-right">
              <a href={`tel:${COMPANY_INFO.phone}`} className="nav-phone">
                <i className="fa-solid fa-phone" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
