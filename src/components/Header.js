import React from 'react';

function Header() {
    return (
        <section id="hero" className="hero d-flex align-items-center">
        <div className="container hero-inside">
          <div className="row">
            <div className="order-2 order-lg-1 col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-in" >
                DESARROLLO DE SOFTWARE PROFESIONAL
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-delay={500}
              >
                - Apps móviles - Páginas web - Software  - Design UX/UI - Tiendas Online - Marketing digital - Y mucho más.
              </h2>
              <div
                data-aos="fade-down"
                data-aos-delay={700}
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
              className="order-1 order-lg-2  col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay={300}
            >
              <img src="/logoNew.png" className="img-fluid" alt="true" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Header;