import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedService) return;
    const handler = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [selectedService]);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  const goToDetail = () => {
    if (selectedService) {
      navigate(`/services/${selectedService.slug}`);
      closeModal();
    }
  };

  return (
    <>
      <section
        id="services"
        className="services-section-padding"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container text-center">
          <h2 className="services-main-title">
            Best Dental Services In Your Location
          </h2>

          <div className="row g-4 justify-content-center">
            {servicesData.map((service) => (
              <div className="col-12 col-md-6 col-lg-3" key={service.id}>
                <div
                  role="button"
                  tabIndex={0}
                  className="card border-0 shadow-sm h-100 overflow-hidden rounded-4 service-card-hover"
                  style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                  onClick={() => openModal(service)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(service);
                    }
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />

                  <div className="card-body p-4 text-start">
                    <h5 className="service-card-title">{service.title}</h5>
                    <p className="service-card-text">{service.description}</p>
                    <span
                      className="d-inline-flex align-items-center gap-1 mt-2"
                      style={{ color: '#0097b2', fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      Learn more <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: 'rgba(0,0,0,0.55)',
            zIndex: 10000,
            position: 'fixed',
            inset: 0,
          }}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: '460px', margin: '1rem auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
              <div className="position-relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                />
                <button
                  type="button"
                  className="btn-close position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2 shadow"
                  aria-label="Close"
                  onClick={closeModal}
                />
              </div>

              <div className="modal-body p-3 p-md-4">
                <h3
                  id="service-modal-title"
                  className="mb-2"
                  style={{ fontFamily: 'Merriweather, serif', color: '#003366', fontWeight: 700, fontSize: '1.25rem' }}
                >
                  {selectedService.title}
                </h3>
                <p className="text-muted mb-3" style={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {selectedService.description}
                </p>

                <h6 className="mb-2" style={{ color: '#003366', fontWeight: 700, fontSize: '0.9rem' }}>Key Benefits</h6>
                <ul className="list-unstyled mb-3">
                  {selectedService.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="d-flex align-items-start gap-2 mb-1">
                      <i className="bi bi-check-circle-fill text-info mt-1" style={{ fontSize: '0.85rem' }} />
                      <span style={{ fontSize: '0.85rem', color: '#555' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <button
                    type="button"
                    className="btn flex-fill py-2 fw-bold rounded-pill text-white"
                    style={{ backgroundColor: '#003366', border: 'none' }}
                    onClick={goToDetail}
                  >
                    View Full Details
                  </button>
                  <Link
                    to="/book-appointment"
                    className="btn flex-fill py-2 fw-bold rounded-pill"
                    style={{ borderColor: '#003366', color: '#003366' }}
                    onClick={closeModal}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
