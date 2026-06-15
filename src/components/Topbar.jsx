import React from 'react';

const Topbar = () => {
  const contactItems = [
  {
    href: 'tel:+923217450249',
    icon: 'uil-phone-volume',
    text: '+92 321 7450249',
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dentistreeclinic123@gmail.com',
    icon: 'uil-envelope',
    text: 'dentistreeclinic123@gmail.com',
    external: true,
  },
];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/',
      icon: 'uil-facebook-f', // Added -f for better icon support
    },
    {
      href: 'https://www.instagram.com/dentistree_swl?igsh=YjJrazZqYmc0em85',
      icon: 'uil-instagram',
    },
  ];

  return (
    // Changed 'py-2' to 'py-1' to reduce height
    <section className="bg-color d-none d-md-block py-1">
      <style>{`
  .bg-color {
    background: linear-gradient(
      90deg,
      rgb(0, 51, 102) 0%,
      rgb(126, 200, 235) 100%
    ) !important;
  }
`}</style>
      <div className="container text-white">
        <div className="row align-items-center">
          {/* Opening Times */}
          <div className="col-auto d-none d-xl-flex">
            <p className="m-0 text-white lato small">
              Opening Time: Monday To Saturday - (5pm to 9pm)
            </p>
          </div>

          {/* Contact and Socials pushed to the right */}
          <div className="col d-flex justify-content-end align-items-center">
            {contactItems.map(({ href, icon, text }, index) => (
              <div key={index} className="d-flex align-items-center ms-4">
                <i className={`${icon} me-2`} style={{ fontSize: '16px' }} />
                <a href={href} className="link-white hover lato small text-decoration-none text-white">
                  {text}
                </a>
              </div>
            ))}

            {/* Social Links Fix */}
            <div className="d-flex align-items-center ms-4">
              {socialLinks.map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white hover ms-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={icon} style={{ fontSize: '18px' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;