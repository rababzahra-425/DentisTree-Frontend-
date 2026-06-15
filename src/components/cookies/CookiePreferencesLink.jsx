import React from "react";
import { useCookieConsent } from "../../context/CookieConsentContext";

/** Footer / inline control to reopen cookie settings. */
export default function CookiePreferencesLink({ className = "" }) {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      className={className || "cookie-footer-link"}
      onClick={openPreferences}
      aria-label="Open cookie preferences"
    >
      Cookie Preferences
    </button>
  );
}
