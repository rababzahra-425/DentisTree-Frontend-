import React, { useEffect, useRef, useState } from 'react';
import './AdminGallery.css';
import { API_BASE } from '../api';

const API_BASE_URL = API_BASE;

// ─── helpers ────────────────────────────────────────────
const isImage = (type) => type?.startsWith('image/');
const isVideo = (type) => type?.startsWith('video/');
const fmtSize  = (b) => b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : `${(b / (1024 * 1024)).toFixed(1)} MB`;

const ALLOWED_TYPES = [
  'image/jpeg', 'image/png', 'image/webp', 'image/gif',
  'video/mp4', 'video/webm', 'video/ogg', 'video/quicktime',
];
const MAX_IMAGE = 10 * 1024 * 1024;
const MAX_VIDEO = 100 * 1024 * 1024;

// ─── component ─────────────────────────────────────────
export default function AdminGallery() {
  const [gallery,     setGallery]     = useState([]);
  const [services,    setServices]    = useState([]);
  const [filter,      setFilter]      = useState('all');
  const [page,        setPage]        = useState(1);
  const [totalPages,  setTotalPages]  = useState(1);
  const [total,       setTotal]       = useState(0);
  const [loading,     setLoading]     = useState(false);
  const [uploading,   setUploading]   = useState(false);
  const [dragOver,    setDragOver]    = useState(false);
  const [preview,     setPreview]     = useState(null);   // lightbox
  const [toast,       setToast]       = useState(null);

  // upload form state
  const [queue,       setQueue]       = useState([]);     // {file, preview, error}
  const [serviceId,   setServiceId]   = useState('');
  const [description, setDescription] = useState('');
  const [uploadPanel, setUploadPanel] = useState(false);

  const fileRef = useRef();

  // ── fetch gallery ────────────────────────────────────
  const fetchGallery = async (pg = page, ft = filter) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/gallery/?type=${ft}&page=${pg}&limit=12`);
      const data = await res.json();
      setGallery(data.results || []);
      setTotalPages(data.total_pages || 1);
      setTotal(data.total || 0);
    } catch {
      showToast('Failed to load gallery.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // ── fetch services for dropdown ──────────────────────
  const fetchServices = async () => {
    try {
      const res  = await fetch(`${API_BASE_URL}/services/`);
      const data = await res.json();
      setServices(data);
    } catch { /* optional */ }
  };

  useEffect(() => { fetchGallery(1, filter); fetchServices(); }, []);

  // ── filter / page change ─────────────────────────────
  const handleFilter = (f) => {
    setFilter(f);
    setPage(1);
    fetchGallery(1, f);
  };

  const handlePage = (p) => {
    setPage(p);
    fetchGallery(p, filter);
  };

  // ── toast ─────────────────────────────────────────────
  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ── file queue logic ─────────────────────────────────
  const validateFile = (f) => {
    if (!ALLOWED_TYPES.includes(f.type)) return 'Unsupported type. Use JPG/PNG/WebP/GIF/MP4/WebM.';
    if (isImage(f.type) && f.size > MAX_IMAGE) return 'Image must be under 10 MB.';
    if (isVideo(f.type) && f.size > MAX_VIDEO) return 'Video must be under 100 MB.';
    return null;
  };

  const addToQueue = (files) => {
    const entries = Array.from(files).map((file) => ({
      id:      crypto.randomUUID(),
      file,
      preview: isImage(file.type) ? URL.createObjectURL(file) : null,
      error:   validateFile(file),
    }));
    setQueue((q) => [...q, ...entries]);
  };

  const removeFromQueue = (id) => {
    setQueue((q) => {
      const item = q.find((x) => x.id === id);
      if (item?.preview) URL.revokeObjectURL(item.preview);
      return q.filter((x) => x.id !== id);
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    addToQueue(e.dataTransfer.files);
  };

  // ── upload ───────────────────────────────────────────
  const handleUpload = async () => {
    const valid = queue.filter((x) => !x.error);
    if (!valid.length) { showToast('No valid files to upload.', 'error'); return; }

    setUploading(true);
    const fd = new FormData();
    valid.forEach((x) => fd.append('files[]', x.file));
    if (serviceId)   fd.append('service_id', serviceId);
    if (description) fd.append('description', description);

    try {
      const res  = await fetch(`${API_BASE_URL}/gallery/upload/`, { method: 'POST', body: fd });
      const data = await res.json();
      if (data.created?.length) {
        showToast(`✓ ${data.created.length} file(s) uploaded successfully!`);
        setQueue([]);
        setDescription('');
        setServiceId('');
        setUploadPanel(false);
        fetchGallery(1, filter);
        setPage(1);
      }
      if (data.errors?.length) {
        showToast(data.errors.join(' | '), 'error');
      }
    } catch {
      showToast('Upload failed. Check your connection.', 'error');
    } finally {
      setUploading(false);
    }
  };

  // ── delete ───────────────────────────────────────────
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this media item permanently?')) return;
    try {
      await fetch(`${API_BASE_URL}/gallery/delete/${id}/`, { method: 'DELETE' });
      showToast('Item deleted.');
      fetchGallery(page, filter);
    } catch {
      showToast('Delete failed.', 'error');
    }
  };

  // ─────────────────────────────────────────────────────
  return (
    <div className="ag-root">

      {/* ── Toast ──────────────────────────────────────── */}
      {toast && (
        <div className={`ag-toast ag-toast--${toast.type}`}>
          {toast.type === 'success' ? '✓' : '✕'} {toast.msg}
        </div>
      )}

      {/* ── Header ─────────────────────────────────────── */}
      <div className="ag-header">
        <div>
          <h2 className="ag-title">Gallery Management</h2>
          <p className="ag-subtitle">{total} media item{total !== 1 ? 's' : ''} in library</p>
        </div>
        <button className="ag-btn-upload" onClick={() => setUploadPanel(true)}>
          <span>+</span> Upload Media
        </button>
      </div>

      {/* ── Filter Tabs ────────────────────────────────── */}
      <div className="ag-tabs">
        {['all', 'image', 'video'].map((t) => (
          <button
            key={t}
            className={`ag-tab ${filter === t ? 'active' : ''}`}
            onClick={() => handleFilter(t)}
          >
            {t === 'all' ? '⊞ All' : t === 'image' ? '🖼 Images' : '🎬 Videos'}
          </button>
        ))}
      </div>

      {/* ── Gallery Grid ───────────────────────────────── */}
      {loading ? (
        <div className="ag-loading">
          <div className="ag-spinner" />
          <p>Loading gallery...</p>
        </div>
      ) : gallery.length === 0 ? (
        <div className="ag-empty">
          <div className="ag-empty-icon">🗂️</div>
          <h3>No media found</h3>
          <p>Upload images or videos to get started.</p>
        </div>
      ) : (
        <div className="ag-grid">
          {gallery.map((item) => (
            <div key={item.id} className="ag-card">
              {/* Thumbnail */}
              <div className="ag-thumb" onClick={() => setPreview(item)}>
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.description || 'Gallery image'} loading="lazy" />
                ) : (
                  <div className="ag-video-thumb">
                    <video src={item.url} preload="metadata" muted />
                    <div className="ag-play-badge">▶</div>
                  </div>
                )}
                <div className="ag-overlay">
                  <span className="ag-view-btn">👁 View</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="ag-card-footer">
                <div className="ag-card-meta">
                  <span className={`ag-type-badge ${item.type}`}>
                    {item.type === 'image' ? '🖼' : '🎬'} {item.type}
                  </span>
                  {item.service && <span className="ag-service-tag">{item.service}</span>}
                </div>
                {item.description && (
                  <p className="ag-card-desc">{item.description}</p>
                )}
                <div className="ag-card-actions">
                  <span className="ag-card-date">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                  <button
                    className="ag-btn-delete"
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                  >
                    🗑
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Pagination ─────────────────────────────────── */}
      {totalPages > 1 && (
        <div className="ag-pagination">
          <button disabled={page === 1} onClick={() => handlePage(page - 1)}>‹ Prev</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={page === p ? 'active' : ''}
              onClick={() => handlePage(p)}
            >
              {p}
            </button>
          ))}
          <button disabled={page === totalPages} onClick={() => handlePage(page + 1)}>Next ›</button>
        </div>
      )}

      {/* ── Upload Panel (Slide-in) ─────────────────────── */}
      {uploadPanel && (
        <div className="ag-panel-overlay" onClick={() => setUploadPanel(false)}>
          <div className="ag-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ag-panel-header">
              <h3>Upload Media</h3>
              <button className="ag-panel-close" onClick={() => setUploadPanel(false)}>✕</button>
            </div>

            {/* Drop Zone */}
            <div
              className={`ag-dropzone ${dragOver ? 'over' : ''}`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current.click()}
            >
              <div className="ag-dz-icon">☁️</div>
              <p className="ag-dz-title">Drag & drop files here</p>
              <p className="ag-dz-sub">Images (JPG, PNG, WebP, GIF up to 10 MB) · Videos (MP4, WebM up to 100 MB)</p>
              <button className="ag-dz-btn" type="button">Browse Files</button>
              <input
                ref={fileRef}
                type="file"
                multiple
                accept={ALLOWED_TYPES.join(',')}
                style={{ display: 'none' }}
                onChange={(e) => addToQueue(e.target.files)}
              />
            </div>

            {/* Queue Preview */}
            {queue.length > 0 && (
              <div className="ag-queue">
                {queue.map((q) => (
                  <div key={q.id} className={`ag-queue-item ${q.error ? 'has-error' : ''}`}>
                    {q.preview ? (
                      <img src={q.preview} className="ag-qi-thumb" alt="" />
                    ) : (
                      <div className="ag-qi-thumb ag-qi-video">🎬</div>
                    )}
                    <div className="ag-qi-info">
                      <p className="ag-qi-name">{q.file.name}</p>
                      <p className="ag-qi-size">{fmtSize(q.file.size)}</p>
                      {q.error && <p className="ag-qi-error">⚠ {q.error}</p>}
                    </div>
                    <button className="ag-qi-remove" onClick={() => removeFromQueue(q.id)}>✕</button>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Fields */}
            <div className="ag-panel-fields">
              <div className="ag-field">
                <label>Service (optional)</label>
                <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
                  <option value="">— No service —</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="ag-field">
                <label>Description (optional)</label>
                <input
                  type="text"
                  placeholder="Caption or description…"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="ag-panel-footer">
              <button className="ag-btn-cancel" onClick={() => setUploadPanel(false)}>Cancel</button>
              <button
                className="ag-btn-submit"
                onClick={handleUpload}
                disabled={uploading || !queue.some((q) => !q.error)}
              >
                {uploading ? 'Uploading…' : `Upload ${queue.filter((q) => !q.error).length} File(s)`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ────────────────────────────────────── */}
      {preview && (
        <div className="ag-lightbox" onClick={() => setPreview(null)}>
          <button className="ag-lb-close">✕</button>
          <div className="ag-lb-content" onClick={(e) => e.stopPropagation()}>
            {preview.type === 'image' ? (
              <img src={preview.url} alt={preview.description || ''} />
            ) : (
              <video src={preview.url} controls autoPlay />
            )}
            {preview.description && (
              <p className="ag-lb-caption">{preview.description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}