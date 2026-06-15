import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';


import HeroImage1 from '../assets/img/HeroImage.jpeg'; 
import HeroImage2 from '../assets/img/HeroImage2.jpg'; 
import HeroImage3 from '../assets/img/HeroImage3.jpg'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={'fade'} 
        speed={1000}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${HeroImage1})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${HeroImage2})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${HeroImage3})` }}></div>
        </SwiperSlide>
      </Swiper>

      <div className="container hero-content-overlay">
        <div className="row align-items-center hero-full-height">
          <div className="col-lg-6 hero-text-container animate__animated animate__fadeInLeft">
            <span className="hero-subheading">5 Years of Dental Excellence</span>
            <h1 className="hero-title">
              Your Smile, <br /> Our Commitment
            </h1>
            <p className="hero-description">
              Discover the difference exceptional dentistry makes with DentisTree. 
              Personalized care delivered with modern technology.
            </p>
            {/* <div className="hero-actions">
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;