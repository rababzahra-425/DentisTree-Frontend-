
// // export default AboutPage;
// import React from 'react';
// // import aboutImg from './patientimg.jpeg'; 
// import aboutImg from '../assets/img/patientimg.png';

// /* ─────────────────────────────────────────────
//     DOCTOR DATA
// ───────────────────────────────────────────── */
// const doctors = [
//   {
//     name: 'Dr. Iqra Rasool',
//     title: 'BDS (Nishter), R.D.S, C-Ortho',
//     role: 'Female Dental Surgeon',
//     bio: 'Specialist in Orthodontics and general dental surgery. Known for her gentle approach and expertise in aligning smiles.',
//     experience: '6+ Years',
//     patients: '2,500+',
//     photo: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     name: 'Dr. Hafiz Mashood Ahmed',
//     title: 'BDS (Demont), R.D.S, C-Implant',
//     role: 'Oral & Maxillofacial Surgeon',
//     bio: 'Expert in complex dental implants and facial reconstructive surgeries at Mayo Hospital Lahore.',
//     experience: '8+ Years',
//     patients: '3,200+',
//     photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     name: 'Dr. Anum Mashood',
//     title: 'BDS (Nishter), R.D.S, F.C.P.S, OMFS',
//     role: 'Oral & Maxillofacial Surgeon',
//     bio: 'Dedicated to providing high-end surgical care and advanced restorative treatments with precision.',
//     experience: '7+ Years',
//     patients: '2,800+',
//     photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     name: 'Dr. Qurat-ul-Ain Abdullah',
//     title: 'BDS (FUI), R.D.S, M.S.P.H (HSA)',
//     role: 'Public Health Specialist',
//     bio: 'Expert in Family Dentistry. She focuses on preventive care and ensuring long-term oral hygiene.',
//     experience: '5+ Years',
//     patients: '2,000+',
//     photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
//   }
// ];

// const AboutPage = () => {
//   return (
//     <div className="about-wrapper">
//       <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
//       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      
//       <style>{`
//         .about-wrapper { font-family: 'Poppins', sans-serif; background: #fff; color: #333; overflow-x: hidden; }

//         /* HEADER SECTION */
//         .page-header { 
//           background: linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 30, 60, 0.8)), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80');
//           background-size: cover;
//           background-position: center;
//           padding: 180px 5%;
//           text-align: center;
//           color: white;
//         }
//         .page-header h1 { font-family: 'Merriweather', serif; font-size: 3.2rem; margin: 0; font-weight: 900; }
//         .breadcrumb { font-size: 0.8rem; margin-top: 10px; opacity: 0.7; letter-spacing: 2px; }

//         /* STORY SECTION */
//         .main-story { padding: 80px 10% 40px; display: flex; align-items: center; gap: 50px; flex-wrap: wrap; }
//         .story-img { flex: 1; min-width: 300px; position: relative; }
//         .story-img img { width: 100%; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
//         .story-content { flex: 1.2; min-width: 300px; }
//         .label-pill { background: #e0f2fe; color: #0097b2; padding: 6px 16px; border-radius: 50px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
//         .story-content h2 { font-family: 'Merriweather', serif; color: #003366; font-size: 2.5rem; margin: 15px 0; line-height: 1.2; }
//         .story-content p { line-height: 1.8; color: #555; font-size: 1rem; }

//         /* UPDATED WHATSAPP PANEL - Light Background */
//         .whatsapp-cta-panel {
//           background: #f8fafc; /* Very light subtle grey-blue */
//           border-top: 1px solid #edf2f7;
//           border-bottom: 1px solid #edf2f7;
//           padding: 50px 10%;
//           text-align: center;
//           margin: 20px 0;
//         }
//         .whatsapp-cta-panel h3 { font-family: 'Merriweather', serif; color: #003366; font-size: 2rem; margin-bottom: 10px; }
//         .whatsapp-cta-panel p { color: #64748b; margin-bottom: 25px; font-size: 1.1rem; }
//         .btn-wa { 
//           display: inline-flex; align-items: center; gap: 12px; 
//           background: #25D366; color: white; padding: 16px 40px; 
//           border-radius: 50px; text-decoration: none; font-weight: 700; transition: 0.3s;
//           box-shadow: 0 10px 20px rgba(37, 211, 102, 0.15);
//         }
//         .btn-wa:hover { background: #1da851; transform: translateY(-3px); color: #fff; box-shadow: 0 12px 25px rgba(37, 211, 102, 0.25); }

//         /* DOCTORS GRID */
//         .doctors-section { padding: 60px 10% 90px; background: #fff; }
//         .section-header { text-align: center; margin-bottom: 55px; }
//         .section-header h2 { font-family: 'Merriweather', serif; color: #003366; font-size: 2.4rem; }
        
