import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';
import { PageHeader, Button } from '../components/ui';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const curatedServices = [
    'Product Photography',
    'E-Commerce Product Shots',
    'Beauty, Skincare & Fashion Imagery',
    'Concept Development & Styling',
  ];

  return (
    <section className="about-page">
      <div className="container">
        {/* Reusable PageHeader Component */}
        <PageHeader title="ABOUT" />

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
              <p className="about-text">{STUDIO_INFO.bio}</p>
            </div>

            <div>
              <h4 className="about-section-heading">My Expertise</h4>
              <p className="about-text">{STUDIO_INFO.expertise}</p>
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

            {/* Reusable Button UI Component */}
            <div style={{ marginTop: '0.5rem' }}>
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                onClick={() => navigate('/contact')}
              >
                Book Studio Shoot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
