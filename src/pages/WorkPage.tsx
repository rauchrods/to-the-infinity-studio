import React from 'react';
import { Hero } from '../components/Hero';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { type PortfolioItem } from '../data/portfolioData';
import './WorkPage.css';

interface WorkPageProps {
  onSelectImage: (item: PortfolioItem) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectImage }) => {
  return (
    <div className="work-page">
      <Hero />
      <PortfolioGallery onSelectImage={onSelectImage} pageFilter="work" />
    </div>
  );
};
