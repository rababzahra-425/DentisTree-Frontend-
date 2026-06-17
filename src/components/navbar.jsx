import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/Dentis_Tree_Namee.png';
import logo from '../assets/img/Dentis_Tree_logoo.png';

import Topbar from './Topbar';

const Navbar = ({ formRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const topbarRef = useRef(null);

  // Detect when Topbar has scrolled fully off screen, then lock navbar to top
  useEffect(() => {
    const handleScroll = () => {
      if (!topbarRef.current) return;
      setIsSticky(topbarRef.current.getBoundingClientRect().bottom <= 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isSticky 
    ? 'navbar navbar-expand-lg navbar-light fixed-top' 
    : 'navbar navbar-expand-lg navbar-light';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Topbar scrolls away naturally */}
      <div ref={topbarRef}>
        <Topbar />
      </div>

      {/* Spacer prevents content jump when navbar becomes fixed */}
      {isSticky && <div style={{ height: '74px' }} aria-hidden="true" />}

      <nav className={navClass}
        style={{
          position: isSticky ? 'fixed' : 'relative',
          top: 0,
          zIndex: 1000,
          width: '100%',
          transition: 'all 0.3s ease',
          backgroundColor: 'white',
          boxShadow: isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          padding: '10px 0'
        }}>
        <div className="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
          
          {/* Logo Section — tight brand unit, anchored far left */}
          <Link
            to="/"
            onClick={closeMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',           /* tight gap between icon and name */
              textDecoration: 'none',
              flexShrink: 0,        /* never squish the logo */
              marginRight: 'auto',  /* push everything else to the right */
            }}
          >
            <img
              alt="DentisTree logo"
              src={logo}
              style={{ width: '80px', height: 'auto', display: 'block' }}
            />
            <img
              alt="DentisTree"
              src={logoImg}
              style={{ width: '170px', height: 'auto', display: 'block', marginTop: '3px' }}
              className="d-none d-sm-block"
            />
          </Link>

          {/* Toggle Button (Hamburger) */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{ padding: '6px 10px', fontSize: '1.25rem', border: '1px solid #ddd' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Responsive Navigation Menu */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarTogglerMenu">
            
            <div className="navbar-right-group">
              
              <ul className="navbar-nav navbar-nav-custom mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
                    <span>Home</span> <i className="bi bi-chevron-right d-lg-none"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
                    <span>About Us</span> <i className="bi bi-chevron-right d-lg-none"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
                    <span>Gallery</span> <i className="bi bi-chevron-right d-lg-none"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
                    <span>Contact Us</span> <i className="bi bi-chevron-right d-lg-none"></i>
                  </Link>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="navbar-btn-group">
                <a
                  href="https://www.google.com/maps?q=30.675154,73.0815546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-find-us"
                  style={{ padding: '9px 20px', borderRadius: '30px', whiteSpace: 'nowrap', fontWeight: '600', fontSize: '0.85rem' }}
                  onClick={closeMenu}
                >
                  <i className="bi bi-geo-alt-fill"></i> Find Us
                </a>
                <button 
                  className="btn-modern-appointment" 
                  style={{ padding: '10px 24px', borderRadius: '30px', whiteSpace: 'nowrap', fontWeight: '600' }}
                  onClick={() => {
                    formRef.current.scrollIntoView({ behavior: "smooth" });
                    closeMenu();
                  }}
                >
                  Book Appointment
                </button>
              </div>

            </div>

          </div>

        </div>
      </nav>

      {/* Styled css to overwrite white text issue and enhance UI */}
      <style>{`

        /* ── Clean right-side group: links + buttons on one line ── */
        .navbar-right-group {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
        }

        .navbar-nav-custom {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2px;
          flex-wrap: nowrap;
          padding: 0;
          margin: 0 16px 0 0 !important;
        }

        .navbar-btn-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* ── Find Us button — themed navy/blue, same pulse & hover effect ── */
        .btn-find-us {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background-color: #003366;
          color: #ffffff;
          border: none;
          text-decoration: none;
          line-height: 1.2;
          transition: all 0.25s ease;
          animation: findUsPulse 1.8s infinite;
        }

        .btn-find-us i {
          font-size: 0.95rem;
          line-height: 1;
        }

        .btn-find-us:hover {
          background-color: #00509d;
          color: #ffffff;
          animation-play-state: paused;
          transform: scale(1.05);
        }

        @keyframes findUsPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 51, 102, 1);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(0, 80, 157, 0);
            transform: scale(1.04);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 51, 102, 0);
            transform: scale(1);
          }
        }

        /* ── Desktop nav link underline behaviour (unchanged) ── */
        .custom-link-item {
          position: relative;
          color: #1a2530 !important;
          font-size: 0.92rem !important;
          font-weight: 600 !important;
          text-decoration: none;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .custom-link-item:hover {
          color: #003366 !important;
        }

        /* ── Mobile styles ── */
        @media (max-width: 991.98px) {

          .navbar-right-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

          .navbar-nav-custom {
            flex-direction: column !important;
            width: 100%;
            margin: 0 0 12px 0 !important;
            gap: 0;
          }

          .navbar-btn-group {
            flex-direction: column;
            width: 100%;
            gap: 10px;
            padding-top: 8px;
          }

          .btn-find-us,
          .btn-modern-appointment {
            width: 100% !important;
          }

          .collapse.navbar-collapse {
            display: none;
          }
          .collapse.navbar-collapse.show {
            display: block !important;
            background-color: #ffffff !important;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 20px 24px 24px !important;
            box-shadow: 0 15px 30px rgba(0,51,102,0.12);
            border-top: 2px solid #003366;
            z-index: 999;
          }

          .custom-link-item,
          .navbar-light .navbar-nav .nav-link.custom-link-item {
            color: #1a2530 !important;
            font-size: 1rem !important;
            font-weight: 600 !important;
            padding: 13px 8px !important;
            width: 100% !important;
            border-bottom: 1px solid #f0f4f8;
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            transition: color 0.2s, padding-left 0.2s;
          }
          .custom-link-item:hover {
            color: #003366 !important;
            padding-left: 14px !important;
            background: transparent !important;
          }
          .custom-link-item i {
            font-size: 0.8rem;
            color: #94a3b8;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;






// import { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logoImg from '../assets/img/Dentis_Tree_Namee.png';
// import logo from '../assets/img/Dentis_Tree_logoo.png';
// import logoo from '../assets/img/Dentis_Tree_logooo.png';

// import Topbar from './Topbar'; 
// import Gallerypage from "./Gallerypage";
// const Navbar = ({ isSticky, formRef }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navClass = isSticky 
//     ? 'navbar navbar-expand-lg navbar-light fixed-top' 
//     : 'navbar navbar-expand-lg navbar-light';

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {!isSticky && <Topbar />}

//       <nav className={navClass}
//         style={{
//           position: isSticky ? 'fixed' : 'relative',
//           top: 0,
//           zIndex: 1000,
//           width: '100%',
//           transition: 'all 0.3s ease',
//           backgroundColor: 'white',
//           boxShadow: isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//           padding: '10px 0'
//         }}>
//         <div className="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
          
//           {/* Logo Section */}
//           <div className="navbar-brand d-flex align-items-center m-0">
//             <Link to="/" className="d-flex align-items-center text-decoration-none" onClick={closeMenu}>
//               <img 
//                 alt="Logo" 
//                 src={logoo} 
//                 style={{ 
//                   width: '120px', 
//                   height: 'auto',
//                   transition: '0.3s' 
//                 }} 
//               />
//               <img 
//                 alt="Logo Name" 
//                 src={logoImg} 
//                 className="d-none d-sm-block ms-2" 
//                 style={{ 
//                   width: '180px', 
//                   height: 'auto',
//                   marginTop: '5px'
//                 }} 
//               />
//             </Link>
//           </div>

//           {/* Toggle Button (Hamburger) */}
//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             onClick={toggleMenu}
//             aria-label="Toggle navigation"
//             style={{ padding: '6px 10px', fontSize: '1.25rem', border: '1px solid #ddd' }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Responsive Navigation Menu */}
//           <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarTogglerMenu">
            
//             <div className="ms-auto w-100 d-lg-flex align-items-center justify-content-end backend-nav-wrapper">
              
//               <ul className="navbar-nav mb-2 mb-lg-0 me-lg-4 gap-1 gap-lg-0 custom-nav-list">
//                 <li className="nav-item">
//                   <Link to="/" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
//                     <span>Home</span> <i className="bi bi-chevron-right d-lg-none"></i>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/about" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
//                     <span>About Us</span> <i className="bi bi-chevron-right d-lg-none"></i>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/gallery" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
//                     <span>Gallery</span> <i className="bi bi-chevron-right d-lg-none"></i>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/contact" className="nav-link fw-semibold px-lg-3 custom-link-item" onClick={closeMenu}>
//                     <span>Contact Us</span> <i className="bi bi-chevron-right d-lg-none"></i>
//                   </Link>
//                 </li>
//               </ul>

//               {/* Action Buttons */}
//               <div className="nav-item pt-3 pt-lg-0 custom-btn-wrapper d-flex flex-column flex-lg-row gap-2 align-items-stretch align-items-lg-center">
//                 <a
//                   href="https://www.google.com/maps?q=30.675154,73.0815546"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-find-us w-100 w-lg-auto"
//                   style={{ padding: '8px 18px', borderRadius: '30px', whiteSpace: 'nowrap', fontWeight: '600', fontSize: '0.85rem' }}
//                   onClick={closeMenu}
//                 >
//                   <i className="bi bi-geo-alt-fill"></i> Find Us
//                 </a>
//                 <button 
//                   className="btn-modern-appointment w-100 w-lg-auto" 
//                   style={{ padding: '12px 24px', borderRadius: '30px', whiteSpace: 'nowrap', fontWeight: '600' }}
//                   onClick={() => {
//                     formRef.current.scrollIntoView({ behavior: "smooth" });
//                     closeMenu();
//                   }}
//                 >
//                   Book Appointment
//                 </button>
//               </div>

//             </div>

//           </div>

//         </div>
//       </nav>

//       {/* Styled css to overwrite white text issue and enhance UI */}
//       <style>{`
//         .btn-find-us {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 6px;
//           background-color: var(--cyan, #0a9cf0ff);
//           color: #ffffff;
//           border: none;
//           text-decoration: none;
//           line-height: 1.2;
//           transition: all 0.25s ease;
//           animation: findUsPulse 1.8s infinite;
//         }

//         .btn-find-us i {
//           font-size: 0.95rem;
//           line-height: 1;
//         }

//         .btn-find-us:hover {
//           background-color: var(--navy, #1a2530);
//           color: #ffffff;
//           animation-play-state: paused;
//           transform: scale(1.05);
//         }

//         @keyframes findUsPulse {
//           0% {
//             box-shadow: 0 0 0 0 rgba(0, 117, 212, 1);
//             transform: scale(1);
//           }
//           50% {
//             box-shadow: 0 0 0 8px rgba(0, 188, 212, 0);
//             transform: scale(1.04);
//           }
//           100% {
//             box-shadow: 0 0 0 0 rgba(0, 148, 212, 0);
//             transform: scale(1);
//           }
//         }

//         @media (max-width: 991.98px) {
//           .collapse.navbar-collapse {
//             display: none;
//           }
//           .collapse.navbar-collapse.show {
//             display: block !important;
//             background-color: #ffffff !important;
//             position: absolute;
//             top: 100%;
//             left: 0;
//             width: 100%;
//             padding: 24px !important;
//             box-shadow: 0 15px 25px rgba(0,0,0,0.1);
//             border-top: 1px solid #f0f0f0;
//             z-index: 999;
//           }
//           .custom-nav-list {
//             flex-direction: column !important;
//             align-items: flex-start !important;
//             margin-bottom: 5px !important;
//             width: 100%;
//           }
//           .custom-nav-list .nav-item {
//             width: 100%;
//           }
//           /* This forcefully overrides the theme's white color conflict */
//           .custom-link-item, 
//           .navbar-light .navbar-nav .nav-link.custom-link-item {
//             color: #1a2530 !important; 
//             font-size: 1.05rem !important;
//             font-weight: 600 !important;
//             padding: 14px 10px !important;
//             width: 100% !important;
//             border-bottom: 1px solid #f3f4f6;
//             display: flex !important;
//             justify-content: space-between;
//             align-items: center;
//             text-decoration: none;
//             transition: all 0.2s ease;
//           }
//           .custom-link-item:hover {
//             background-color: #f8fafc;
//             color: #0d6efd !important;
//             padding-left: 15px !important;
//           }
//           .custom-link-item i {
//             font-size: 0.85rem;
//             color: #9ca3af;
//           }
//           .custom-btn-wrapper {
//             width: 100%;
//             padding-top: 15px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;














// import { useRef } from 'react';
// import AppointmentForm from './AppointmentForm';
// import { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import logoImg from '../assets/img/Dentis_Tree_Namee.png';
// import logo from '../assets/img/Dentis_Tree_logoo.png';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- Yeh line add karein
// import Topbar from './Topbar'; // 1. Topbar ko yahan import kiya

// const Navbar = ({ isSticky, formRef }) => {
//   const services = [
//     { id: 1, title: 'Dental Checkup' },
//     { id: 2, title: 'Teeth Whitening' }
//   ];

//   const navClass = isSticky 
//     ? 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed' 
//     : 'navbar navbar-expand-lg center-nav transparent navbar-light';

//   return (
//     <>
//       {/* 2. Navbar ke upar Topbar add kiya (Yahi agar sticky ho to chhup bhi sakta hai) */}
//       {!isSticky && <Topbar />}

//       <nav className={navClass}
//         style={{
//           position: 'sticky',
//           top: 0,
//           zIndex: 1000,
//           width: '100%',
//           transition: 'all 0.3s ease',
//           backgroundColor: 'white',
//           boxShadow: isSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
//         }}>
//         <div className="container-fluid px-lg-5 flex-lg-row flex-nowrap align-items-center">
          
//           <div className="navbar-brand d-flex align-items-center ms-lg-0" style={{ marginLeft: '-15px' }}>
//             <Link to="/" className="d-flex align-items-center text-decoration-none">
//               <img 
//                 alt="Logo" 
//                 src={logo} 
//                 style={{ 
//                   width: '90px', 
//                   height: 'auto',
//                   transition: '0.3s' 
//                 }} 
//               />
//               <img 
//                 alt="Logo Name" 
//                 src={logoImg} 
//                 className="d-none d-sm-block" 
//                 style={{ 
//                   width: '212px', 
//                   height: 'auto',
//                   marginTop: '5px',
//                   paddingLeft: '0px'
//                 }} 
//               />
//             </Link>
//           </div>

//           {/* 3. FIX: Yeh Hamburger Button hai jo mobile screen par menu show karega */}
//           <button 
//             className="navbar-toggler" 
//             type="button" 
//             data-bs-toggle="offcanvas" 
//             data-bs-target="#offcanvas-nav" 
//             aria-controls="offcanvas-nav" 
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Offcanvas Main Menu */}
//           <div id="offcanvas-nav" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start" tabIndex="-1">
            
//             {/* 4. FIX: Mobile view mein menu ke andar Close (X) button aur header */}
//             <div className="offcanvas-header d-lg-none">
//               <h5 className="offcanvas-title">Menu</h5>
//               <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>

//             <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
//               <ul className="navbar-nav">
//                 <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
//                 <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
//                 <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
//                 <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
//                 <li className="nav-item d-flex align-items-center ms-lg-4 mt-3 mt-lg-0">
//                   <button 
//                     className="btn-modern-appointment w-100 w-lg-auto" 
//                     onClick={() => {
//                       formRef.current.scrollIntoView({ behavior: "smooth" });
//                       // Mobile par click karne ke baad menu close ho jaye
//                       const offcanvasEl = document.getElementById('offcanvas-nav');
//                       const bootstrap = window.bootstrap;
//                       if (bootstrap && offcanvasEl) {
//                         const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
//                         if (instance) instance.hide();
//                       }
//                     }}
//                   >
//                     Book Appointment
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;