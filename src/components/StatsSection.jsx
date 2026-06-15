import React from 'react';

import iconOne from '../assets/img/icons/one.webp';
import iconTwo from '../assets/img/icons/two.webp';
import iconThree from '../assets/img/icons/three.webp';
import iconFour from '../assets/img/icons/four.webp';
import iconFive from '../assets/img/icons/five.webp';
import iconSix from '../assets/img/icons/six.webp';

const StatsSection = () => {
  const statsData = [
    { id: 1, number: "20,000+", label: "Patient's Treated", icon: iconOne },
    { id: 2, number: "13,000+", label: "Root Canal Treatment", icon: iconTwo },
    { id: 3, number: "350+", label: "Dental Implants", icon: iconThree },
    { id: 4, number: "15,000+", label: "Teeth Whitening", icon: iconFour },
    { id: 5, number: "8,000+", label: "Braces & Aligners", icon: iconFive },
    { id: 6, number: "1,200+", label: "Happy Families", icon: iconSix },
  ];

  return (
    <section 
      style={{ 
        // 1. Move the blue start point UP (from 100px to 50px)
        // 2. Increase the paddingBottom so the blue extends further down
        background: 'linear-gradient(to bottom, #ffffff 1px, #003366 1px)',
        paddingBottom: '120px', 
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center"> 
          {statsData.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div 
                className="card border-0 shadow-lg text-center rounded-4"
                style={{ 
                  transition: 'all 0.3s ease',
                  maxWidth: '320px',
                  margin: '0 auto',
                  padding: '30px 15px',
                  backgroundColor: '#ffffff'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body p-0">
                  <div className="mb-3">
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }} 
                    />
                  </div>
                  
                  <h3 className="fw-bold mb-1" style={{ color: '#003366', fontSize: '1.6rem' }}>
                    {item.number}
                  </h3>
                  
                  <p className="text-muted mb-0 fw-semibold" style={{ fontSize: '0.85rem' }}>
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;