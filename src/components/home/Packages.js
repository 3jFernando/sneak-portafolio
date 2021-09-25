import React from "react";

const packages = require('../../utils/PACKAGES.json');

function Packages(props) {

  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>NUESTROS PAQUETES Y SERVICIOS</h2>
        </header>
        <div className="row gy-4" data-aos="fade-left">
          {packages.map((item, index) => (
            <div
              className="col-lg-3 col-md-6 "
              data-aos="zoom-in"
              data-aos-delay={item.delay}
              key={index}
            >
              <div className="box">
                <h3 style={{ color: "#07d5c0" }}>{item.title}</h3>
                  <p>{item.subtitle}</p>
                <img src={item.img} className="img-fluid" alt="true" />
                <ul>
                  {item.services.map((service, indexService) => (
                    <li key={indexService}>
                      <i className="fa fa-bolt"></i> <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <a href="/#" className="btn-buy text-decoration-none">
                  Comprar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
