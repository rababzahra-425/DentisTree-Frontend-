import { API_BASE } from "../api";
import { getVisitorId } from "./cookieStorage";

/** Optional audit log on the server (non-blocking). */
export async function syncConsentToServer(preferences, action) {
  const visitorId = getVisitorId();
  if (!visitorId) return;

  try {
    await fetch(`${API_BASE}/cookie-consent/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitor_id: visitorId,
        preferences,
        action,
        consent_version: "1.0",
      }),
    });
  } catch {
    /* consent works offline via localStorage */
  }
}
