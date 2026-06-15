import React from "react";
import { useCookieConsent } from "../../context/CookieConsentContext";

/**
 * Renders children only when the user has consented to the given category.
 * Use for embedded maps, chat widgets, etc.
 */
export default function ConsentGated({ category, children, fallback }) {
  const { preferences, hasConsented } = useCookieConsent();

  if (hasConsented && preferences[category]) {
    return children;
  }

  if (fallback) return fallback;

  return (
    <div
      className="consent-gated-placeholder"
      style={{
        padding: "2rem",
        background: "#f8fafc",
        borderRadius: "12px",
        border: "1px dashed #cbd5e1",
        textAlign: "center",
        color: "#64748b",
        fontSize: "0.9rem",
      }}
    >
      <p style={{ margin: "0 0 0.75rem" }}>
        This content uses {category} cookies. Enable them in Cookie Preferences to
        view the map.
      </p>
    </div>
  );
}
