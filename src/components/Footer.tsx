import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './Icons';
import { STUDIO_INFO } from '../data/portfolioData';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Brand identity */}
        <Link to="/" className="footer-branding" onClick={scrollToTop}>
          <img
            src={STUDIO_INFO.logoUrl}
            alt="To The Infinity Studio"
            className="footer-logo-img"
          />
          <span className="footer-title-text">
            To the ∞ Studio
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <Link to="/" className="footer-nav-link" onClick={scrollToTop}>
            Work
          </Link>
          <Link to="/cliental" className="footer-nav-link" onClick={scrollToTop}>
            Cliental
          </Link>
          <Link to="/about" className="footer-nav-link" onClick={scrollToTop}>
            About
          </Link>
          <Link to="/contact" className="footer-nav-link" onClick={scrollToTop}>
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="footer-social-row">
          <a
            href={STUDIO_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="Instagram"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={STUDIO_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved. Mumbai, India.
          </span>
          <button
            type="button"
            className="footer-scroll-top-btn"
            onClick={scrollToTop}
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
