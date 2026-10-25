import React from 'react';
import './Badge.css';

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  count?: number;
  title?: string;
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  onClick,
  active = false,
  count,
  title,
  id
}) => {
  if (onClick) {
    return (
      <button
        type="button"
        id={id}
        onClick={onClick}
        className={`ui-badge ui-badge-clickable ${active ? 'active' : ''} ${className}`}
        aria-pressed={active}
        title={title}
      >
        <span className="ui-badge-text">{children}</span>
        {count !== undefined && <span className="ui-badge-count">{count}</span>}
      </button>
    );
  }

  return (
    <span id={id} className={`ui-badge ${className}`} title={title}>
      <span className="ui-badge-text">{children}</span>
      {count !== undefined && <span className="ui-badge-count">{count}</span>}
    </span>
  );
};

