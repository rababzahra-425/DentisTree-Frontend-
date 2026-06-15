/** Public website API base — override with VITE_API_BASE in .env */
export const API_BASE =
  import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";
