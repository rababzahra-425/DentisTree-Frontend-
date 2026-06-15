/**
 * Loads third-party scripts only after the user grants consent.
 * Add new trackers here — never load them from index.html directly.
 */

const loaded = { analytics: false, functional: false, marketing: false };

function injectScript(id, src, async = true) {
  if (document.getElementById(id)) return;
  const el = document.createElement("script");
  el.id = id;
  el.src = src;
  el.async = async;
  document.head.appendChild(el);
}

function loadGoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId || loaded.analytics) return;

  injectScript("dt-ga-lib", `https://www.googletagmanager.com/gtag/js?id=${measurementId}`);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, { anonymize_ip: true });
  loaded.analytics = true;
}

function loadFunctionalScripts() {
  if (loaded.functional) return;
  // Reserved for chat widgets, preference storage helpers, etc.
  loaded.functional = true;
}

function loadMarketingScripts() {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (!pixelId || loaded.marketing) return;

  if (!window.fbq) {
    const n = (window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!window._fbq) window._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    injectScript("dt-fb-pixel", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
  }
  loaded.marketing = true;
}

export function applyConsentScripts(preferences) {
  if (!preferences) return;

  if (preferences.analytics) {
    loadGoogleAnalytics();
  }

  if (preferences.functional) {
    loadFunctionalScripts();
  }

  if (preferences.marketing) {
    loadMarketingScripts();
  }
}

export function resetLoadedScripts() {
  loaded.analytics = false;
  loaded.functional = false;
  loaded.marketing = false;
}
