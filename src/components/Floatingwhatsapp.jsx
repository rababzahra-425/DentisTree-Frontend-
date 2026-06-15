import React from 'react';

const FloatingWhatsApp = ({ phone = '923217450249', message = 'Hello! I would like to know more about DentisTree.' }) => {
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      <style>{`
        .floating-whatsapp-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 32px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.45), 0 2px 6px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .floating-whatsapp-btn:hover,
        .floating-whatsapp-btn:focus {
          transform: scale(1.12);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6), 0 3px 8px rgba(0, 0, 0, 0.2);
          color: #ffffff;
        }

        @media (max-width: 576px) {
          .floating-whatsapp-btn {
            width: 52px;
            height: 52px;
            font-size: 28px;
            bottom: 18px;
            right: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;