//         .docs-grid { 
//           display: grid; 
//           grid-template-columns: repeat(4, 1fr); 
//           gap: 25px; 
//           align-items: stretch;
//         }

//         .doc-card-v4 { 
//           background: #fff; 
//           border-radius: 18px; 
//           border: 1px solid #f1f5f9;
//           display: flex;
//           flex-direction: column;
//           transition: 0.35s ease;
//           height: 100%;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
//         }
//         .doc-card-v4:hover { transform: translateY(-10px); border-color: #0097b2; box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.08); }

//         .doc-thumb { height: 280px; overflow: hidden; border-radius: 18px 18px 0 0; }
//         .doc-thumb img { width: 100%; height: 100%; object-fit: cover; }

//         .doc-info { padding: 25px; text-align: center; flex-grow: 1; display: flex; flex-direction: column; }
//         .doc-info h3 { font-family: 'Merriweather', serif; font-size: 1.15rem; color: #003366; margin-bottom: 6px; }
//         .doc-info .title { color: #0097b2; font-size: 0.78rem; font-weight: 700; display: block; margin-bottom: 12px; min-height: 42px; line-height: 1.4; }
//         .doc-info p { font-size: 0.82rem; color: #64748b; line-height: 1.6; margin-bottom: 15px; }
        
//         .stat-bar { 
//           display: flex; 
//           justify-content: space-around; 
//           padding: 18px 10px; 
//           background: #f8fafc; 
//           border-top: 1px solid #f1f5f9;
//           border-radius: 0 0 18px 18px;
//         }
//         .stat-item b { display: block; font-size: 0.95rem; color: #003366; }
//         .stat-item small { font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; }

//         @media (max-width: 1200px) { .docs-grid { grid-template-columns: repeat(2, 1fr); } }
//         @media (max-width: 768px) { 
//             .docs-grid { grid-template-columns: 1fr; }
//             .main-story { padding: 50px 5%; }
//             .page-header h1 { font-size: 2.4rem; }
//         }
//       `}</style>

//       {/* 1. TOP HEADER */}
//       <header className="page-header">
//         <h1>About Us</h1>
//         <div className="breadcrumb">HOME / ABOUT DENTISTREE</div>
//       </header>

//       {/* 2. STORY SECTION */}
//       <section className="main-story">
//         <div className="story-img">
//           <img src={aboutImg} alt="DentisTree Clinic" />
//         </div>
//         <div className="story-content">
//           <span className="label-pill">The Best Dental Hospital</span>
//           <h2>Your Journey to a Perfect Smile</h2>
//           <p>
//             DentisTree is built with a vision to provide professional and compassionate 
//             dental care in Sahiwal. We combine years of experience with digital 
//             dentistry to provide results that last. Our team ensures that every visit is 
//             comfortable, safe, and tailored to your specific dental needs.
//           </p>
//         </div>
//       </section>

//       {/* 3. WHATSAPP CTA PANEL - Adjusted color & position */}
//       <section className="whatsapp-cta-panel">
//         <h3>Ready to Meet Our Team?</h3>
//         <p>Expert consultants are just a message away. Get same-week appointments easily.</p>
//         <a href="https://wa.me/923217450249" className="btn-wa">
//           <i className="bi bi-whatsapp"></i> Book via WhatsApp
//         </a>
//       </section>

//       {/* 4. DOCTORS SECTION */}
//       <section className="doctors-section">
//         <div className="section-header">
//           <span className="label-pill">Our Specialists</span>
//           <h2 style={{marginTop: '15px'}}>Qualified Dental Surgeons</h2>
//         </div>

//         <div className="docs-grid">
//           {doctors.map((doc, idx) => (
//             <div key={idx} className="doc-card-v4">
//               <div className="doc-thumb">
//                 <img src={doc.photo} alt={doc.name} />
//               </div>
//               <div className="doc-info">
//                 <h3>{doc.name}</h3>
//                 <span className="title">{doc.title}</span>
//                 <p>{doc.bio}</p>
//               </div>
//               <div className="stat-bar">
//                 <div className="stat-item">
//                   <b>{doc.experience}</b>
//                   <small>Experience</small>
//                 </div>
//                 <div className="stat-item">
//                   <b>{doc.patients}</b>
//                   <small>Patients</small>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;


