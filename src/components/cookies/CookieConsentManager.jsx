import React from "react";
import CookieBanner from "./CookieBanner";
import CookiePreferencesModal from "./CookiePreferencesModal";

/** Renders banner + preferences modal site-wide. */
export default function CookieConsentManager() {
  return (
    <>
      <CookieBanner />
      <CookiePreferencesModal />
    </>
  );
}
