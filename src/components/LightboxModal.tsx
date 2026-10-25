import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { type PortfolioItem } from '../data/portfolioData';
import './LightboxModal.css';

interface LightboxModalProps {
  item: PortfolioItem | null;
  allItems: PortfolioItem[];
  onClose: () => void;
  onSelectNext: (nextItem: PortfolioItem) => void;
  onSelectPrev: (prevItem: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  allItems,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % allItems.length;
        onSelectNext(allItems[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
        onSelectPrev(allItems[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, allItems, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const nextItem = allItems[(currentIndex + 1) % allItems.length];
  const prevItem = allItems[(currentIndex - 1 + allItems.length) % allItems.length];

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-topbar">
        <span className="lightbox-counter">
          {item.categoryLabel} &bull; {currentIndex + 1} of {allItems.length}
        </span>
        <button className="lightbox-close-btn" onClick={onClose} title="Close (Esc)">
          <X size={22} />
        </button>
      </div>

      <div className="lightbox-stage">
        <button
          className="lightbox-nav-btn prev"
          onClick={() => onSelectPrev(prevItem)}
          title="Previous (Arrow Left)"
        >
          <ChevronLeft size={28} />
        </button>

        <img
          src={item.imageSrc}
          alt={item.title}
          className="lightbox-image"
        />

        <button
          className="lightbox-nav-btn next"
          onClick={() => onSelectNext(nextItem)}
          title="Next (Arrow Right)"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="lightbox-caption">
        <h3 className="lightbox-title">{item.title}</h3>
        {item.client && <p className="lightbox-sub">Client: {item.client}</p>}
      </div>
    </div>
  );
};
