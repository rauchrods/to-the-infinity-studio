import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './Icons';
import { STUDIO_INFO } from '../data/portfolioData';
import './ContactSection.css';

interface ContactSectionProps {
  onShowToast?: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    service: 'Product Photography',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    if (onShowToast) {
      onShowToast(`Copied ${label} to clipboard!`);
    }
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast('Inquiry sent successfully! We will get in touch shortly.');
      }
    }, 700);
  };

  // WhatsApp click handler prefilled with form data if available
  const getWhatsAppLink = () => {
    let msg = `Hi Sarvesh! I'm contacting you via To The Infinity Studio website.`;
    if (formData.name) msg += `\nName: ${formData.name}`;
    if (formData.brand) msg += `\nBrand: ${formData.brand}`;
    if (formData.service) msg += `\nService: ${formData.service}`;
    if (formData.message) msg += `\nNote: ${formData.message}`;
    return `https://wa.me/919664568706?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        {/* Header Block matching original site */}
        <div className="contact-header-block">
          <h1 className="contact-page-title">CONTACT</h1>
          <div className="original-divider" />
          <p className="contact-tagline">TO THE ∞ STUDIO</p>
          <p className="contact-subtext">
            Commercial & editorial photography inquiries, rate cards, and studio booking requests.
          </p>
        </div>

        {/* 2-Column Split: Studio Info & Working Form */}
        <div className="contact-grid">
          {/* Left Column: Authentic Studio Details & Media */}
          <div className="contact-info-col">
            <img
              src={STUDIO_INFO.studioShotUrl}
              alt="To The Infinity Studio Mumbai"
              className="contact-studio-img"
            />

            <div className="contact-details-box">
              <span className="contact-brand-name">To The Infinity Studio</span>

              {/* Location */}
              <div className="contact-detail-row">
                <div className="contact-detail-left">
                  <MapPin size={18} className="contact-icon" />
                  <span>{STUDIO_INFO.location}</span>
                </div>
              </div>

              {/* Phone with click-to-call and copy */}
              <div className="contact-detail-row">
                <div className="contact-detail-left">
                  <Phone size={18} className="contact-icon" />
                  <a href={`tel:${STUDIO_INFO.phoneRaw}`}>{STUDIO_INFO.phone}</a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(STUDIO_INFO.phoneRaw, 'phone')}
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Email with mailto and copy */}
              <div className="contact-detail-row">
                <div className="contact-detail-left">
                  <Mail size={18} className="contact-icon" />
                  <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(STUDIO_INFO.email, 'email')}
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta-btn"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Social links */}
              <div className="contact-social-row">
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href={STUDIO_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Working Form */}
          <div className="contact-form-col">
            <h2 className="contact-form-title">Send a Studio Inquiry</h2>
            <p className="contact-form-subtitle">
              Fill in your campaign details and we will respond with an estimate within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={42} color="#52c41a" />
                <h3 className="form-success-title">Inquiry Received</h3>
                <p className="form-success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been received. Sarvesh Chaudhari will review your details and reach out shortly.
                </p>
                <button
                  type="button"
                  className="form-reset-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      brand: '',
                      email: '',
                      phone: '',
                      service: 'Product Photography',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-brand">
                      Brand / Company
                    </label>
                    <input
                      id="contact-brand"
                      type="text"
                      name="brand"
                      placeholder="e.g. Plum / Dot & Key"
                      value={formData.brand}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="name@brand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Product Photography">Product Photography</option>
                    <option value="E-Commerce Product Shots">E-Commerce Product Shots</option>
                    <option value="Beauty, Skincare & Fashion Imagery">Beauty, Skincare & Fashion Imagery</option>
                    <option value="Concept Development & Styling">Concept Development & Styling</option>
                    <option value="Full Campaign Production">Full Campaign Production</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Project Brief / Notes *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell us about the products, quantity of deliverables, timeline, or creative moodboard..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending Brief...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
