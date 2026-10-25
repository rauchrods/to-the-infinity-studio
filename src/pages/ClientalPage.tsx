import React from 'react';
import { CLIENT_BRANDS, type PortfolioItem } from '../data/portfolioData';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { PageHeader, Badge } from '../components/ui';
import './ClientalPage.css';

interface ClientalPageProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const ClientalPage: React.FC<ClientalPageProps> = ({ onSelectImage }) => {
  return (
    <div className="cliental-page">
      <div className="container">
        {/* Reusable PageHeader UI Component */}
        <PageHeader
          title="CLIENTAL"
          description="Trusted by premier beauty, skincare, fragrance, and lifestyle brands across India for commercial campaigns, e-commerce listings, and editorial visual direction."
        >
          {/* Reusable Badge UI Components */}
          <div className="cliental-brands-roster">
            {CLIENT_BRANDS.map((brand, idx) => (
              <Badge key={idx}>{brand}</Badge>
            ))}
          </div>
        </PageHeader>

        {/* Gallery for Cliental items */}
        <PortfolioGallery onSelectImage={onSelectImage} pageFilter="cliental" />
      </div>
    </div>
  );
};
