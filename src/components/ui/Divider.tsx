import React from 'react';
import './Divider.css';

interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({ className = '', style }) => {
  return <div className={`ui-divider ${className}`} style={style} />;
};
