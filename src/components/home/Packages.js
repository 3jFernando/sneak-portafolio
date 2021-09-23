import React from "react";

function Packages(props) {
  const packages = [
    {
      title: "PÁGINA WEB",
      subtitle: "Página web contenido estadico",
      img: "/assets/img/pricing-free.png",
      delay: 100,
      services: [
        "Formulario de contacto",
        "1 banner",
        "Diseño 100% personalizado",
        "Vinculación redes sociales",
        "Diseño responsive (Mobile,Tablet, PC)",
        "Hosting y dominio incluido",
        "Galería de fotos hasta 15 imágenes Inclusión de un video",
        "Botón llamar y whatsapp. Vinculación de videos.",
      ],
    },
    {
      title: "PÁGINA WEB PROFESIONAL",
      subtitle: "Página web contenido dínamico",
      img: "assets/img/pricing-starter.png",
      delay: 200,
      services: [
        "Formulario de contacto",
        "2 banner",
        "Diseño 100% personalizado",
        "Vinculación redes sociales",
        "Administrador de contenidos",
        "Diseño responsive (Mobile,Tablet, PC)",
        "Hosting y dominio incluido",
        "Certificado seguridad SSL",
        "Galería de fotos hasta 25 imágenes Inclusión de un video",
        "Botón llamar y whatsapp. Vinculación de videos.",
        "Modulo de noticias o blog administrable.",
      ],
    },
    {
      title: "TIENDA VIRTUAL",
      subtitle: "NAVEGACIÓN PERSONALIZADA",
      img: "assets/img/pricing-business.png",
      delay: 300,
      services: [
        "Formulario de contacto",
        "Diseño 100% personalizado",
        "Vinculación redes sociales",
        "Administrador de contenidos",
        "Diseño responsive (Mobile,Tablet, PC)",
        "Hosting y dominio incluido",
        "Certificado seguridad SSL",
        "Galeria de fotos",
        "Botón llamar y whatsapp. Vinculación de videos.",
        "Modulo de noticias o blog administrable.",
        "Integración pagos Online",
      ],
    },
    {
      title: "FACTURACION ELECTRONICA",
      subtitle: "NAVEGACIÓN PERSONALIZADA",
      img: "assets/img/pricing-ultimate.png",
      delay: 400,
      services: [
        "Formulario de contacto",
        "Diseño 100% personalizado",
        "Vinculación redes sociales",
        "Administrador de contenidos",
        "Diseño responsive (Mobile,Tablet, PC)",
        "Hosting y dominio incluido",
        "Certificado seguridad SSL",
        "Galeria de fotos",
        "Botón llamar y whatsapp. Vinculación de videos.",
        "Modulo de noticias o blog administrable.",
        "Integración pagos Online",
      ],
    },
  ];

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
                <img src={item.img} className="img-fluid" alt />
                <ul>
                  {item.services.map((service, indexService) => (
                    <li key={indexService}>
                      <i className="fa fa-bolt"></i> <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn-buy text-decoration-none">
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
