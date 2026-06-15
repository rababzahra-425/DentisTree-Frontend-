import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import CookiePreferencesLink from "../components/cookies/CookiePreferencesLink";
import "./LegalPage.css";

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Lato:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <header className="legal-hero">
        <h1>Privacy Policy</h1>
        <p>
          How DentisTree Dental Clinic collects, uses, and protects your personal
          information when you use our website and services.
        </p>
      </header>
      <article className="legal-content">
        <Link to="/" className="legal-back">
          ← Back to home
        </Link>
        <p>
          <strong>Last updated:</strong> May 2026
        </p>

        <h2>1. Who we are</h2>
        <p>
          DentisTree Dental Clinic (“we”, “us”) operates this website to provide
          information about our dental services and to allow you to book
          appointments. Our clinic is located at Main Market Farid Town, Sahiwal,
          Pakistan. For privacy questions, contact us at dentistree@gmail.com or
          +92 321 7450249.
        </p>

        <h2>2. Information we collect</h2>
        <ul>
          <li>
            <strong>Information you provide:</strong> name, phone number, email,
            appointment details, and messages submitted through contact or
            booking forms.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, browser type, device
            information, and pages visited — only when you consent to analytics
            cookies.
          </li>
          <li>
            <strong>Cookies:</strong> as described in our{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </li>
        </ul>

        <h2>3. How we use your information</h2>
        <ul>
          <li>To process and manage appointment requests</li>
          <li>To respond to enquiries and provide patient care</li>
          <li>To improve our website and services (with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>4. Legal basis (GDPR-style)</h2>
        <p>
          We process data based on: (a) your consent for optional cookies and
          marketing; (b) performance of a contract when you book care; (c) our
          legitimate interests in operating a safe, effective clinic website; and
          (d) legal requirements where applicable.
        </p>

        <h2>5. Sharing your data</h2>
        <p>
          We do not sell your personal data. We may share information with trusted
          service providers (e.g. hosting, appointment systems) only as needed to
          run our services, and only under appropriate safeguards.
        </p>

        <h2>6. Retention</h2>
        <p>
          We keep appointment and patient records as long as required for clinical
          and legal purposes. Cookie consent logs are retained for compliance
          auditing for up to 24 months unless a longer period is required by law.
        </p>

        <h2>7. Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          delete, or restrict processing of your data, and to withdraw consent
          for optional cookies at any time via{" "}
          <CookiePreferencesLink className="legal-inline-cookie-link" /> in the
          footer.
        </p>

        <h2>8. Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your
          information. No method of transmission over the internet is 100% secure.
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          reflected on this page with an updated date.
        </p>
      </article>
    </div>
  );
}
