import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return <span className={`ui-badge ${className}`}>{children}</span>;
};
