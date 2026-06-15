import React from 'react';

const BestDentist = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container">
        <div className="row g-5 align-items-center">
          
          {/* Left Side: Text Content */}
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="pe-lg-5">
              {/* UPDATED HEADING: Now uses the global branding class */}
              <h2 className="services-main-title text-start mb-4">
                Best Dentist In Your Location
              </h2>
              
              <p className="text-muted mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                We are committed to providing high-quality dental care with a focus on comfort, precision, and patient satisfaction. 
                Our experienced team ensures that every treatment is tailored to meet your individual needs, using modern techniques 
                and advanced technology.
              </p>

              <p className="text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                From routine check-ups to advanced dental procedures, our goal is to deliver excellent results while maintaining 
                the highest standards of care.
              </p>
            </div>
          </div>

          {/* Right Side: Image Composition remains the same */}
          <div className="col-lg-5 order-1 order-lg-2 position-relative">
             {/* ... rest of your image code ... */}
             <div className="position-relative z-1">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&h=650" 
                alt="Professional Dentist" 
                className="img-fluid rounded-4 shadow"
                style={{ width: '85%', marginLeft: '15%' }}
              />
              <div className="position-absolute" style={{ bottom: '-30px', left: '0', width: '60%', zIndex: 2 }}>
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=400&h=300" 
                  alt="Dental Clinic Team" 
                  className="img-fluid rounded-4 shadow-lg border border-4 border-white"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestDentist;