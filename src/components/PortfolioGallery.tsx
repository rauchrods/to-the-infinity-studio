import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, type PortfolioItem } from '../data/portfolioData';
import { ImageCard } from './ImageCard';
import './PortfolioGallery.css';

interface PortfolioGalleryProps {
  onSelectImage: (item: PortfolioItem) => void;
  pageFilter?: 'work' | 'cliental';
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectImage, pageFilter = 'work' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'cosmetics', label: 'Cosmetics' },
    { id: 'fragrance', label: 'Fragrance' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    const matchesPage = pageFilter === 'work' ? (item.page === 'work' || item.page === 'both') : (item.page === 'cliental' || item.page === 'both');
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesPage && matchesCategory;
  });

  return (
    <section className="portfolio-gallery-section">
      <div className="container">
        {/* Category Filters */}
        <div className="gallery-filter-bar">
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

        {/* Gallery Grid */}
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
      </div>
    </section>
  );
};
