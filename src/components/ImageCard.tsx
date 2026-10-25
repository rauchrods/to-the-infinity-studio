import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { type PortfolioItem } from '../data/portfolioData';
import './ImageCard.css';

interface ImageCardProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
  priority?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({ item, onSelect, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`gallery-card ${item.aspect || 'square'}`}
      onClick={() => onSelect(item)}
    >
      <div className="gallery-card-inner">
        {!isLoaded && <div className="skeleton-shimmer" style={{ position: 'absolute', inset: 0 }} />}
        <img
          src={item.imageSrc}
          alt={item.title}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          className="gallery-img"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
        <div className="gallery-zoom-badge" title="View Fullscreen">
          <Maximize2 size={16} />
        </div>
      </div>

      <div className="gallery-card-meta">
        <h3 className="gallery-card-title">{item.title}</h3>
        <span className="gallery-card-category">{item.categoryLabel}</span>
      </div>
    </div>
  );
};
