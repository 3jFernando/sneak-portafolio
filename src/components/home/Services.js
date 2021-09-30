import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

function Services() {
  return (
    <section id="features" className="features " data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <header className="section-header">
            <h2>Nuestros Servicios</h2>
          </header>
          <p>
          Los servicios que prestamos en el área de desarrollo de aplicaciones de nuestra empresa le permitirán mejorar la eficiencia y agilidad en los procesos operativos que tenga buscando implementar una solución optima a sus necesidades. Estas y muchas mas ventajas son las que prestamos a nuestros clientes con las ultimas tecnologías de innovación. 
          </p>
        </div>
        <div className="row content">
          <div className="col-md-5 " data-aos="fade-right" data-aos-delay={100}>
            <Swiper
              navigation={false}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="assets/img/features.jpg"
                  className="img-fluid"
                  alt="Enterprise"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="assets/img/features1.jpg"
                  className="img-fluid"
                  alt="Enterprise"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className="col-md-7 pt-4 "
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <h3>
              Beneficios que te ofrecemos como empresa.
            </h3>
            <p className="fst-italic">
            Los principales beneficios que ofrecemos con la ayuda de las ultimas tecnologías que usamos para la implementación y creación en los proyectos de desarrollo de software.
            </p>
            <ul>
              <li>
                <i className="fa fa-check" /> 
                Desarrollamos con herramientas que se ajusta a las necesidades de la empresa o proyecto y los procesos que la integran.
              </li>
              <li>
                <i className="fa fa-check" /> 
                Diseñamos, construimos y desplegamos aplicativos a la medida, de acuerdo a la prioridad y necesidades del proyecto o solución que necesite.
              </li>
              <li>
                <i className="fa fa-check" /> 
                Aplicaciones intuitivas y con fáciles de uso, ajustadas a los direrentes dispositivos permitiéndoles ser más eficaces en sus funciones.
              </li>
              <li>
                <i className="fa fa-check" /> 
                Buscamos que la información y desarrollo de nuestros clientes estén totalmente protegidas con una implementación de seguridad optima
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
