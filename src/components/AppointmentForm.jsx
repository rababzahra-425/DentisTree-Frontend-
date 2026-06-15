// import React, { useState, useEffect } from 'react';

// const AppointmentForm = ({ formRef}) => {
//   const [services, setServices] = useState([]);
//   const [formData, setFormData] = useState({
//     patient_name: '',
//     patient_phone: '',
//     patient_email: '',
//     service: '', 
//     date: '',    
//     time: '10:00' 
//   });
  
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     fetch('${API}/services/')
//       .then(res => res.json())
//       .then(data => setServices(data))
//       .catch(err => console.error("Error fetching services:", err));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fullDateTime = `${formData.date} ${formData.time}`;
//     const submissionData = { ...formData, date: fullDateTime };

//     try {
//       const response = await fetch('${API}/appointments/create/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(submissionData),
//       });

//       if (response.ok) {
//         setIsError(false);
//         setModalMessage("Appointment Booked Successfully!");
//         setShowModal(true);
//         setFormData({ patient_name: '', patient_phone: '', patient_email: '', service: '', date: '', time: '10:00' });
//       } else {
//         setIsError(true);
//         setModalMessage("Error: Could not book appointment.");
//         setShowModal(true);
//       }
//     } catch (error) {
//       setIsError(true);
//       setModalMessage("Server connection failed.");
//       setShowModal(true);
//     }
//   };

//   return (
//     <section ref={formRef} className="py-5 bg-white">
//       <div className="container">
//         <div className="row align-items-center">
          
//           {/* Text Content */}
//           <div className="col-lg-5 mb-5 mb-lg-0">
//             {/* Main Heading - Now solid dark blue */}
//             <h2 
//               className="mb-2" 
//               style={{ 
//                 color: '#003366', 
//                 fontSize: '3rem', 
//                 lineHeight: '1.1',
//                 fontWeight: '800',
//                 fontFamily: "'Merriweather', serif"
//               }}
//             >
//               Book An Appointment
//             </h2>

//             {/* Sub-heading - Moved below and changed to black */}
//             <p 
//               className="fw-bold text-uppercase mb-4" 
//               style={{ 
//                 color: '#535355', 
//                 letterSpacing: '1px',
//                 fontSize: '0.9rem' 
//               }}
//             >
//               Get Rid Of Any Kind Of Dental Issue Now
//             </p>
//           </div>

//           {/* Form Box */}
//           <div className="col-lg-7">
//             <form 
//               className="p-4 p-md-5 rounded-5 border-0 shadow-lg" 
//               onSubmit={handleSubmit}
//               style={{ 
//                 backgroundColor: '#f8fbff',
//                 backgroundImage: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)'
//               }}
//             >
//               <div className="row g-4">
//                 <div className="col-md-6">
//                   <input type="text" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" placeholder="Full Name *" required 
//                     value={formData.patient_name} onChange={(e) => setFormData({...formData, patient_name: e.target.value})} />
//                 </div>

//                 <div className="col-md-6">
//                   <input type="tel" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" placeholder="Phone Number *" required 
//                     value={formData.patient_phone} onChange={(e) => setFormData({...formData, patient_phone: e.target.value})} />
//                 </div>

//                 <div className="col-md-12">
//                   <input type="email" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" placeholder="Email Address *" required 
//                     value={formData.patient_email} onChange={(e) => setFormData({...formData, patient_email: e.target.value})} />
//                 </div>

//                 <div className="col-12">
//                   <select className="form-select border-0 py-3 px-4 sleek-input shadow-sm" required
//                     value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
//                     <option value="">Select Dental Service *</option>
//                     {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
//                   </select>
//                 </div>

//                 <div className="col-md-6">
//                   <label className="small fw-bold text-muted mb-2 ms-2">Preferred Date</label>
//                   <input type="date" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" required 
//                     value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="small fw-bold text-muted mb-2 ms-2">Preferred Time</label>
//                   <input type="time" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" required 
//                     value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
//                 </div>

//                 <div className="col-12 mt-4">
//                   <button 
//                     type="submit" 
//                     className="btn px-5 py-3 fw-bold text-white shadow-sm hover-up" 
//                     style={{ 
//                       backgroundColor: '#003366', 
//                       borderRadius: '50px',
//                       transition: 'all 0.3s ease',
//                       letterSpacing: '1px'
//                     }}
//                   >
//                     BOOK APPOINTMENT NOW
//                   </button>
//                   <span className="small text-muted ms-3 d-block d-md-inline mt-2 mt-md-0">* Required Fields</span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .sleek-input {
//           border-radius: 15px !important;
//           transition: transform 0.2s ease;
//         }
//         .sleek-input:focus {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 20px rgba(0, 170, 255, 0.1) !important;
//         }
//         .hover-up:hover {
//           transform: translateY(-3px);
//           background-color: #002244 !important;
//           box-shadow: 0 10px 20px rgba(0, 51, 102, 0.2) !important;
//         }
//       `}</style>

