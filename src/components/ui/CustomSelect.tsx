import React, { useState, useRef, useEffect, useId } from 'react';
import './CustomSelect.css';

export interface SelectOption {
  value: string;
  label: string;
  count?: number;
}

export interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  className?: string;
  id?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select Option',
  label,
  className = '',
  id: externalId
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const generatedId = useId();
  const selectId = externalId || generatedId;

  // Find currently selected option
  const selectedOption = options.find((opt) => opt.value.toLowerCase() === value.toLowerCase());

  // Filter options based on search query
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setHighlightedIndex(-1);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          handleSelect(filteredOptions[highlightedIndex].value);
        }
        break;
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('all');
  };

  return (
    <div
      ref={dropdownRef}
      className={`custom-select-container ${className}`}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label htmlFor={selectId} className="custom-select-label">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        id={selectId}
        className={`custom-select-trigger ${isOpen ? 'open' : ''} ${value !== 'all' ? 'has-value' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="trigger-content">
          <span className="trigger-label">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.count !== undefined && selectedOption.count > 0 && (
            <span className="trigger-count">{selectedOption.count}</span>
          )}
        </span>

        <span className="trigger-actions">
          {value !== 'all' && (
            <span
              className="trigger-clear-btn"
              onClick={handleClear}
              title="Reset to All Brands"
              role="button"
              tabIndex={-1}
            >
              ✕
            </span>
          )}
          <svg
            className={`trigger-arrow ${isOpen ? 'rotated' : ''}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="square"
            />
          </svg>
        </span>
      </button>

      {/* Floating Dropdown Panel */}
      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          {/* Quick Search Bar */}
          <div className="dropdown-search-wrapper">
            <svg
              className="search-icon"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setHighlightedIndex(0);
              }}
              placeholder="SEARCH CLIENT BRANDS..."
              className="dropdown-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Options List */}
          <ul ref={listRef} className="dropdown-options-list">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, index) => {
                const isSelected = opt.value.toLowerCase() === value.toLowerCase();
                const isHighlighted = index === highlightedIndex;

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    className={`dropdown-option ${isSelected ? 'selected' : ''} ${
                      isHighlighted ? 'highlighted' : ''
                    }`}
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <span className="option-label">{opt.label}</span>
                    {opt.count !== undefined && (
                      <span className="option-count">{opt.count}</span>
                    )}
                  </li>
                );
              })
            ) : (
              <li className="dropdown-empty-state">
                <span>No brands match "{searchQuery}"</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
