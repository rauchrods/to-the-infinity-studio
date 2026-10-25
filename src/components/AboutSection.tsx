import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const curatedServices = [
    "Product Photography",
    "E-Commerce Product Shots",
    "Beauty, Skincare & Fashion Imagery",
    "Concept Development & Styling"
  ];

  return (
    <section className="about-page-section">
      <div className="container">
        {/* Header Block matching original site */}
        <div className="about-header-block">
          <h1 className="about-page-title">ABOUT</h1>
          <div className="original-divider" />
        </div>

        {/* 2-Column Split: Portrait & Biography */}
        <div className="about-grid">
          {/* Left Column: Authentic Portrait */}
          <div className="about-portrait-wrap">
            <img
              src={STUDIO_INFO.portraitUrl}
              alt={STUDIO_INFO.founder}
              className="about-portrait-img"
            />
            <div className="about-portrait-caption">
              <span className="about-founder-name">{STUDIO_INFO.founder}</span>
              <span className="about-founder-role">Mumbai Studio</span>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Curated Services */}
          <div className="about-content-wrap">
            <div>
              <h2 className="about-title">{STUDIO_INFO.founder}</h2>
              <h3 className="about-subtitle">Defining Brands Through Precision</h3>
              <p className="about-text">
                {STUDIO_INFO.bio}
              </p>
            </div>

            <div>
              <h4 className="about-section-heading">My Expertise</h4>
              <p className="about-text">
                {STUDIO_INFO.expertise}
              </p>
            </div>

            <div>
              <h4 className="about-section-heading">Curated Services</h4>
              <ul className="about-services-list">
                {curatedServices.map((service, index) => (
                  <li key={index} className="about-service-item">
                    <Check size={16} strokeWidth={2.5} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="about-action-btn">
              <span>Book Studio Shoot</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