//       {/* Success/Error Modal */}
//       {showModal && (
//         <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
//           <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
//             <div className="modal-content border-0 rounded-4 shadow-lg p-5 text-center">
//               <h3 className="fw-bold mb-3" style={{ color: '#003366' }}>{isError ? "Oops!" : "Perfect!"}</h3>
//               <p className="text-muted mb-4">{modalMessage}</p>
//               <button className="btn btn-primary w-100 py-3 fw-bold rounded-pill" onClick={() => setShowModal(false)} style={{ backgroundColor: '#003366', border: 'none' }}>CLOSE</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AppointmentForm;












import React, { useState, useEffect } from 'react';
import { API_BASE } from '../api';

const API = API_BASE;

const AppointmentForm = ({ formRef}) => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    patient_name: '',
    patient_phone: '',
    patient_email: '',
    service: '', 
    date: '',    
    time: '10:00' 
  });
  
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('${API}/services/')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Error fetching services:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullDateTime = `${formData.date} ${formData.time}`;
    const submissionData = { ...formData, date: fullDateTime };

    try {
      const response = await fetch('${API}/appointments/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsError(false);
        setModalMessage("Appointment Booked Successfully!");
        setShowModal(true);
        setFormData({ patient_name: '', patient_phone: '', patient_email: '', service: '', date: '', time: '10:00' });
      } else {
        setIsError(true);
        setModalMessage("Error: Could not book appointment.");
        setShowModal(true);
      }
    } catch (error) {
      setIsError(true);
      setModalMessage("Server connection failed.");
      setShowModal(true);
    }
  };

  return (
    <section id="appointment" ref={formRef} className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Content */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <h2 
              className="mb-2" 
              style={{ 
                color: '#003366', 
                fontSize: '3rem', 
                lineHeight: '1.1',
                fontWeight: '800',
                fontFamily: "'Merriweather', serif"
              }}
            >
              Book An Appointment
            </h2>

            <p 
              className="fw-bold text-uppercase mb-4" 
              style={{ 
                color: '#535355', 
                letterSpacing: '1px',
                fontSize: '0.9rem' 
              }}
            >
              Get Rid Of Any Kind Of Dental Issue Now
            </p>
          </div>

          {/* Form Box */}
          <div className="col-lg-7">
            <form 
              className="p-4 p-md-5 rounded-5 border-0 shadow-lg" 
              onSubmit={handleSubmit}
              style={{ 
                backgroundColor: '#f8fbff',
                backgroundImage: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)'
              }}
            >
              <div className="row g-4">
                <div className="col-md-6">
                  <input type="text" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" placeholder="Full Name *" required 
                    value={formData.patient_name} onChange={(e) => setFormData({...formData, patient_name: e.target.value})} />
                </div>

                <div className="col-md-6">
                  <input type="tel" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" placeholder="Phone Number *" required 
                    value={formData.patient_phone} onChange={(e) => setFormData({...formData, patient_phone: e.target.value})} />
                </div>

                <div className="col-md-12">
                  <input type="email" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" placeholder="Email Address *" required 
                    value={formData.patient_email} onChange={(e) => setFormData({...formData, patient_email: e.target.value})} />
                </div>

                <div className="col-12">
                  <select className="form-select border-0 py-3 px-4 sleek-input shadow-sm" required
                    value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                    <option value="">Select Dental Service *</option>
                    {services.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="small fw-bold text-muted mb-2 ms-2">Preferred Date</label>
                  <input type="date" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" required 
                    value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
                </div>

                <div className="col-md-6">
                  <label className="small fw-bold text-muted mb-2 ms-2">Preferred Time</label>
                  <input type="time" className="form-control border-0 py-3 px-4 sleek-input shadow-sm" required 
                    value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
                </div>

                {/* FIX: Better flex wrapping and dynamic widths for absolute responsiveness */}
                <div className="col-12 mt-4 d-flex flex-column flex-md-row align-items-center justify-content-start gap-3">
                  <button 
                    type="submit" 
                    className="btn w-100 w-md-auto px-5 py-3 fw-bold text-white shadow-sm hover-up" 
                    style={{ 
                      backgroundColor: '#003366', 
                      borderRadius: '50px',
                      transition: 'all 0.3s ease',
                      letterSpacing: '1px'
                    }}
                  >
                    BOOK APPOINTMENT NOW
                  </button>
                  <span className="small text-muted m-0 text-center text-md-start">* Required Fields</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .sleek-input {
          border-radius: 15px !important;
          transition: transform 0.2s ease;
        }
        .sleek-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 170, 255, 0.1) !important;
        }
        .hover-up:hover {
          transform: translateY(-3px);
          background-color: #002244 !important;
          box-shadow: 0 10px 20px rgba(0, 51, 102, 0.2) !important;
        }
      `}</style>

      {/* Success/Error Modal */}
      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
            <div className="modal-content border-0 rounded-4 shadow-lg p-5 text-center">
              <h3 className="fw-bold mb-3" style={{ color: '#003366' }}>{isError ? "Oops!" : "Perfect!"}</h3>
              <p className="text-muted mb-4">{modalMessage}</p>
              <button className="btn btn-primary w-100 py-3 fw-bold rounded-pill" onClick={() => setShowModal(false)} style={{ backgroundColor: '#003366', border: 'none' }}>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AppointmentForm;