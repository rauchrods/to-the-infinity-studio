import React, { useState, useMemo } from 'react';
import { CLIENT_BRANDS, PORTFOLIO_ITEMS, type PortfolioItem } from '../data/portfolioData';
import { ImageCard } from './ImageCard';
import { CustomSelect } from './ui';
import './PortfolioGallery.css';

interface PortfolioGalleryProps {
  onSelectImage: (item: PortfolioItem) => void;
  pageFilter?: 'work' | 'cliental';
  selectedBrand?: string;
  onSelectBrand?: (brand: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectImage,
  pageFilter = 'work',
  selectedBrand = 'all',
  onSelectBrand
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'cosmetics', label: 'Cosmetics' },
    { id: 'fragrance', label: 'Fragrance' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'commercial', label: 'Commercial' },
  ];

  // Calculate counts per brand for the dropdown options
  const brandOptions = useMemo(() => {
    const counts: Record<string, number> = {};
    let totalCliental = 0;

    PORTFOLIO_ITEMS.forEach((item) => {
      if (item.page === 'cliental' || item.page === 'both') {
        totalCliental++;
        if (item.client) {
          counts[item.client] = (counts[item.client] || 0) + 1;
        }
      }
    });

    return [
      {
        value: 'all',
        label: 'ALL BRANDS',
        count: totalCliental
      },
      ...CLIENT_BRANDS.map((brand) => ({
        value: brand,
        label: brand.toUpperCase(),
        count: counts[brand] || 0
      }))
    ];
  }, []);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesPage =
        pageFilter === 'work'
          ? item.page === 'work' || item.page === 'both'
          : item.page === 'cliental' || item.page === 'both';

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesBrand =
        !selectedBrand ||
        selectedBrand === 'all' ||
        item.client?.toLowerCase() === selectedBrand.toLowerCase();

      return matchesPage && matchesCategory && matchesBrand;
    });
  }, [pageFilter, selectedCategory, selectedBrand]);

  return (
    <section className="portfolio-gallery-section">
      <div className="container">
        {/* Controls Bar: Category Filters & Luxury Custom Brand Dropdown */}
        <div className="gallery-filter-bar">
          <div className="gallery-categories-group">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {pageFilter === 'cliental' && (
            <div className="gallery-brand-filter-group">
              <CustomSelect
                id="gallery-brand-select"
                label="CLIENT BRAND:"
                value={selectedBrand}
                onChange={(val) => onSelectBrand?.(val)}
                options={brandOptions}
                placeholder="ALL BRANDS"
              />
            </div>
          )}
        </div>

        {/* Active Filter Strip when filtering by Brand */}
        {pageFilter === 'cliental' && selectedBrand !== 'all' && (
          <div className="gallery-active-filter-strip">
            <div className="active-filter-badge">
              <span className="active-filter-tag">Brand:</span>
              <span className="active-filter-name">{selectedBrand}</span>
              <button
                type="button"
                className="active-filter-remove"
                onClick={() => onSelectBrand?.('all')}
                title="Clear brand filter"
                aria-label={`Remove ${selectedBrand} filter`}
              >
                ✕
              </button>
            </div>

            <span className="active-filter-summary">
              Showing <strong>{filteredItems.length}</strong> {filteredItems.length === 1 ? 'project' : 'projects'}
            </span>

            {selectedCategory !== 'all' && (
              <button
                type="button"
                className="active-filter-clear-cat"
                onClick={() => setSelectedCategory('all')}
              >
                Show all {selectedBrand} categories
              </button>
            )}
          </div>
        )}

        {/* Gallery Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <ImageCard
                key={item.id}
                item={item}
                onSelect={onSelectImage}
                priority={index < 4}
              />
            ))}
          </div>
        ) : (
          <div className="gallery-empty-state">
            <div className="empty-state-symbol">✦</div>
            <h3 className="empty-state-title">No matching campaigns found</h3>
            <p className="empty-state-message">
              No {selectedCategory !== 'all' ? `"${selectedCategory}"` : ''} images found for{' '}
              <strong>{selectedBrand}</strong>.
            </p>
            <div className="empty-state-actions">
              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  className="empty-state-btn"
                  onClick={() => setSelectedCategory('all')}
                >
                  View all {selectedBrand} campaigns
                </button>
              )}
              <button
                type="button"
                className="empty-state-btn empty-state-btn-primary"
                onClick={() => {
                  setSelectedCategory('all');
                  onSelectBrand?.('all');
                }}
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

