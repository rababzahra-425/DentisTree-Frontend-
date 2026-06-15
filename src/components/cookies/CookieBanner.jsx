import React from "react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "../../context/CookieConsentContext";
import "./CookieConsent.css";

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectNonEssential, openCustomize } =
    useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      className="cookie-consent-banner"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
    >
      <div className="cookie-consent-banner__inner">
        <h2 id="cookie-banner-title" className="cookie-consent-banner__title">
          We value your privacy
        </h2>
        <p id="cookie-banner-desc" className="cookie-consent-banner__text">
          DentisTree uses cookies to run the website securely, remember your
          preferences, and understand how our pages are used. You can accept all
          cookies, reject non-essential ones, or customize your choices. We only
          load optional tracking after you give consent.
        </p>
        <nav className="cookie-consent-links" aria-label="Legal policies">
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
        <div className="cookie-consent-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn--primary"
            onClick={acceptAll}
          >
            Accept All
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--secondary"
            onClick={rejectNonEssential}
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--ghost"
            onClick={openCustomize}
          >
            Customize Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
