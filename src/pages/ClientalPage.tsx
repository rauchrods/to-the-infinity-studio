import React, { useState, useMemo } from 'react';
import { CLIENT_BRANDS, PORTFOLIO_ITEMS, type PortfolioItem } from '../data/portfolioData';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { PageHeader, Badge } from '../components/ui';
import './ClientalPage.css';

interface ClientalPageProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const ClientalPage: React.FC<ClientalPageProps> = ({ onSelectImage }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  // Compute item counts per brand for items displayed in cliental section
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    PORTFOLIO_ITEMS.forEach((item) => {
      if (item.page === 'cliental' || item.page === 'both') {
        if (item.client) {
          counts[item.client] = (counts[item.client] || 0) + 1;
        }
      }
    });
    return counts;
  }, []);

  const totalClientalCount = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => item.page === 'cliental' || item.page === 'both').length;
  }, []);

  const handleBrandClick = (brand: string) => {
    if (selectedBrand === brand) {
      setSelectedBrand('all'); // Toggle off if clicked again
    } else {
      setSelectedBrand(brand);
    }
  };

  return (
    <div className="cliental-page">
      <div className="container">
        {/* Reusable PageHeader UI Component */}
        <PageHeader
          title="CLIENTAL"
          description="Trusted by premier beauty, skincare, fragrance, and lifestyle brands across India for commercial campaigns, e-commerce listings, and editorial visual direction."
        >
          {/* Interactive Brand Filter Pills */}
          <div className="cliental-filter-header">
            <span className="cliental-filter-label">Filter by Brand:</span>
            {selectedBrand !== 'all' && (
              <button
                type="button"
                className="cliental-reset-filter-btn"
                onClick={() => setSelectedBrand('all')}
              >
                Reset Filter (Show All {totalClientalCount})
              </button>
            )}
          </div>

          <div
            className="cliental-brands-roster"
            role="toolbar"
            aria-label="Filter portfolio by client brand"
          >
            <Badge
              key="all"
              onClick={() => setSelectedBrand('all')}
              active={selectedBrand === 'all'}
              count={totalClientalCount}
              title="Show all client campaigns"
            >
              All Clients
            </Badge>

            {CLIENT_BRANDS.map((brand) => {
              const count = brandCounts[brand] || 0;
              return (
                <Badge
                  key={brand}
                  onClick={() => handleBrandClick(brand)}
                  active={selectedBrand === brand}
                  count={count > 0 ? count : undefined}
                  title={`Filter by ${brand} (${count} campaigns)`}
                >
                  {brand}
                </Badge>
              );
            })}
          </div>
        </PageHeader>

        {/* Gallery for Cliental items with active brand filtering */}
        <PortfolioGallery
          onSelectImage={onSelectImage}
          pageFilter="cliental"
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
        />
      </div>
    </div>
  );
};

