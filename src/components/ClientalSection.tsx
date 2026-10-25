import React from 'react';
import { CLIENT_BRANDS, type PortfolioItem } from '../data/portfolioData';
import { PortfolioGallery } from './PortfolioGallery';
import './ClientalSection.css';

interface ClientalSectionProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const ClientalSection: React.FC<ClientalSectionProps> = ({ onSelectImage }) => {
  return (
    <div className="cliental-section">
      <div className="container">
        {/* Header Block matching original site */}
        <div className="cliental-header-block">
          <h1 className="cliental-title">CLIENTAL</h1>
          <div className="original-divider" />
          <p className="cliental-tagline">
            Trusted by premier beauty, skincare, fragrance, and lifestyle brands across India for commercial campaigns, e-commerce listings, and editorial visual direction.
          </p>

          {/* Clean Brand Badges */}
          <div className="cliental-brands-roster">
            {CLIENT_BRANDS.map((brand, idx) => (
              <span key={idx} className="cliental-brand-pill">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery for Cliental items */}
        <PortfolioGallery onSelectImage={onSelectImage} pageFilter="cliental" />
      </div>
    </div>
  );
};
