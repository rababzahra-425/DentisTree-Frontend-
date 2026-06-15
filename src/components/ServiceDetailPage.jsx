import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';
import './ServiceDetailPage.css';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('aos-animate');
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const related = getRelatedServices(service.slug, 3);

  return (
    <div className="sdp-root">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      <style>{`
        [data-aos] { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
        [data-aos="fade-up"] { transform: translateY(30px); }
        [data-aos].aos-animate { opacity: 1; transform: none; }
      `}</style>

      <header className="sdp-hero">
        <div
          className="sdp-hero-bg"
          style={{ backgroundImage: `url(${service.image})` }}
          aria-hidden="true"
        />
        <div className="sdp-hero-overlay" aria-hidden="true" />
        <div className="sdp-hero-content">
          <nav className="sdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/#services">Services</Link>
            <span className="sep">/</span>
            <span>{service.title}</span>
          </nav>
          <h1 className="sdp-hero-title" data-aos="fade-up">{service.title}</h1>
          <p className="sdp-hero-sub" data-aos="fade-up">{service.description}</p>
        </div>
      </header>

      <div className="sdp-body">
        <div className="sdp-grid">
          <main>
            <section data-aos="fade-up">
              <h2 className="sdp-section-title">Overview</h2>
              <p className="sdp-overview">{service.overview}</p>
            </section>

            <section data-aos="fade-up">
              <h2 className="sdp-section-title">Key Benefits</h2>
              <ul className="sdp-list">
                {service.benefits.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check-circle-fill" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section data-aos="fade-up">
              <h2 className="sdp-section-title">Treatment Process</h2>
              <ol className="sdp-steps">
                {service.procedure.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section data-aos="fade-up">
              <h2 className="sdp-section-title">Who Is It For?</h2>
              <p className="sdp-overview" style={{ marginBottom: 0 }}>{service.idealFor}</p>
            </section>
          </main>

          <aside className="sdp-sidebar" data-aos="fade-up">
            <div className="sdp-info-card">
              <div className="sdp-info-row">
                <i className="bi bi-clock-history" />
                <div>
                  <strong>Duration</strong>
                  <span>{service.duration}</span>
                </div>
              </div>
              <div className="sdp-info-row">
                <i className="bi bi-heart-pulse" />
                <div>
                  <strong>Recovery</strong>
                  <span>{service.recovery}</span>
                </div>
              </div>
            </div>
            <Link to="/book-appointment" className="sdp-cta-btn sdp-cta-primary">
              Book Appointment
            </Link>
            <a
              href="https://wa.me/923217450249"
              className="sdp-cta-btn sdp-cta-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp me-2" />
              WhatsApp Us
            </a>
          </aside>
        </div>
      </div>

      <section className="sdp-related">
        <div className="sdp-related-inner">
          <h2 data-aos="fade-up">Other Services</h2>
          <div className="sdp-related-grid">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="sdp-related-card"
                data-aos="fade-up"
              >
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
