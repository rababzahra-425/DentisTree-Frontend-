import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  VISITOR_ID_KEY,
  DEFAULT_PREFERENCES,
} from "./cookieConfig";

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function getVisitorId() {
  try {
    let id = localStorage.getItem(VISITOR_ID_KEY);
    if (!id) {
      id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(VISITOR_ID_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

export function loadStoredConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const data = safeParse(raw);
    if (!data || data.version !== CONSENT_VERSION) return null;
    if (!data.preferences || !data.timestamp) return null;
    return {
      preferences: { ...DEFAULT_PREFERENCES, ...data.preferences, necessary: true },
      timestamp: data.timestamp,
      action: data.action || "save_preferences",
    };
  } catch {
    return null;
  }
}

export function saveConsent(preferences, action) {
  const payload = {
    version: CONSENT_VERSION,
    preferences: { ...preferences, necessary: true },
    timestamp: new Date().toISOString(),
    action,
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* private browsing */
  }
  return payload;
}

export function clearStoredConsent() {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
