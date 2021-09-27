import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

//api
const ApiClients = require("../../utils/CLIENTS.json");

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Clients(props) {
  return (
    <div id="clients" className="Clients body-space">
      <h2>NUESTROS CLIENTES</h2>
      <br />
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
        pagination={{
          clickable: true,
          "dynamicBullets": true
        }}
        className="mySwiper"
      >
        {ApiClients.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-item d-flex align-items-stretch">
              <div className="stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="profile">
                <img src={item.image} className="testimonial-img" alt="true" />
                <h3>{item.client}</h3>
                <h4>{item.description}</h4>
                <br />
                <p>{item.testimony}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Clients;
