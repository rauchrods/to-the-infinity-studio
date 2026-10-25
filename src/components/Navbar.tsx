import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          {/* Logo & Title */}
          <NavLink to="/" className="site-branding" onClick={closeMenu}>
            <div className="site-logo-wrap">
              <img
                src={STUDIO_INFO.logoUrl}
                alt="To The Infinity Studio"
                className="site-logo-img"
              />
            </div>
            <span className="site-title-text">
              To the infinity Studio
            </span>
          </NavLink>

          {/* Desktop Navigation Links (Original font & uppercase style) */}
          <nav className="desktop-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Work
            </NavLink>
            <NavLink
              to="/cliental"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Cliental
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Work
        </NavLink>
        <NavLink
          to="/cliental"
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Cliental
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};