import React, { useEffect } from 'react';
import aboutImg from '../assets/img/patientimg.png';
import noprofileimg from '../assets/img/noprofile.jpg'
/* ── AOS-like lightweight hook ─────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const doctors = [
  {
    name: 'Dr. Iqra Rasool',
    title: 'BDS (Nishter), R.D.S, C-Ortho',
    role: 'Female Dental Surgeon',
    bio: 'Expert in Family Dentistry and general dental surgery. Known for her gentle approach and expertise in aligning smiles.',
    experience: '8+ Years',
    patients: '2,500+',
    photo: noprofileimg,
  },
  {
    name: 'Dr. Hafiz Mashood Ahmed',
    title: 'BDS (Demont), R.D.S, C-Implant',
    role: 'Oral & Maxillofacial Surgeon',
    bio: 'Expert in complex dental implants and facial reconstructive surgeries at Mayo Hospital Lahore.',
    experience: '14+ Years',
    patients: '3,200+',
    photo: noprofileimg,
  },
  {
    name: 'Dr. Anum Mashood',
    title: 'BDS (Nishter), R.D.S, F.C.P.S, OMFS',
    role: 'Oral & Maxillofacial Surgeon',
    bio: 'Dedicated to providing high-end surgical care and advanced restorative treatments with precision.',
    experience: '10+ Years',
    patients: '2,800+',
    photo: noprofileimg,
  },
  {
    name: 'Dr. Qurat-ul-Ain Abdullah',
    title: 'BDS (FUI), R.D.S, M.S.P.H (HSA)',
    role: 'Public Health Specialist',
    bio: 'Expert in Family Dentistry. She focuses on preventive care and ensuring long-term oral hygiene.',
    experience: '8+ Years',
    patients: '2,000+',
    photo: noprofileimg,
  }
];

const AboutPage = () => {
  useScrollReveal();

  return (
    <div className="about-wrapper">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />

      <style>{`
        /* ── AOS Animations ── */
        [data-aos] {
          opacity: 0;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        [data-aos="fade-up"]   { transform: translateY(40px); }
        [data-aos="fade-left"] { transform: translateX(40px); }
        [data-aos="fade-right"]{ transform: translateX(-40px); }
        [data-aos="zoom-in"]   { transform: scale(0.88); }
        [data-aos].aos-animate {
          opacity: 1 !important;
          transform: none !important;
        }

        .about-wrapper { font-family: 'Poppins', sans-serif; background: #fff; color: #333; overflow-x: hidden; }

        /* ── SHARED HERO (matches Contact & Gallery) ── */
        .page-header {
          background: linear-gradient(rgba(0,30,60,0.82), rgba(0,30,60,0.82)),
            url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          padding: 140px 5% 120px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .page-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,151,178,0.18), transparent);
          pointer-events: none;
        }
        /* dot pattern */
        .page-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }
        .page-header-inner { position: relative; z-index: 1; }
        .page-hero-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(147,197,253,0.9);
          margin: 0 0 14px;
          display: block;
        }
        .page-header h1 {
          font-family: 'Merriweather', serif;
          font-size: clamp(2.6rem, 6vw, 5rem);
          margin: 0 0 14px;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -1px;
        }
        .page-header p {
          color: rgba(255,255,255,0.65);
          font-size: 1.05rem;
          font-weight: 300;
          margin: 0;
          line-height: 1.7;
        }
        .page-hero-divider {
          width: 52px; height: 3px;
          background: linear-gradient(90deg, #0097b2, #00aaff);
          border-radius: 2px;
          margin: 20px auto;
        }

        /* ── STORY ── */
        .main-story { padding: 90px 10% 60px; display: flex; align-items: center; gap: 60px; flex-wrap: wrap; }
        .story-img { flex: 1; min-width: 300px; position: relative; }
        .story-img img { width: 100%; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.1); display: block; }
        .story-content { flex: 1.2; min-width: 300px; }
        .label-pill { background: #e0f2fe; color: #0097b2; padding: 6px 16px; border-radius: 50px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
        .story-content h2 { font-family: 'Merriweather', serif; color: #003366; font-size: clamp(1.8rem, 3vw, 2.5rem); margin: 18px 0; line-height: 1.25; }
        .story-content p { line-height: 1.85; color: #555; font-size: 1rem; }

        /* ── WHATSAPP ── */
        .whatsapp-cta-panel {
          background: #f8fafc;
          border-top: 1px solid #edf2f7;
          border-bottom: 1px solid #edf2f7;
          padding: 60px 10%;
          text-align: center;
        }
        .whatsapp-cta-panel h3 { font-family: 'Merriweather', serif; color: #003366; font-size: 2rem; margin-bottom: 10px; }
        .whatsapp-cta-panel p { color: #64748b; margin-bottom: 28px; font-size: 1.08rem; }
        .btn-wa {
          display: inline-flex; align-items: center; gap: 12px;
          background: #25D366; color: white; padding: 16px 40px;
          border-radius: 50px; text-decoration: none; font-weight: 700;
          transition: 0.3s; box-shadow: 0 10px 24px rgba(37,211,102,0.2);
          font-size: 1rem;
        }
        .btn-wa:hover { background: #1da851; transform: translateY(-3px); color: #fff; box-shadow: 0 14px 30px rgba(37,211,102,0.3); }

        /* ── DOCTORS ── */
        .doctors-section { padding: 80px 10% 100px; background: #fff; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { font-family: 'Merriweather', serif; color: #003366; font-size: clamp(1.8rem, 3vw, 2.4rem); margin-top: 14px; }

        .docs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .doc-card-v4 {
          background: #fff;
          border-radius: 18px;
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s;
          height: 100%;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          overflow: hidden;
        }
        .doc-card-v4:hover {
          transform: translateY(-10px);
          border-color: #0097b2;
          box-shadow: 0 20px 40px rgba(0,51,102,0.1);
        }

        /* ── FIXED: consistent square thumbnail ── */
        .doc-thumb {
          width: 100%;
          aspect-ratio: 1 / 1;       /* perfect square */
          overflow: hidden;
          flex-shrink: 0;
        }
        .doc-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;          /* fill the square, crop edges */
          object-position: top center; /* keep face in frame */
          display: block;
          transition: transform 0.5s ease;
        }
        .doc-card-v4:hover .doc-thumb img { transform: scale(1.05); }

        .doc-info { padding: 22px 20px 16px; text-align: center; flex-grow: 1; display: flex; flex-direction: column; }
        .doc-info h3 { font-family: 'Merriweather', serif; font-size: 1.05rem; color: #003366; margin-bottom: 6px; }
        .doc-info .title { color: #0097b2; font-size: 0.75rem; font-weight: 700; display: block; margin-bottom: 10px; line-height: 1.4; }
        .doc-info p { font-size: 0.82rem; color: #64748b; line-height: 1.65; margin: 0; }

        .stat-bar {
          display: flex;
          justify-content: space-around;
          padding: 16px 10px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }
        .stat-item b { display: block; font-size: 0.95rem; color: #003366; font-weight: 700; }
        .stat-item small { font-size: 0.65rem; color: #94a3b8; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) { .docs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .docs-grid { grid-template-columns: 1fr; }
          .main-story { padding: 50px 5%; gap: 36px; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────── */}
      <header className="page-header">
        <div className="page-header-inner">
          <span className="page-hero-eyebrow" data-aos="fade-up">About DentisTree</span>
          <h1 data-aos="fade-up" data-aos-delay="80">About Us</h1>
          <div className="page-hero-divider" data-aos="fade-up" data-aos-delay="140" />
          <p data-aos="fade-up" data-aos-delay="180">
            Compassionate care. Expert hands. Beautiful smiles.
          </p>
        </div>
      </header>

      {/* ── STORY ─────────────────────────────────────── */}
      <section className="main-story">
        <div className="story-img" data-aos="fade-right">
          <img src={aboutImg} alt="DentisTree Clinic" />
        </div>
        <div className="story-content" data-aos="fade-left">
          <span className="label-pill">The Best Dental Hospital</span>
          <h2>Your Journey to a Perfect Smile</h2>
          <p>
            DentisTree is built with a vision to provide professional and compassionate
            dental care in Sahiwal. We combine years of experience with digital
            dentistry to provide results that last. Our team ensures that every visit is
            comfortable, safe, and tailored to your specific dental needs.
          </p>
        </div>
      </section>

      {/* ── WHATSAPP CTA ──────────────────────────────── */}
      <section className="whatsapp-cta-panel">
        <h3 data-aos="fade-up">Ready to Meet Our Team?</h3>
        <p data-aos="fade-up" data-aos-delay="80">Expert consultants are just a message away. Get same-week appointments easily.</p>
        <a href="https://wa.me/923217450249" className="btn-wa" data-aos="zoom-in" data-aos-delay="160">
          <i className="bi bi-whatsapp"></i> Book via WhatsApp
        </a>
      </section>

      {/* ── DOCTORS ───────────────────────────────────── */}
      <section className="doctors-section">
        <div className="section-header" data-aos="fade-up">
          <span className="label-pill">Our Specialists</span>
          <h2>Qualified Dental Surgeons</h2>
        </div>

        <div className="docs-grid">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="doc-card-v4"
              data-aos="fade-up"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="doc-thumb">
                <img src={doc.photo} alt={doc.name} />
              </div>
              <div className="doc-info">
                <h3>{doc.name}</h3>
                <span className="title">{doc.title}</span>
                <p>{doc.bio}</p>
              </div>
              <div className="stat-bar">
                <div className="stat-item">
                  <b>{doc.experience}</b>
                  <small>Experience</small>
                </div>
                <div className="stat-item">
                  <b>{doc.patients}</b>
                  <small>Patients</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;