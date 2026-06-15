// import React, { useEffect, useState } from 'react';

// const ReviewSection = () => {
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({ 
//     customer_name: '', 
//     rating: 5, 
//     comment: '' 
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const FETCH_URL = 'http://127.0.0.1:8000/reviews/';
//   const CREATE_URL = 'http://127.0.0.1:8000/reviews/create/';

//   const fetchInitialData = async () => {
//     try {
//       const response = await fetch(FETCH_URL);
//       const data = await response.json();
//       setReviews(data);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInitialData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(CREATE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setIsError(false);
//         setModalMessage("Thank you! Your review has been submitted successfully.");
//         setShowModal(true);
//         setFormData({ customer_name: '', rating: 5, comment: '' });
//         fetchInitialData();
//       } else {
//         setIsError(true);
//         setModalMessage("Server Error: " + (result.error || "Could not save review."));
//         setShowModal(true);
//       }
//     } catch (error) {
//       setIsError(true);
//       setModalMessage("Network Error: Submission failed.");
//       setShowModal(true);
//     }
//   };

//   return (
//     <section className="py-5 bg-white">
//       <div className="container">
//         {/* UPDATED HEADING: Matches 'Dental Clinic for Your Dental Needs' style */}
//         <div className="text-center mb-5 mt-4">
//           <h2 
//             className="mb-5" 
//             style={{ 
//               color: '#003366', 
//               fontSize: '2.5rem', 
//               lineHeight: '1.2',
//               fontWeight: '800',
//               fontFamily: 'Merriweather, serif' // Ensuring premium serif look
//             }}
//           >
//             What Our Patients Say
//           </h2>
//         </div>

//         {/* --- Modern Form Box --- */}
//         <div className="row justify-content-center mb-5">
//           <div className="col-lg-8">
//             <div className="p-5 rounded-4 shadow-sm border-0" style={{ backgroundColor: '#f0f7ff' }}>
//               <h4 className="fw-bold mb-4" style={{ color: '#003366' }}>Share Your Experience</h4>
//               <form onSubmit={handleSubmit} className="row g-3">
//                 <div className="col-md-8">
//                   <input 
//                     type="text" 
//                     className="form-control border-0 py-3 px-4 shadow-none" 
//                     placeholder="Full Name" 
//                     style={{ borderRadius: '12px' }}
//                     required
//                     value={formData.customer_name} 
//                     onChange={(e) => setFormData({...formData, customer_name: e.target.value})} 
//                   />
//                 </div>
//                 <div className="col-md-4">
//                   <select 
//                     className="form-select border-0 py-3 px-4 shadow-none" 
//                     style={{ borderRadius: '12px' }}
//                     value={formData.rating} 
//                     onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
//                   >
//                     {[5,4,3,2,1].map(num => <option key={num} value={num}>{num} Stars</option>)}
//                   </select>
//                 </div>
//                 <div className="col-12">
//                   <textarea 
//                     className="form-control border-0 py-3 px-4 shadow-none" 
//                     rows="3" 
//                     placeholder="Write your review here..." 
//                     style={{ borderRadius: '12px' }}
//                     required
//                     value={formData.comment} 
//                     onChange={(e) => setFormData({...formData, comment: e.target.value})}
//                   ></textarea>
//                 </div>
//                 <div className="col-12 text-end">
//                   <button type="submit" className="btn px-5 py-2 text-white fw-bold rounded-pill" style={{ backgroundColor: '#003366' }}>
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* --- Aesthetic Review Cards --- */}
//         <div className="row g-4">
//           {reviews.map((r) => (
//             <div className="col-md-6 col-lg-4" key={r.id}>
//               <div className="card h-100 border-0 shadow-sm p-4 rounded-4 hover-lift">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="bg-soft-blue text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" 
//                        style={{ width: '50px', height: '50px', backgroundColor: '#0f60d1', color: '#003366' }}>
//                     {r.customer_name ? r.customer_name[0].toUpperCase() : 'P'}
//                   </div>
//                   <div className="ms-3">
//                     <h6 className="mb-0 fw-bold" style={{ color: '#003366' }}>{r.customer_name}</h6>
//                     <div className="text-warning" style={{ fontSize: '0.85rem' }}>
//                       {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
//                     </div>
//                   </div>
//                 </div>
//                 <hr className="opacity-10 my-3" />
//                 <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic' }}>
//                   "{r.comment}"
//                 </p>
//                 <div className="mt-auto pt-3">
//                   <small className="text-muted opacity-50" style={{ fontSize: '0.75rem' }}>{r.created_at}</small>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .hover-lift {
//           transition: all 0.3s ease;
//         }
//         .hover-lift:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
//         }
//         .form-control:focus, .form-select:focus {
//            background-color: #ffffff;
//            box-shadow: 0 0 0 0.25rem rgba(0, 51, 102, 0.1);
//         }
//       `}} />

//       {/* Modal is kept same as previous successful implementation */}
//       {showModal && (
//         <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 10000, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
//           <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
//             <div className="modal-content border-0 rounded-4 shadow-lg p-4 text-center">
//                <h4 className="fw-bold mb-3" style={{ color: '#003366' }}>{isError ? "Oops" : "Success"}</h4>
//                <p className="text-muted">{modalMessage}</p>
//                <button className="btn btn-primary w-100 mt-3 rounded-pill py-2" onClick={() => setShowModal(false)} style={{ backgroundColor: '#003366', border: 'none' }}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ReviewSection;


import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { API_BASE } from '../api';

const API = API_BASE;

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ 
    customer_name: '', 
    rating: 5, 
    comment: '' 
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const FETCH_URL = `${API}/reviews/`;
  const CREATE_URL = `${API}/reviews/create/`;

  const fetchInitialData = async () => {
    try {
      const response = await fetch(FETCH_URL);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(CREATE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsError(false);
        setModalMessage("Thank you! Your review has been submitted successfully.");
        setShowModal(true);
        setFormData({ customer_name: '', rating: 5, comment: '' });
        fetchInitialData();
      } else {
        setIsError(true);
        setModalMessage("Server Error: " + (result.error || "Could not save review."));
        setShowModal(true);
      }
    } catch (error) {
      setIsError(true);
      setModalMessage("Network Error: Submission failed.");
      setShowModal(true);
    }
  };

  return (
    <section className="py-5">
      <div className="container"  >
        <div className="pt-2" style={{ backgroundColor: '#eef4ff' }}>

        <div className="text-center mb-5 mt-4" >
          <h2 
            className="mb-2" 
            style={{ 
              color: '#003366', 
              fontSize: '2rem', 
              fontWeight: '800',
              fontFamily: 'Merriweather, serif' 
            }}
          >
            What Our Patients Say
          </h2>
          <p className="text-muted">Trusted by hundreds of happy smiles</p>
        </div>

        {/* --- Review Slider --- */}
        <div className="mb-5 px-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              // 640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper pb-5"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <div className="card h-100 border-0 shadow-md p-3 rounded-4 hover-lift mx-1">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                         style={{ width: '45px', height: '45px', backgroundColor: '#003366' }}>
                      {r.customer_name ? r.customer_name[0].toUpperCase() : 'P'}
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold" style={{ color: '#003366' }}>{r.customer_name}</h6>
                      <div className="text-warning" style={{ fontSize: '0.8rem' }}>
                        {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.7rem', lineHeight: '1.5', fontStyle: 'italic', minHeight: '80px' }}>
                    "{r.comment}"
                  </p>
                  <div className="mt-1 pt-1 border-top">
                    <small className="text-muted opacity-50" style={{ fontSize: '0.7rem' }}>{r.created_at}</small>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>

        {/* --- Form Section --- */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 rounded-4 shadow-sm border-0" style={{ backgroundColor: '#f0f7ff' }}>
              <h5 className="fw-bold mb-4" style={{ color: '#003366' }}>Leave a Review</h5>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-8">
                  <input 
                    type="text" 
                    className="form-control border-0 py-2 px-3 shadow-none" 
                    placeholder="Full Name" 
                    style={{ borderRadius: '10px' }}
                    required
                    value={formData.customer_name} 
                    onChange={(e) => setFormData({...formData, customer_name: e.target.value})} 
                  />
                </div>
                <div className="col-md-4">
                  <select 
                    className="form-select border-0 py-2 px-3 shadow-none" 
                    style={{ borderRadius: '10px' }}
                    value={formData.rating} 
                    onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                  >
                    {[5,4,3,2,1].map(num => <option key={num} value={num}>{num} Stars</option>)}
                  </select>
                </div>
                <div className="col-12">
                  <textarea 
                    className="form-control border-0 py-2 px-3 shadow-none" 
                    rows="2" 
                    placeholder="Your message..." 
                    style={{ borderRadius: '10px' }}
                    required
                    value={formData.comment} 
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  ></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn px-4 py-2 text-white fw-bold rounded-pill" style={{ backgroundColor: '#003366' }}>
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hover-lift { transition: transform 0.3s ease; }
        .hover-lift:hover { transform: translateY(-5px); }
        .swiper-pagination-bullet-active { background: #003366 !important; }
        .form-control:focus { box-shadow: 0 0 0 0.2rem rgba(0, 51, 102, 0.1) !important; }
      `}} />

      {/* Modal remains the same... */}
      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 10000, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
            <div className="modal-content border-0 rounded-4 shadow-lg p-4 text-center">
               <h4 className="fw-bold mb-3" style={{ color: '#003366' }}>{isError ? "Oops" : "Success"}</h4>
               <p className="text-muted">{modalMessage}</p>
               <button className="btn btn-primary w-100 mt-3 rounded-pill py-2" onClick={() => setShowModal(false)} style={{ backgroundColor: '#003366', border: 'none' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;