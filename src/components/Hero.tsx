import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Full-width photography banner from the original site */}
      <div className="hero-banner-container">
        <img
          src={STUDIO_INFO.heroBannerUrl}
          alt="To The Infinity Studio Commercial Lighting"
          className="hero-banner-img"
        />
      </div>

      {/* Original Manifesto & Title */}
      <div className="hero-text-block">
        <h1 className="hero-main-title">
          Shot for real. Styled for real.
        </h1>
        <div className="original-divider" />
        <p className="hero-tagline">
          Only real setups and moments as they actually happened.
        </p>
      </div>
    </section>
  );
};
