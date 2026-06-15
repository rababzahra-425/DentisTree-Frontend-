import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import CookiePreferencesLink from './cookies/CookiePreferencesLink';

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 text-white" style={{ 
      background: 'linear-gradient(135deg, #001f3f 0%, #003366 100%)',
      borderTop: '4px solid #00aaff'
    }}>
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-12">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-shield-plus fs-1 me-2" style={{ color: '#00aaff' }}></i>
              <h3 className="fw-bold mb-0" style={{ letterSpacing: '1px' }}><span>DENTISTREE</span></h3>
            </div>
            <p className="opacity-75 pe-lg-5" style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
              At Dentistree, we combine advanced technology with a patient-centered approach to provide the highest quality dental care. Our mission is to help you achieve a healthy, confident smile that lasts a lifetime.
            </p>
            <div className="mt-4">
              <h6 className="fw-bold mb-3 text-uppercase small" style={{ letterSpacing: '2px', color: '#00aaff' }}>Follow Our Journey</h6>
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61576983534359" className="social-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/dentistree_swl?igsh=YjJrazZqYmc0em85" className="social-link"rel="noopener noreferrer"  ><i className="bi bi-instagram"></i></a>
                <a href="https://wa.me/923217450249" className="social-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                {/* <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a> */}
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-4 border-bottom border-primary border-2 pb-2 d-inline-block">Services</h5>
            <ul className="list-unstyled footer-links">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-4 border-bottom border-primary border-2 pb-2 d-inline-block">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/about">About DentisTree</Link></li>
              {/* <li><Link to="/about">Our Specialists</Link></li> */}
              <li><Link to="/gallery">Latest Gallery</Link></li>
              <li><Link to="/book-appointment">Book Now</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li>
                <CookiePreferencesLink className="cookie-footer-link" />
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-lg-4 col-md-4">
            <h5 className="fw-bold mb-4 border-bottom border-primary border-2 pb-2 d-inline-block">Contact Us</h5>
            <div className="d-flex mb-3 align-items-start">
              <div className="contact-icon-box me-3">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <p className="mb-0 opacity-75" style={{ fontSize: '0.9rem' }}>
                Main Market Farid Town, Sahiwal, Pakistan<br />Sahiwal, Punjab, Pakistan
              </p>
            </div>
            <div className="d-flex mb-3 align-items-center">
              <div className="contact-icon-box me-3">
                <i className="bi bi-envelope-fill"></i>
              </div>
<p className="mb-0 opacity-75" style={{ fontSize: '0.9rem' }}>
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dentistreeclinic123@gmail.com"
    style={{ color: 'inherit', textDecoration: 'none' }}
 target="_blank" 
  rel="noopener noreferrer"
>
  dentistreeclinic123@gmail.com
</a>
</p>            
</div>
            <div className="d-flex align-items-center">
              <div className="contact-icon-box me-3">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <p className="mb-0 opacity-75" style={{ fontSize: '0.9rem' }}>
  <a
    href="tel:+923217450249" 
    rel="noopener noreferrer"
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    +92 321 7450249
  </a>
</p>
            </div>
          </div>
        </div>

        <hr className="opacity-10" />

        <div className="row mt-4 align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small opacity-50 mb-0">
              © 2026 Dentetree Dental Care. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="small opacity-50 mb-0">
              Designed for Excellence in Oral Health.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-links li {
          margin-bottom: 12px;
        }
        .footer-links a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.3s all ease;
        }
        .footer-links a:hover {
          color: #00aaff;
          padding-left: 8px;
        }
        .social-link {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: 0.3s;
        }
        .social-link:hover {
          background: #00aaff;
          color: white;
          transform: translateY(-3px);
        }
        .contact-icon-box {
          color: #00aaff;
          font-size: 1.1rem;
        }
        .cookie-footer-link {
          background: none;
          border: none;
          padding: 0;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: 0.3s all ease;
        }
        .cookie-footer-link:hover {
          color: #00aaff;
          padding-left: 8px;
        }
      `}} />
    </footer>
  );
};

export default Footer;















