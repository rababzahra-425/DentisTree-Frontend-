import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { COOKIE_CATEGORIES } from "../../cookies/cookieConfig";
import { useCookieConsent } from "../../context/CookieConsentContext";
import "./CookieConsent.css";

export default function CookiePreferencesModal() {
  const {
    showModal,
    draft,
    setDraftCategory,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    closeModal,
  } = useCookieConsent();

  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!showModal) return;
    const prev = document.activeElement;
    closeBtnRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (prev && typeof prev.focus === "function") prev.focus();
    };
  }, [showModal, closeModal]);

  if (!showModal) return null;

  return (
    <div
      className="cookie-modal-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        className="cookie-modal"
        role="dialog"
        aria-labelledby="cookie-modal-title"
        aria-modal="true"
      >
        <header className="cookie-modal__header">
          <h2 id="cookie-modal-title">Cookie preferences</h2>
          <p>
            Manage how DentisTree uses cookies. Necessary cookies are always on
            because the site cannot work without them.
          </p>
        </header>

        <div className="cookie-modal__body">
          {COOKIE_CATEGORIES.map((cat) => {
            const locked = cat.required;
            const checked = locked ? true : Boolean(draft[cat.id]);
            return (
              <article key={cat.id} className="cookie-category">
                <div className="cookie-category__row">
                  <div>
                    <h3 className="cookie-category__title">
                      {cat.title}
                      {locked && (
                        <span className="cookie-category__badge">
                          {" "}
                          · Always active
                        </span>
                      )}
                    </h3>
                    <p className="cookie-category__desc">{cat.description}</p>
                  </div>
                  <label className="cookie-toggle" htmlFor={`toggle-${cat.id}`}>
                    <input
                      id={`toggle-${cat.id}`}
                      type="checkbox"
                      checked={checked}
                      disabled={locked}
                      onChange={(e) => setDraftCategory(cat.id, e.target.checked)}
                      aria-label={`${cat.title}${locked ? ", always enabled" : ""}`}
                    />
                    <span className="cookie-toggle__slider" aria-hidden="true" />
                  </label>
                </div>
              </article>
            );
          })}
          <p className="cookie-category__desc" style={{ marginTop: "0.75rem" }}>
            Read our{" "}
            <Link to="/cookie-policy">Cookie Policy</Link> and{" "}
            <Link to="/privacy-policy">Privacy Policy</Link> for full details on
            what we collect and why.
          </p>
        </div>

        <footer className="cookie-modal__footer">
          <button
            ref={closeBtnRef}
            type="button"
            className="cookie-btn cookie-btn--secondary"
            onClick={closeModal}
          >
            Cancel
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
            className="cookie-btn cookie-btn--primary"
            onClick={savePreferences}
          >
            Save Preferences
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--primary"
            onClick={acceptAll}
          >
            Accept All
          </button>
        </footer>
      </div>
    </div>
  );
}
