import React from 'react';
import aboutImg from '../assets/img/patientimg.png'; 

const AboutSection = () => {
  return (
    <section className="about-section-container">
      <div className="container">
        <div className="row align-items-center gy-10">
          
     
          <div className="col-lg-5 pe-lg-5"> 
            <div className="about-image-wrapper">
              <img 
                src={aboutImg} 
                className="img-fluid about-main-img" 
                alt="Our Expert Dentist" 
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content - adjusted for 2-line heading */}
          <div className="col-lg-7 ps-lg-5">
            <div className="about-subheading-wrapper">
              <h5 className="about-tag">
                Dental Clinic
              </h5>
              <div className="about-decorative-line"></div>
            </div>

            {/* HEADING: Now allows for 2 lines */}
            <h2 className="about-main-title">
              Best Dental Hospital <br /> in Your Location
            </h2>

            <p className="about-text-primary">
              We are committed to providing high-quality dental care using advanced technology 
              and modern techniques. Our experienced dentists ensure that every patient receives 
              personalized treatment in a comfortable and friendly environment.
            </p>
            
            {/* Styled exactly like the header button */}
            <button className="btn-modern-appointment">
              Learn More
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;