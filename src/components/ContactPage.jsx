import React, { useState, useEffect } from 'react';
import ConsentGated from './cookies/ConsentGated';
import CookiePreferencesLink from './cookies/CookiePreferencesLink';
import "./ContactPage.css";

/* ── same lightweight scroll-reveal used on About & Gallery ── */
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

const ContactPage = () => {
  useScrollReveal();

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
const isClinicOpen = () => {
  const now = new Date();

  const pakistanTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Karachi" })
  );

  const day = pakistanTime.getDay(); // Sunday = 0

  // Sunday Closed
  if (day === 0) return false;

  const currentHour = pakistanTime.getHours();
  const currentMinute = pakistanTime.getMinutes();
  const currentTime = currentHour + currentMinute / 60;

  // 2 PM to 9 PM
  return currentTime >= 14 && currentTime < 21;
};

const clinicOpen = isClinicOpen();
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: '', phone: '', message: '' });
    }
  };

  const googleMapIframe = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5373457766154!2d73.0815546!3d30.675154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922c90022ea7c61%3A0x532d4122a3dc769!2sDentis%20Tree!5e0!3m2!1sen!2s!4v1777145459703!5m2!1sen!2s"
      width="100%" height="100%"
      style={{ border: 0 }}
      allowFullScreen="" loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: "'Lato', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Lato:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      {/* ── HERO (matches About & Gallery style) ─────── */}
      <header className="cp-hero">
        <div className="cp-hero-inner">
          <span className="cp-eyebrow" data-aos="fade-up">Contact DentisTree</span>
          <h1 className="cp-hero-title" data-aos="fade-up" data-aos-delay="80">
            Get In Touch
          </h1>
          <div className="cp-hero-divider" data-aos="fade-up" data-aos-delay="140" />
          <p className="cp-hero-sub" data-aos="fade-up" data-aos-delay="180">
            Reach out for appointments, queries, or anything dental.<br />
            Our team is always happy to help your smile shine.
          </p>
        </div>
      </header>

      {/* ── INFO CARDS ───────────────────────────────── */}
      <section style={{ padding: '70px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row g-4 justify-content-center">

            <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="0">
              <div className="info-card w-100 text-center">
                <div className="icon-wrap"><i className="bi bi-telephone-fill" /></div>
                <div className="card-title">Call &amp; WhatsApp</div>
                <p className="card-detail">+92 321 7450249</p>
                <a href="https://wa.me/923217450249" className="btn-whatsapp">
                  <i className="bi bi-whatsapp" /> WhatsApp Now
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="120">
              <div className="info-card w-100 text-center">
                <div className="icon-wrap"><i className="bi bi-envelope-fill" /></div>
                <div className="card-title">Email Address</div>
                <p className="card-detail"> <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dentistreeclinic123@gmail.com"
    style={{ color: 'inherit', textDecoration: 'none' }}
 target="_blank" 
  rel="noopener noreferrer"
>
  dentistreeclinic123@gmail.com
</a></p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="240">
              <div className="info-card w-100 text-center">
                <div className="icon-wrap"><i className="bi bi-clock-fill" /></div>
                <div className="card-title">Clinic Timings</div>
                <p className="card-detail">
                  Mon – Sat: 2:00 AM – 9:00 PM<br />
                </p>
                <div className={`status-badge ${clinicOpen ? "open" : "closed"}`}>
  <span className="pulse-dot" />
  {clinicOpen ? "Currently Open" : "Currently Closed"}
</div>
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ─────────────────────────────── */}
      <section className="social-section">
        <div className="container text-center">
          <span className="section-badge" data-aos="fade-up">Stay Connected</span>
          <h3 className="section-title mb-2" data-aos="fade-up" data-aos-delay="60"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
            Connect via Social Media
          </h3>
          <div className="divider-line" style={{ marginBottom: '32px' }} data-aos="fade-up" data-aos-delay="100" />
          <div className="d-flex justify-content-center flex-wrap gap-3" data-aos="zoom-in" data-aos-delay="160">
  <a
    href="https://www.instagram.com/dentistree_swl?igsh=YjJrazZqYmc0em85"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn btn-msng"
  >
    <i className="bi bi-messenger" /> Messenger
  </a>

  <a
    href="https://www.instagram.com/dentistree_swl?igsh=YjJrazZqYmc0em85"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn btn-ig"
  >
    <i className="bi bi-instagram" /> Instagram
  </a>

  <a
    href="https://www.facebook.com/share/191yAcqH9L/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn btn-fb"
  >
    <i className="bi bi-facebook" /> Facebook
  </a>
</div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────── */}
      <section className="map-section">
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="section-badge">Our Location</span>
            <h3 className="section-title mb-0" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              Find Us on the Map
            </h3>
            <div className="divider-line" />
          </div>
          <div className="map-card" data-aos="zoom-in" data-aos-delay="80">
            <ConsentGated
              category="functional"
              fallback={
                <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <p style={{ color: '#64748b', marginBottom: '0.75rem' }}>
                    Enable functional cookies to load the interactive map.
                  </p>
                  <CookiePreferencesLink className="cookie-btn cookie-btn--ghost" />
                </div>
              }
            >
              {googleMapIframe}
            </ConsentGated>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }} data-aos="fade-up" data-aos-delay="120">
            <p style={{ color: 'var(--navy)', fontWeight: '600', fontSize: '0.95rem', margin: 0 }}>
              <i className="bi bi-geo-alt-fill me-2" style={{ color: 'var(--cyan)' }} />
              Main Market Farid Town, Sahiwal, Punjab, Pakistan
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

// import React, { useState } from 'react';
// import "./ContactPage.css";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (formData.name && formData.phone) {
//       setSubmitted(true);
//       setTimeout(() => setSubmitted(false), 4000);
//       setFormData({ name: '', phone: '', message: '' });
//     }
//   };

//   const googleMapIframe = (
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5373457766154!2d73.0815546!3d30.675154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922c90022ea7c61%3A0x532d4122a3dc769!2sDentis%20Tree!5e0!3m2!1sen!2s!4v1777145459703!5m2!1sen!2s"
//       width="100%"
//       height="100%"
//       style={{ border: 0 }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     />
//   );

//   return (
//     <div style={{ backgroundColor: '#ffffff', fontFamily: "'Lato', sans-serif" }}>

//       {/* Google Fonts */}
//       <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Lato:wght@300;400;600;700&display=swap" rel="stylesheet" />
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      
//       <div className="address-strip">
//         <div className="container">
//           <p>
//             <i className="bi bi-clock me-2" style={{ color: 'var(--cyan-light)' }} />
//             Mon–Sat &nbsp;|&nbsp;  Evening: 5pm–9pm
//             &nbsp;&nbsp;
//             <i className="bi bi-telephone me-2 ms-3" style={{ color: 'var(--cyan-light)' }} />
//             +92 321 7450249
//           </p>
//         </div>
//       </div>

//       {/* ── HERO ── */}
//       <section className="contact-hero text-center">
//         <div className="container" style={{ maxWidth: '720px', position: 'relative', zIndex: 1 }}>
//           <span className="section-badge">Get In Touch</span>
//           <h2 className="section-title mb-0" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
//             We're Here to Help<br />Your Smile Shine
//           </h2>
//           <div className="divider-line" />
//           <p style={{ color: 'var(--text-muted)', marginTop: '20px', fontSize: '1.02rem', lineHeight: '1.75' }}>
//             Reach out to DentisTree for appointments, queries, or anything dental.<br />
//             Our team is always happy to assist you.
//           </p>
//         </div>
//       </section>
      

//       {/* ── INFO CARDS ── */}
//       <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
//         <div className="container">
//           <div className="row g-4 justify-content-center">

//             {/* Phone */}
//             <div className="col-lg-4 col-md-6 d-flex">
//               <div className="info-card w-100 text-center">
//                 <div className="icon-wrap">
//                   <i className="bi bi-telephone-fill" />
//                 </div>
//                 <div className="card-title">Call &amp; WhatsApp</div>
//                 <p className="card-detail">+92 321 7450249</p>
//                 <a href="https://wa.me/923217450249" className="btn-whatsapp">
//                   <i className="bi bi-whatsapp" /> WhatsApp Now
//                 </a>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="col-lg-4 col-md-6 d-flex">
//               <div className="info-card w-100 text-center">
//                 <div className="icon-wrap">
//                   <i className="bi bi-envelope-fill" />
//                 </div>
//                 <div className="card-title">Email Address</div>
//                 <p className="card-detail">
//                   dentistree@gmail.com<br />
//                 </p>
//               </div>
//             </div>

