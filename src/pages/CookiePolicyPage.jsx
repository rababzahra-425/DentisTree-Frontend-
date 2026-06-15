import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { COOKIE_CATEGORIES } from "../cookies/cookieConfig";
import "./LegalPage.css";

export default function CookiePolicyPage() {
  return (
    <div className="legal-page">
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Lato:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <header className="legal-hero">
        <h1>Cookie Policy</h1>
        <p>
          This policy explains what cookies are, which types DentisTree uses, and
          how you can control them.
        </p>
      </header>
      <article className="legal-content">
        <Link to="/" className="legal-back">
          ← Back to home
        </Link>
        <p>
          <strong>Last updated:</strong> May 2026
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help the site remember you, keep you signed in, and
          understand how the site is used.
        </p>

        <h2>How we use cookies</h2>
        <p>
          We classify cookies into the categories below. Optional categories are
          only activated after you give consent through our cookie banner or
          preference centre.
        </p>

        {COOKIE_CATEGORIES.map((cat) => (
          <div key={cat.id}>
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
            {cat.required && (
              <p>
                <em>These cookies cannot be disabled because the website depends on them.</em>
              </p>
            )}
          </div>
        ))}

        <h2>Managing your preferences</h2>
        <p>
          You can change your choices at any time using{" "}
          <strong>Cookie Preferences</strong> in the website footer. Clearing
          your browser cookies will reset your choices and show the consent banner
          again on your next visit.
        </p>

        <h2>Third-party cookies</h2>
        <p>
          If you enable Analytics or Marketing cookies, third parties such as
          Google or Meta may set their own cookies subject to their privacy
          policies. We only load these scripts after you consent.
        </p>

        <h2>More information</h2>
        <p>
          See our <Link to="/privacy-policy">Privacy Policy</Link> for how we
          handle personal data overall.
        </p>
      </article>
    </div>
  );
}
