import React from 'react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '923217450249'; // international format, no +
const WHATSAPP_MESSAGE = 'Hello! I found you on your website and would like to book an appointment.';

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp SVG icon — no external font dependency */}
      <svg
        className="wa-icon"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.737 5.468 2.027 7.77L.057 31.944l8.394-1.945A15.93 15.93 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm8.322 22.293c-.346.97-2.011 1.861-2.773 1.935-.713.069-1.384.338-4.656-.973-3.927-1.573-6.44-5.598-6.633-5.856-.192-.258-1.566-2.082-1.566-3.973s.99-2.816 1.343-3.203c.352-.386.768-.482 1.025-.482l.734.014c.236.009.552-.09.864.66.322.779 1.094 2.68 1.19 2.876.096.196.16.426.032.685-.128.26-.192.42-.384.646-.192.225-.403.502-.576.675-.192.192-.392.4-.168.783.224.383.993 1.638 2.13 2.654 1.466 1.306 2.703 1.712 3.086 1.904.384.192.608.16.832-.096.224-.256.96-1.12 1.216-1.504.256-.384.512-.32.864-.192.352.128 2.24 1.056 2.624 1.248.384.192.64.288.736.448.096.16.096.928-.25 1.9z"/>
      </svg>
      <span className="wa-tooltip">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;