//             {/* Timing */}
//             <div className="col-lg-4 col-md-6 d-flex">
//               <div className="info-card w-100 text-center">
//                 <div className="icon-wrap">
//                   <i className="bi bi-clock-fill" />
//                 </div>
//                 <div className="card-title">Clinic Timings</div>
//                 <p className="card-detail">
//                   Mon – Sat: 10:00 AM – 2:00 PM<br />
//                   Evening: 5:00 PM – 8:00 PM
//                 </p>
//                 <div className="status-badge open">
//                   <span className="pulse-dot" /> Currently Open
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ── QUICK MESSAGE FORM ── */}
//       {/* <section className="form-section">
//         <div className="container" style={{ maxWidth: '860px', position: 'relative', zIndex: 1 }}>
//           <div className="text-center mb-4">
//             <span className="section-badge" style={{ color: 'rgba(0,200,230,0.85)' }}>Quick Message</span>
//             <h3 className="section-title" style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
//               Send Us a Message
//             </h3>
//             <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.93rem', marginTop: '10px' }}>
//               We'll get back to you within a few hours.
//             </p>
//           </div>

//           <div className="row g-3">
//             <div className="col-md-6">
//               <label className="form-label">Your Name</label>
//               <input
//                 className="form-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="e.g. Rabab Zahra"
//               />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Phone Number</label>
//               <input
//                 className="form-input"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+92 3XX XXXXXXX"
//               />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Your Message</label>
//               <textarea
//                 className="form-input"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="e.g. I'd like to book an appointment for teeth cleaning…"
//                 style={{ resize: 'none' }}
//               />
//             </div>
//             <div className="col-12 text-center" style={{ marginTop: '8px' }}>
//               <button className="btn-submit" onClick={handleSubmit}>
//                 <i className="bi bi-send-fill me-2" /> Send Message
//               </button>
//               {submitted && (
//                 <div className="success-toast" style={{ maxWidth: '420px', margin: '16px auto 0' }}>
//                   <i className="bi bi-check-circle-fill" style={{ fontSize: '1.1rem', color: '#4ade80' }} />
//                   Thank you! We'll contact you shortly.
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* ── SOCIAL MEDIA ── */}
//       <section className="social-section">
//         <div className="container text-center">
//           <span className="section-badge">Stay Connected</span>
//           <h3 className="section-title mb-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
//             Connect via Social Media
//           </h3>
//           <div className="divider-line" style={{ marginBottom: '32px' }} />
//           <div className="d-flex justify-content-center flex-wrap gap-3">
//             <a href="#" className="social-btn btn-msng">
//               <i className="bi bi-messenger" /> Messenger
//             </a>
//             <a href="#" className="social-btn btn-ig">
//               <i className="bi bi-instagram" /> Instagram
//             </a>
//             <a href="#" className="social-btn btn-fb">
//               <i className="bi bi-facebook" /> Facebook
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ── MAP ── */}
//       <section className="map-section">
//         <div className="container">
//           <div className="text-center mb-4">
//             <span className="section-badge">Our Location</span>
//             <h3 className="section-title mb-0" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
//               Find Us on the Map
//             </h3>
//             <div className="divider-line" />
//           </div>

//           <div className="map-card">
//             {googleMapIframe}
//           </div>

//           <div style={{ marginTop: '20px', textAlign: 'center' }}>
//             <p style={{ color: 'var(--navy)', fontWeight: '600', fontSize: '0.95rem', margin: 0 }}>
//               <i className="bi bi-geo-alt-fill me-2" style={{ color: 'var(--cyan)' }} />
//               Main Market Farid Town, Sahiwal, Punjab, Pakistan
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── BOTTOM STRIP ── */}
      

//     </div>
//   );
// };

// export default ContactPage;
