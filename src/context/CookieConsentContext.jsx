import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ALL_ACCEPTED_PREFERENCES,
  DEFAULT_PREFERENCES,
  NECESSARY_ONLY_PREFERENCES,
} from "../cookies/cookieConfig";
import { loadStoredConsent, saveConsent } from "../cookies/cookieStorage";
import { applyConsentScripts } from "../cookies/scriptLoader";
import { syncConsentToServer } from "../cookies/consentApi";

const CookieConsentContext = createContext(null);

export function CookieConsentProvider({ children }) {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = loadStoredConsent();
    if (stored) {
      setPreferences(stored.preferences);
      setDraft(stored.preferences);
      setHasConsented(true);
      setShowBanner(false);
      applyConsentScripts(stored.preferences);
    } else {
      setShowBanner(true);
    }
  }, []);

  const persist = useCallback((prefs, action) => {
    const normalized = { ...prefs, necessary: true };
    saveConsent(normalized, action);
    setPreferences(normalized);
    setDraft(normalized);
    setHasConsented(true);
    setShowBanner(false);
    setShowModal(false);
    applyConsentScripts(normalized);
    syncConsentToServer(normalized, action);
  }, []);

  const acceptAll = useCallback(() => {
    persist(ALL_ACCEPTED_PREFERENCES, "accept_all");
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist(NECESSARY_ONLY_PREFERENCES, "reject_non_essential");
  }, [persist]);

  const savePreferences = useCallback(() => {
    persist(draft, "save_preferences");
  }, [persist, draft]);

  const openPreferences = useCallback(() => {
    setDraft(preferences);
    setShowBanner(false);
    setShowModal(true);
  }, [preferences]);

  const openCustomize = useCallback(() => {
    setDraft(hasConsented ? preferences : DEFAULT_PREFERENCES);
    setShowBanner(false);
    setShowModal(true);
  }, [preferences, hasConsented]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    if (!hasConsented) setShowBanner(true);
  }, [hasConsented]);

  const setDraftCategory = useCallback((id, enabled) => {
    if (id === "necessary") return;
    setDraft((prev) => ({ ...prev, [id]: enabled }));
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      draft,
      hasConsented,
      showBanner,
      showModal,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      openCustomize,
      closeModal,
      setDraftCategory,
    }),
    [
      preferences,
      draft,
      hasConsented,
      showBanner,
      showModal,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      openCustomize,
      closeModal,
      setDraftCategory,
    ]
  );

  useEffect(() => {
    const handler = () => openPreferences();
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, [openPreferences]);

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
