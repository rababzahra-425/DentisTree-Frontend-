import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import images with matching variable names
import photo1 from '../assets/img/photo1.jpg';
import photo2 from '../assets/img/photo2.jpg';
import photo3 from '../assets/img/photo3.webp';
import photo4 from '../assets/img/photo4.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TreatmentsGallery = () => {
  // Fixed the mapping to use your imported variable names
  const treatments = [
    { id: 1, image: photo1 }, 
    { id: 2, image: photo2 },
    { id: 3, image: photo3 },
    { id: 4, image: photo4 },
  ];

  return (
    <section className="py-5 mt-5 mb-5" style={{ backgroundColor: '#eef4ff' }}>
      <div className="container text-center">
        {/* Main heading styled to match 'Best Dental Hospital' */}
        <h2 className="services-main-title mb-3">
          Dental Treatments <br /> in Your Location
        </h2>
        
        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.7' }}>
          Our mission is to provide world-class dental care with a focus on patient comfort 
          and long-term oral health. We combine years of expertise with the latest medical 
          advancements to ensure you get the best smile possible.
        </p>

        <div className="position-relative px-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {treatments.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-4 overflow-hidden shadow-sm border-0 bg-white">
                  <img 
                    src={item.image} 
                    alt="Treatment Result" 
                    className="w-100" 
                    style={{ height: '400px', objectFit: 'cover' }} 
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows with blue background */}
          <button className="custom-prev position-absolute top-50 start-0 translate-middle-y btn-slider-blue z-3">
            <i className="bi bi-chevron-left text-white"></i>
          </button>
          <button className="custom-next position-absolute top-50 end-0 translate-middle-y btn-slider-blue z-3">
            <i className="bi bi-chevron-right text-white"></i>
          </button>
        </div>

        <div className="custom-pagination mt-4 d-flex justify-content-center gap-2"></div>
      </div>
    </section>
  );
};

export default TreatmentsGallery;