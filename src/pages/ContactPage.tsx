import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/Icons';
import { STUDIO_INFO } from '../data/portfolioData';
import { PageHeader, Button } from '../components/ui';
import './ContactPage.css';

interface ContactPageProps {
  onShowToast?: (message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onShowToast }) => {
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
  const [submissionChannel, setSubmissionChannel] = useState<'email' | 'whatsapp'>('email');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showWhatsAppPrompt, setShowWhatsAppPrompt] = useState(false);
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

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
    if (errorMessage) setErrorMessage(null);
  };

  // Build the complete structured WhatsApp inquiry message payload
  const buildWhatsAppMessage = () => {
    return (
      `*NEW STUDIO INQUIRY - TO THE INFINITY STUDIO*\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `*Client Name:* ${formData.name.trim()}\n` +
      (formData.brand.trim() ? `*Brand / Company:* ${formData.brand.trim()}\n` : '') +
      `*Service Required:* ${formData.service}\n` +
      (formData.email.trim() ? `*Email Address:* ${formData.email.trim()}\n` : '') +
      (formData.phone.trim() ? `*Phone Number:* ${formData.phone.trim()}\n` : '') +
      `\n*Project Brief & Requirements:*\n` +
      `${formData.message.trim()}\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent via To The Infinity Studio Website_`
    );
  };

  // Direct WhatsApp dispatch with full payload validation
  const handleWhatsAppDispatch = () => {
    if (!formData.name.trim()) {
      setShowWhatsAppPrompt(true);
      setIsFormHighlighted(true);
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('contact-name')?.focus();
      if (onShowToast) {
        onShowToast('Please enter your name to complete your WhatsApp inquiry');
      }
      setTimeout(() => setIsFormHighlighted(false), 2000);
      return;
    }

    if (!formData.message.trim()) {
      setShowWhatsAppPrompt(true);
      setIsFormHighlighted(true);
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('contact-message')?.focus();
      if (onShowToast) {
        onShowToast('Please add a short brief of your project for WhatsApp');
      }
      setTimeout(() => setIsFormHighlighted(false), 2000);
      return;
    }

    const payload = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919664568706?text=${encodeURIComponent(payload)}`;
    window.open(whatsappUrl, '_blank');

    setSubmissionChannel('whatsapp');
    setIsSubmitted(true);
    if (onShowToast) {
      onShowToast('Inquiry payload generated and sent to WhatsApp!');
    }
  };

  // Web3Forms real email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setIsSubmitting(false);
      setErrorMessage(
        'Web3Forms access key is not yet configured in .env. You can add your free key in .env or click "Send via WhatsApp" below to message Sarvesh instantly!'
      );
      if (onShowToast) {
        onShowToast('Web3Forms key missing in .env - use WhatsApp option');
      }
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          brand: formData.brand || 'Not provided',
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message,
          subject: `New Studio Inquiry from ${formData.name} (${formData.brand || 'Client'}) - To The Infinity Studio`,
          from_name: 'To The Infinity Studio Inquiry Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionChannel('email');
        setIsSubmitted(true);
        if (onShowToast) {
          onShowToast('Inquiry sent successfully to Sarvesh!');
        }
      } else {
        throw new Error(result.message || 'Web3Forms submission failed');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to send inquiry';
      setErrorMessage(`${message}. Please reach out via WhatsApp directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page" id="contact-page">
      <div className="container">
        {/* Reusable PageHeader UI Component */}
        <PageHeader
          title="CONTACT"
          tagline="TO THE ∞ STUDIO"
          description="Commercial & editorial photography inquiries, rate cards, and studio booking requests."
        />

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

              {/* Phone with click-to-call and copy button */}
              <div className="contact-detail-row">
                <div className="contact-detail-left">
                  <Phone size={18} className="contact-icon" />
                  <a href={`tel:${STUDIO_INFO.phoneRaw}`}>{STUDIO_INFO.phone}</a>
                </div>
                <Button
                  variant="copy"
                  size="sm"
                  icon={copiedField === 'phone' ? <Check size={12} /> : <Copy size={12} />}
                  onClick={() => handleCopy(STUDIO_INFO.phoneRaw, 'phone')}
                >
                  {copiedField === 'phone' ? 'Copied' : 'Copy'}
                </Button>
              </div>

              {/* Email with mailto and copy button */}
              <div className="contact-detail-row">
                <div className="contact-detail-left">
                  <Mail size={18} className="contact-icon" />
                  <a href={`mailto:${STUDIO_INFO.email}`}>{STUDIO_INFO.email}</a>
                </div>
                <Button
                  variant="copy"
                  size="sm"
                  icon={copiedField === 'email' ? <Check size={12} /> : <Copy size={12} />}
                  onClick={() => handleCopy(STUDIO_INFO.email, 'email')}
                >
                  {copiedField === 'email' ? 'Copied' : 'Copy'}
                </Button>
              </div>

              {/* Direct WhatsApp Action using reusable Button */}
              <Button
                variant="whatsapp"
                size="md"
                fullWidth
                icon={<MessageCircle size={18} />}
                onClick={handleWhatsAppDispatch}
              >
                Send Brief via WhatsApp
              </Button>

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

          {/* Right Column: Working Form (Web3Forms + WhatsApp) */}
          <div
            ref={formRef}
            className={`contact-form-col ${isFormHighlighted ? 'highlight-pulse' : ''}`}
          >
            <h2 className="contact-form-title">Send a Studio Inquiry</h2>
            <p className="contact-form-subtitle">
              Fill in your campaign details to send directly via Email (Web3Forms) or WhatsApp with the full payload.
            </p>

            {/* Prompt banner shown if WhatsApp button was clicked before filling details */}
            {showWhatsAppPrompt && !isSubmitted && (
              <div className="whatsapp-prompt-banner">
                <Sparkles size={18} />
                <span>
                  Please fill in your <strong>Name</strong> and <strong>Project Brief</strong> below so the entire inquiry payload is sent directly to WhatsApp without manual typing!
                </span>
              </div>
            )}

            {errorMessage && (
              <div className="form-error-box" style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <AlertCircle size={16} />
                  <strong>Notice</strong>
                </div>
                <div>{errorMessage}</div>
              </div>
            )}

            {isSubmitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={42} color="#52c41a" />
                <h3 className="form-success-title">
                  {submissionChannel === 'whatsapp' ? 'WhatsApp Payload Sent' : 'Inquiry Received'}
                </h3>
                <p className="form-success-desc">
                  {submissionChannel === 'whatsapp' ? (
                    <>
                      Your formatted inquiry for <strong>{formData.service}</strong> has been transferred to WhatsApp. Sarvesh Chaudhari will reply to your message shortly.
                    </>
                  ) : (
                    <>
                      Thank you, <strong>{formData.name}</strong>. Your project brief has been delivered via Web3Forms. Sarvesh Chaudhari will review your details and reach out shortly.
                    </>
                  )}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false);
                    setShowWhatsAppPrompt(false);
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
                </Button>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="contact-form">
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
                      placeholder="e.g. Rahul Sharma"
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
                      Phone / WhatsApp Number
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
                    Service Required *
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
                    Project Brief / Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Describe the products, number of SKUs, timeline, delivery requirements or moodboard references..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                {/* Dual Action Reusable Buttons: Email and WhatsApp */}
                <div className="form-actions-group">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    loading={isSubmitting}
                    icon={<Send size={16} />}
                  >
                    {isSubmitting ? 'Sending Email...' : 'Send via Email'}
                  </Button>

                  <Button
                    type="button"
                    variant="whatsapp"
                    size="md"
                    icon={<MessageCircle size={18} />}
                    onClick={handleWhatsAppDispatch}
                  >
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
