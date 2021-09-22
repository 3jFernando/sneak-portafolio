import React from 'react';

function Header() {
    return (
        <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className="aos-init aos-animate">
                DESARROLLO DE SOFTWARE PROFESIONAL
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-delay={400}
                className="aos-init aos-animate"
              >
                - Apps móviles - Páginas web - Software  - Design UX/UI - Tiendas Online - Marketing digital - Y mucho más.
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay={600}
                className="aos-init aos-animate"
              >
                <div className="PackagesContentItem-onlie text-center text-lg-start">
                  <a
                    href="#about"
                    className="text-decoration-none scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <button>Contactanos</button>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img src="/logo192.png" className="img-fluid" alt />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;