import React, { useEffect, useState, useCallback, useRef } from "react";
import "./GalleryPage.css";
import { API_BASE } from "../api";

const API = API_BASE;

/* ─────────────────────────────────────
   Skeleton Card
───────────────────────────────────── */
function SkeletonCard({ aspect = "4/3" }) {
  return (
    <div className="gp-skeleton-card">
      <div className="gp-skeleton-media" style={{ aspectRatio: aspect }} />
      <div className="gp-skeleton-line gp-skeleton-line--short" />
      <div className="gp-skeleton-line" />
    </div>
  );
}

/* ─────────────────────────────────────
   Image Lightbox Modal
───────────────────────────────────── */
function ImageLightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  return (
    <div className="gp-lightbox-overlay" onClick={onClose}>
      <div className="gp-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="gp-lb-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {hasPrev && (
          <button className="gp-lb-nav gp-lb-nav--prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <div className="gp-lb-img-wrap">
          <img src={item.url} alt={item.service || "Gallery"} className="gp-lb-img" />
        </div>

        {hasNext && (
          <button className="gp-lb-nav gp-lb-nav--next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {(item.service || item.description) && (
          <div className="gp-lb-caption">
            {item.service && <span className="gp-lb-tag">{item.service}</span>}
            {item.description && <p className="gp-lb-desc">{item.description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   Video Modal
───────────────────────────────────── */
function VideoModal({ item, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  if (!item) return null;
  return (
    <div className="gp-lightbox-overlay" onClick={onClose}>
      <div className="gp-video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="gp-lb-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <video ref={videoRef} src={item.url} controls playsInline className="gp-modal-video" />
        {(item.service || item.description) && (
          <div className="gp-lb-caption gp-lb-caption--video">
            {item.service && <span className="gp-lb-tag">{item.service}</span>}
            {item.description && <p className="gp-lb-desc">{item.description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   Image Card
───────────────────────────────────── */
function ImageCard({ item, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="gp-img-card" onClick={() => onClick(item)}>
      <div className="gp-img-card-inner">
        {!loaded && <div className="gp-card-shimmer" />}
        <img
          src={item.url}
          alt={item.service || "Gallery"}
          className={`gp-card-img ${loaded ? "gp-card-img--loaded" : ""}`}
          onLoad={() => setLoaded(true)}
          onError={(e) => { e.target.style.display = "none"; }}
          loading="lazy"
        />
        <div className="gp-img-overlay">
          <div className="gp-overlay-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
              <path d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" strokeLinecap="round" />
              <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" />
              <line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" />
            </svg>
          </div>
          {item.service && <span className="gp-overlay-tag">{item.service}</span>}
        </div>
      </div>
      {item.description && (
        <p className="gp-card-caption">{item.description}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────
   Video Card
───────────────────────────────────── */
function VideoCard({ item, onClick }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="gp-video-card"
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="gp-video-thumb-wrap">
        <video
          src={item.url + "#t=0.5"}
          className="gp-video-thumb"
          muted
          playsInline
          preload="metadata"
        />
        <div className={`gp-video-play-overlay ${hovering ? "gp-video-play-overlay--hover" : ""}`}>
          <div className="gp-play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <polygon points="6,3 20,12 6,21" />
            </svg>
          </div>
        </div>
        {item.service && <span className="gp-video-tag">{item.service}</span>}
        <span className="gp-video-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          Video
        </span>
      </div>
      {item.description && (
        <p className="gp-card-caption gp-card-caption--video">{item.description}</p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────
   Empty State
───────────────────────────────────── */
function EmptyState({ tab }) {
  return (
    <div className="gp-empty-state">
      <div className="gp-empty-icon">
        {tab === "images" ? (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="58" height="58">
            <rect x="4" y="10" width="56" height="44" rx="6" />
            <circle cx="22" cy="26" r="6" />
            <path d="M4 44l16-12 12 10 8-8 20 14" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="58" height="58">
            <rect x="2" y="12" width="42" height="34" rx="6" />
            <path d="M44 24l18-10v28L44 32" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <h3 className="gp-empty-title">No {tab === "images" ? "Images" : "Videos"} Yet</h3>
      <p className="gp-empty-desc">
        {tab === "images"
          ? "Our team is updating the gallery. Check back soon for stunning smile transformations!"
          : "Video content is on its way. Stay tuned for patient testimonials and procedure highlights!"}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────
   MAIN GALLERY PAGE
───────────────────────────────────── */
export default function GalleryPage() {
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [tab, setTab]           = useState("images");
  const [filter, setFilter]     = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoModal, setVideoModal]       = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/gallery/`);
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();

      let items = [];
      if (Array.isArray(data)) {
        items = data.map((r) => {
          const isImage = Boolean(r.image_url);
          const rawPath = r.image_url || r.video_url;
          
          const fullUrl = rawPath
            ? rawPath.startsWith("http")
              ? rawPath
              : `${API}${rawPath.startsWith("/") ? "" : "/"}${rawPath}`
            : null;

          return {
            id:          r.id,
            type:        isImage ? "image" : "video",
            url:         fullUrl,
            description: r.description || "",
            service:     r.service_name || null,
            created_at:  r.created_at,
          };
        });
      }

      setAllItems(items.filter((i) => i.url)); 
    } catch (e) {
      setError("Could not load gallery. Please try again later.");
      console.error("Gallery fetch error:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const imageItems = allItems.filter((r) => r.type === "image");
  const videoItems = allItems.filter((r) => r.type === "video");

  const services = ["All", ...new Set(
    allItems.map((r) => r.service).filter(Boolean)
  )];

  const filteredImages = filter === "All"
    ? imageItems
    : imageItems.filter((r) => r.service === filter);

  const filteredVideos = filter === "All"
    ? videoItems
    : videoItems.filter((r) => r.service === filter);

  const openLightbox = (item) => {
    const idx = filteredImages.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);

  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % filteredImages.length);

  const lightboxItem = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;
  const currentItems = tab === "images" ? filteredImages : filteredVideos;

  return (
    <div className="gp-root">

      {/* ── Hero (Waves elements completely removed) ── */}
      <section className="gpp-heroo gpp">
        <div className="gp-hero-bg" />
        <div className="gp-hero-content">
          <span className="gp-hero-eyebrow">Our Work</span>
          <h1 className="gp-hero-title">Patient Gallery</h1>
          <p className="gp-hero-sub">
            Real results from real patients — explore our collection of smile transformations.
          </p>
          {!loading && !error && (
            <div className="gp-hero-stats">
              <div className="gp-stat">
                <span className="gp-stat-num">{imageItems.length}</span>
                <span className="gp-stat-lbl">Photos</span>
              </div>
              <div className="gp-stat-divider" />
              <div className="gp-stat">
                <span className="gp-stat-num">{videoItems.length}</span>
                <span className="gp-stat-lbl">Videos</span>
              </div>
              <div className="gp-stat-divider" />
              <div className="gp-stat">
                <span className="gp-stat-num">{services.length - 1}</span>
                <span className="gp-stat-lbl">Services</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="gp-section">

        {error && (
          <div className="gp-error-banner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
            <button onClick={fetchAll} className="gp-retry-btn">Retry</button>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="gp-tabs-row">
          <div className="gp-tabs">
            <button
              className={`gp-tab ${tab === "images" ? "gp-tab--active" : ""}`}
              onClick={() => setTab("images")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Photos
              <span className="gp-tab-count">{imageItems.length}</span>
            </button>
            <button
              className={`gp-tab ${tab === "videos" ? "gp-tab--active" : ""}`}
              onClick={() => setTab("videos")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              Videos
              <span className="gp-tab-count">{videoItems.length}</span>
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        {!loading && services.length > 2 && (
          <div className="gp-filters">
            {services.map((s) => (
              <button
                key={s}
                className={`gp-filter-chip ${filter === s ? "gp-filter-chip--active" : ""}`}
                onClick={() => setFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="gp-grid-wrapper">
          {loading ? (
            <div className={`gp-grid ${tab === "images" ? "gp-grid--images" : "gp-grid--videos"}`}>
              {[...Array(8)].map((_, i) => (
                <SkeletonCard key={i} aspect={tab === "images" ? "4/3" : "16/9"} />
              ))}
            </div>
          ) : currentItems.length === 0 ? (
            <EmptyState tab={tab} />
          ) : tab === "images" ? (
            <div className="gp-grid gp-grid--images">
              {filteredImages.map((item, i) => (
                <div key={item.id} className="gp-grid-item" style={{ animationDelay: `${Math.min(i, 12) * 55}ms` }}>
                  <ImageCard item={item} onClick={openLightbox} />
                </div>
              ))}
            </div>
          ) : (
            <div className="gp-grid gp-grid--videos">
              {filteredVideos.map((item, i) => (
                <div key={item.id} className="gp-grid-item" style={{ animationDelay: `${Math.min(i, 12) * 55}ms` }}>
                  <VideoCard item={item} onClick={setVideoModal} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      {lightboxItem && (
        <ImageLightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={filteredImages.length > 1}
          hasNext={filteredImages.length > 1}
        />
      )}
      {videoModal && (
        <VideoModal item={videoModal} onClose={() => setVideoModal(null)} />
      )}
    </div>
  );
}

// /* ─────────────────────────────────────
//    Image Lightbox Modal
// ───────────────────────────────────── */
// function ImageLightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") onClose();
//       if (e.key === "ArrowLeft" && hasPrev) onPrev();
//       if (e.key === "ArrowRight" && hasNext) onNext();
//     };
//     window.addEventListener("keydown", handler);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", handler);
//       document.body.style.overflow = "";
//     };
//   }, [onClose, onPrev, onNext, hasPrev, hasNext]);

//   if (!item) return null;

//   return (
//     <div className="gp-lightbox-overlay" onClick={onClose}>
//       <div className="gp-lightbox-content" onClick={(e) => e.stopPropagation()}>
//         <button className="gp-lb-close" onClick={onClose} aria-label="Close">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>

//         {hasPrev && (
//           <button className="gp-lb-nav gp-lb-nav--prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <polyline points="15 18 9 12 15 6" />
//             </svg>
//           </button>
//         )}

//         <div className="gp-lb-img-wrap">
//           {/* url is already the full absolute URL from backend */}
//           <img src={item.url} alt={item.service || "Gallery"} className="gp-lb-img" />
//         </div>

//         {hasNext && (
//           <button className="gp-lb-nav gp-lb-nav--next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//               <polyline points="9 18 15 12 9 6" />
//             </svg>
//           </button>
//         )}

//         {(item.service || item.description) && (
//           <div className="gp-lb-caption">
//             {item.service && <span className="gp-lb-tag">{item.service}</span>}
//             {item.description && <p className="gp-lb-desc">{item.description}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────
//    Video Modal
// ───────────────────────────────────── */
// function VideoModal({ item, onClose }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handler = (e) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", handler);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", handler);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   useEffect(() => {
//     if (videoRef.current) videoRef.current.play().catch(() => {});
//   }, []);

//   if (!item) return null;
//   return (
//     <div className="gp-lightbox-overlay" onClick={onClose}>
//       <div className="gp-video-modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="gp-lb-close" onClick={onClose} aria-label="Close">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <line x1="18" y1="6" x2="6" y2="18" />
//             <line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//         {/* item.url is already the full absolute URL */}
//         <video ref={videoRef} src={item.url} controls playsInline className="gp-modal-video" />
//         {(item.service || item.description) && (
//           <div className="gp-lb-caption gp-lb-caption--video">
//             {item.service && <span className="gp-lb-tag">{item.service}</span>}
//             {item.description && <p className="gp-lb-desc">{item.description}</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────
//    Image Card
// ───────────────────────────────────── */
// function ImageCard({ item, onClick }) {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="gp-img-card" onClick={() => onClick(item)}>
//       <div className="gp-img-card-inner">
//         {!loaded && <div className="gp-card-shimmer" />}
//         <img
//           src={item.url}          /* full absolute URL from backend */
//           alt={item.service || "Gallery"}
//           className={`gp-card-img ${loaded ? "gp-card-img--loaded" : ""}`}
//           onLoad={() => setLoaded(true)}
//           onError={(e) => { e.target.style.display = "none"; }}
//           loading="lazy"
//         />
//         <div className="gp-img-overlay">
//           <div className="gp-overlay-icon">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
//               <path d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" strokeLinecap="round" />
//               <line x1="11" y1="8" x2="11" y2="14" strokeLinecap="round" />
//               <line x1="8" y1="11" x2="14" y2="11" strokeLinecap="round" />
//             </svg>
//           </div>
//           {item.service && <span className="gp-overlay-tag">{item.service}</span>}
//         </div>
//       </div>
//       {item.description && (
//         <p className="gp-card-caption">{item.description}</p>
//       )}
//     </div>
//   );
// }

// /* ─────────────────────────────────────
//    Video Card
// ───────────────────────────────────── */
// function VideoCard({ item, onClick }) {
//   const [hovering, setHovering] = useState(false);

//   return (
//     <div
//       className="gp-video-card"
//       onClick={() => onClick(item)}
//       onMouseEnter={() => setHovering(true)}
//       onMouseLeave={() => setHovering(false)}
//     >
//       <div className="gp-video-thumb-wrap">
//         {/* item.url is the full absolute video URL */}
//         <video
//           src={item.url + "#t=0.5"}   /* seek to 0.5s to get a thumbnail frame */
//           className="gp-video-thumb"
//           muted
//           playsInline
//           preload="metadata"
//         />
//         <div className={`gp-video-play-overlay ${hovering ? "gp-video-play-overlay--hover" : ""}`}>
//           <div className="gp-play-btn">
//             <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
//               <polygon points="6,3 20,12 6,21" />
//             </svg>
//           </div>
//         </div>
//         {item.service && <span className="gp-video-tag">{item.service}</span>}
//         <span className="gp-video-badge">
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11">
//             <polygon points="23 7 16 12 23 17 23 7" />
//             <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//           </svg>
//           Video
//         </span>
//       </div>
//       {item.description && (
//         <p className="gp-card-caption gp-card-caption--video">{item.description}</p>
//       )}
//     </div>
//   );
// }

// /* ─────────────────────────────────────
//    Empty State
// ───────────────────────────────────── */
// function EmptyState({ tab }) {
//   return (
//     <div className="gp-empty-state">
//       <div className="gp-empty-icon">
//         {tab === "images" ? (
//           <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="58" height="58">
//             <rect x="4" y="10" width="56" height="44" rx="6" />
//             <circle cx="22" cy="26" r="6" />
//             <path d="M4 44l16-12 12 10 8-8 20 14" strokeLinejoin="round" />
//           </svg>
//         ) : (
//           <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="58" height="58">
//             <rect x="2" y="12" width="42" height="34" rx="6" />
//             <path d="M44 24l18-10v28L44 32" strokeLinejoin="round" />
//           </svg>
//         )}
//       </div>
//       <h3 className="gp-empty-title">No {tab === "images" ? "Images" : "Videos"} Yet</h3>
//       <p className="gp-empty-desc">
//         {tab === "images"
//           ? "Our team is updating the gallery. Check back soon for stunning smile transformations!"
//           : "Video content is on its way. Stay tuned for patient testimonials and procedure highlights!"}
//       </p>
//     </div>
//   );
// }

// /* ─────────────────────────────────────
//    MAIN GALLERY PAGE
// ───────────────────────────────────── */
// export default function GalleryPage() {
//   const [allItems, setAllItems] = useState([]);   // all fetched records
//   const [loading, setLoading]   = useState(true);
//   const [error, setError]       = useState(null);
//   const [tab, setTab]           = useState("images");
//   const [filter, setFilter]     = useState("All");
//   const [lightboxIndex, setLightboxIndex] = useState(null);
//   const [videoModal, setVideoModal]       = useState(null);

//   /* ── Fetch all gallery items from the real API ── */
//   const fetchAll = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // Calls your original working list view
//       const res = await fetch(`${API}/gallery/`);
//       if (!res.ok) throw new Error(`Server error ${res.status}`);
//       const data = await res.json();

//       let items = [];
//       if (Array.isArray(data)) {
//         // Map your working Admin view structure ('image_url', 'video_url', 'service_name') 
//         // directly to the website fields safely
//         items = data.map((r) => {
//           const isImage = Boolean(r.image_url);
//           const rawPath = r.image_url || r.video_url;
          
//           // Ensure we build a solid absolute URL path for media rendering
//           const fullUrl = rawPath
//             ? rawPath.startsWith("http")
//               ? rawPath
//               : `${API}${rawPath.startsWith("/") ? "" : "/"}${rawPath}`
//             : null;

//           return {
//             id:          r.id,
//             type:        isImage ? "image" : "video",
//             url:         fullUrl, // This assigns the absolute link to the component's card renderer
//             description: r.description || "",
//             service:     r.service_name || null, // Maps 'service_name' to 'service' filter key
//             created_at:  r.created_at,
//           };
//         });
//       }

//       // Keep only valid items that have a generated media source URL
//       setAllItems(items.filter((i) => i.url)); 
//     } catch (e) {
//       setError("Could not load gallery. Please try again later.");
//       console.error("Gallery fetch error:", e);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => { fetchAll(); }, [fetchAll]);

//   /* ── Derived lists ── */
//   const imageItems = allItems.filter((r) => r.type === "image");
//   const videoItems = allItems.filter((r) => r.type === "video");

//   // Unique service names across ALL items for filter chips
//   const services = ["All", ...new Set(
//     allItems.map((r) => r.service).filter(Boolean)
//   )];

//   const filteredImages = filter === "All"
//     ? imageItems
//     : imageItems.filter((r) => r.service === filter);

//   const filteredVideos = filter === "All"
//     ? videoItems
//     : videoItems.filter((r) => r.service === filter);

//   /* ── Lightbox navigation ── */
//   const openLightbox = (item) => {
//     const idx = filteredImages.findIndex((i) => i.id === item.id);
//     setLightboxIndex(idx >= 0 ? idx : 0);
//   };

//   const closeLightbox = () => setLightboxIndex(null);

//   const prevImage = () =>
//     setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);

//   const nextImage = () =>
//     setLightboxIndex((i) => (i + 1) % filteredImages.length);

//   const lightboxItem = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

//   const currentItems = tab === "images" ? filteredImages : filteredVideos;

//   return (
//     <div className="gp-root">

//       {/* ── Hero ── */}
//       <section className="gpp-heroo gpp">
//         <div className="gp-hero-bg" />
//         <div className="gp-hero-content">
//           <span className="gp-hero-eyebrow">Our Work</span>
//           <h1 className="gp-hero-title">Patient Gallery</h1>
//           <p className="gp-hero-sub">
//             Real results from real patients — explore our collection of smile transformations.
//           </p>
//           {!loading && !error && (
//             <div className="gp-hero-stats">
//               <div className="gp-stat">
//                 <span className="gp-stat-num">{imageItems.length}</span>
//                 <span className="gp-stat-lbl">Photos</span>
//               </div>
//               <div className="gp-stat-divider" />
//               <div className="gp-stat">
//                 <span className="gp-stat-num">{videoItems.length}</span>
//                 <span className="gp-stat-lbl">Videos</span>
//               </div>
//               <div className="gp-stat-divider" />
//               <div className="gp-stat">
//                 <span className="gp-stat-num">{services.length - 1}</span>
//                 <span className="gp-stat-lbl">Services</span>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="gp-hero-wave">
//           <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
//           </svg>
//         </div>
//       </section>

//       {/* ── Gallery Section ── */}
//       <section className="gp-section">

//         {/* Error banner */}
//         {error && (
//           <div className="gp-error-banner">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
//               <circle cx="12" cy="12" r="10" />
//               <line x1="12" y1="8" x2="12" y2="12" />
//               <line x1="12" y1="16" x2="12.01" y2="16" />
//             </svg>
//             {error}
//             <button onClick={fetchAll} className="gp-retry-btn">Retry</button>
//           </div>
//         )}

//         {/* Tab Switcher */}
//         <div className="gp-tabs-row">
//           <div className="gp-tabs">
//             <button
//               className={`gp-tab ${tab === "images" ? "gp-tab--active" : ""}`}
//               onClick={() => setTab("images")}
//             >
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
//                 <rect x="3" y="3" width="18" height="18" rx="3" />
//                 <circle cx="8.5" cy="8.5" r="1.5" />
//                 <polyline points="21 15 16 10 5 21" />
//               </svg>
//               Photos
//               <span className="gp-tab-count">{imageItems.length}</span>
//             </button>
//             <button
//               className={`gp-tab ${tab === "videos" ? "gp-tab--active" : ""}`}
//               onClick={() => setTab("videos")}
//             >
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
//                 <polygon points="23 7 16 12 23 17 23 7" />
//                 <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//               </svg>
//               Videos
//               <span className="gp-tab-count">{videoItems.length}</span>
//             </button>
//           </div>
//         </div>

//         {/* Filter Chips — only show when there are multiple services */}
//         {!loading && services.length > 2 && (
//           <div className="gp-filters">
//             {services.map((s) => (
//               <button
//                 key={s}
//                 className={`gp-filter-chip ${filter === s ? "gp-filter-chip--active" : ""}`}
//                 onClick={() => setFilter(s)}
//               >
//                 {s}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Grid */}
//         <div className="gp-grid-wrapper">
//           {loading ? (
//             <div className={`gp-grid ${tab === "images" ? "gp-grid--images" : "gp-grid--videos"}`}>
//               {[...Array(8)].map((_, i) => (
//                 <SkeletonCard key={i} aspect={tab === "images" ? "4/3" : "16/9"} />
//               ))}
//             </div>
//           ) : currentItems.length === 0 ? (
//             <EmptyState tab={tab} />
//           ) : tab === "images" ? (
//             <div className="gp-grid gp-grid--images">
//               {filteredImages.map((item, i) => (
//                 <div key={item.id} className="gp-grid-item" style={{ animationDelay: `${Math.min(i, 12) * 55}ms` }}>
//                   <ImageCard item={item} onClick={openLightbox} />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="gp-grid gp-grid--videos">
//               {filteredVideos.map((item, i) => (
//                 <div key={item.id} className="gp-grid-item" style={{ animationDelay: `${Math.min(i, 12) * 55}ms` }}>
//                   <VideoCard item={item} onClick={setVideoModal} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* ── Modals ── */}
//       {lightboxItem && (
//         <ImageLightbox
//           item={lightboxItem}
//           onClose={closeLightbox}
//           onPrev={prevImage}
//           onNext={nextImage}
//           hasPrev={filteredImages.length > 1}
//           hasNext={filteredImages.length > 1}
//         />
//       )}
//       {videoModal && (
//         <VideoModal item={videoModal} onClose={() => setVideoModal(null)} />
//       )}
//     </div>
//   );
// }