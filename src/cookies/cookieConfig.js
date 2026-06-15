export const CONSENT_STORAGE_KEY = "dentistree_cookie_consent";
export const CONSENT_VERSION = "1.0";
export const VISITOR_ID_KEY = "dentistree_visitor_id";

export const COOKIE_CATEGORIES = [
  {
    id: "necessary",
    title: "Necessary Cookies",
    description:
      "Required for the website to work. They enable security, session management, and appointment booking. These cannot be turned off.",
    required: true,
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    description:
      "Help us understand how visitors use our site (pages viewed, time on site) so we can improve your experience. Data is aggregated and anonymous where possible.",
    required: false,
  },
  {
    id: "functional",
    title: "Functional Cookies",
    description:
      "Remember your preferences such as language or form inputs, and enable enhanced features like embedded maps or chat support.",
    required: false,
  },
  {
    id: "marketing",
    title: "Marketing Cookies",
    description:
      "Used to deliver relevant offers and measure the effectiveness of our campaigns on platforms such as social media.",
    required: false,
  },
];

export const DEFAULT_PREFERENCES = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

export const ALL_ACCEPTED_PREFERENCES = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: true,
};

export const NECESSARY_ONLY_PREFERENCES = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};
