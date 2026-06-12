import React, { useState, useEffect, useRef } from 'react';
import './OfficeSlider.css';

// Images served directly from the /public folder (no import needed)
const SLIDES = [
  { img: '/teamwork.jpeg',       caption: 'Our Team at Work' },
  { img: '/teamwork1.jpeg',      caption: 'Development Floor' },
  { img: '/conferenceroom.jpeg', caption: 'Conference Room' },
  { img: '/generalmeeting.jpeg', caption: 'General Meeting Room' },
  { img: '/cabin.jpeg',          caption: "Director's Cabin" },
  { img: '/officelayout.jpeg',   caption: 'Office Layout' },
  { img: '/workingarea.jpeg',    caption: 'Working Area' },
];

export default function OfficeSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    clearInterval(timerRef.current);
    setActive(index);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
  };

  const prevSlide = () => goTo((active - 1 + SLIDES.length) % SLIDES.length);
  const nextSlide = () => goTo((active + 1) % SLIDES.length);

  return (
    <section className="office-slider-section section-spacing">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Our Workplace</span>
          <h2 className="section-title">A Glimpse Inside <span>Our Office</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '12px auto 0' }}>
            Where great minds collaborate to build technology that matters.
          </p>
        </div>

        <div className="office-slider">
          <div className="office-slider-track">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`office-slide ${i === active ? 'active' : ''}`}
              >
                <img src={slide.img} alt={slide.caption} />
                <div className="office-slide-caption">{slide.caption}</div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous slide">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next slide">
            <i className="fa-solid fa-chevron-right" />
          </button>

          {/* Dots */}
          <div className="slider-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`slider-dot ${i === active ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
