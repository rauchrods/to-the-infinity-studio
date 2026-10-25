import React from 'react';
import { Divider } from './Divider';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  tagline?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  tagline,
  description,
  className = '',
  children,
}) => {
  return (
    <div className={`ui-page-header ${className}`}>
      <h1 className="ui-page-header-title">{title}</h1>
      <Divider />
      {tagline && <p className="ui-page-header-tagline">{tagline}</p>}
      {description && <p className="ui-page-header-description">{description}</p>}
      {children}
    </div>
  );
};
