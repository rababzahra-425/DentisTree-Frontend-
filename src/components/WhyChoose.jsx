import React from 'react';

// Icons imports remain the same
import expertCare from '../assets/img/icons/expert-care.png';
import advancedTech from '../assets/img/icons/advanced-technologys.png';
import patientCentered from '../assets/img/icons/patient-centered.png';
import trustedDentistry from '../assets/img/icons/trusted-dentistry.png';
import modernFacilities from '../assets/img/icons/modern-facilities.png';
import skilledTeam from '../assets/img/icons/skilled-team.png';

const WhyChoose = () => {
  const features = [
    { title: "Expert Care", icon: expertCare, desc: "Our experienced specialists provide professional dental treatments with a gentle touch and personalized attention." },
    { title: "Advanced Technology", icon: advancedTech, desc: "We utilize state-of-the-art dental equipment and digital imaging to ensure precise and painless procedures." },
    { title: "Patient-Centered", icon: patientCentered, desc: "Your comfort is our top priority. We design every treatment plan around your unique needs and oral health goals." },
    { title: "Trusted Dentistry", icon: trustedDentistry, desc: "With years of proven excellence, we are proud to be the most trusted name in dental care within the community." },
    { title: "Modern Facilities", icon: modernFacilities, desc: "Experience world-class dental services in a clean, modern, and fully sterilized environment built for your relaxation." },
    { title: "Skilled Team", icon: skilledTeam, desc: "Our team consists of highly qualified dental experts dedicated to maintaining your beautiful and healthy smile." }
  ];

  return (
    <section className="py-10 bg-white mt-5 pt-5">
      <div className="container text-center">
        
        

        {/* Heading style remains consistent with the Hospital section */}
        <h2 
          className="services-main-title mb-5" 
          style={{ 
            color: '#003366', 
            fontSize: '3rem', 
            lineHeight: '1.2',
            fontWeight: '800'
          }}
        >
          Dental Clinic for Your <br /> Dental Needs
        </h2>

        <div className="row g-4">
          {features.map((f, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="why-choose-card p-5 rounded-4 h-100 shadow-sm border-0"
                style={{ 
                  backgroundColor: '#f8f9fa', 
                  color: '#003366',
                  transition: '0.4s ease-in-out',
                  cursor: 'pointer'
                }}
              >
                <div className="mb-4 icon-container">
                  <img 
                    src={f.icon} 
                    alt={f.title} 
                    className="feature-icon"
                    style={{ width: '60px', height: '60px', transition: '0.4s' }} 
                  />
                </div>
                <h4 className="fw-bold mb-3" style={{ fontFamily: 'Merriweather, serif' }}>{f.title}</h4>
                <p className="text-muted feature-desc" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .why-choose-card:hover {
          background-color: #003366 !important;
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.15) !important;
        }
        
        .why-choose-card:hover h4,
        .why-choose-card:hover .feature-desc {
          color: #ffffff !important;
        }

        .why-choose-card:hover .feature-icon {
          filter: brightness(0) invert(1);
        }
      `}} />
    </section>
  );
};

export default WhyChoose;