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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
              Dignissimos provident quasi corporis voluptates sit assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="fa fa-check" /> Ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </li>
              <li>
                <i className="fa fa-check" /> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="fa fa-check" /> Ullam est qui quos consequatur eos
                accusamus.
              </li>
              <li>
                <i className="fa fa-check" /> Ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
