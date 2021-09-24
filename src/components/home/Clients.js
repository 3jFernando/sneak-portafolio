import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

//api
const ApiClients = require('../../utils/CLIENTS.json');

SwiperCore.use([Navigation, Autoplay]);

function Clients(props) {

  // const [items, setItems] = useState(ApiClients); // JSON -> items

  return (
    <div id="clients" className="Clients body-space">
      <h2>NUESTROS CLIENTES</h2>
      <br />
      <Swiper 
            navigation={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}    
            pagination={{
              clickable: true
            }}
            className="mySwiper">
        {ApiClients.map((item, index) => (
        <SwiperSlide>
          <div className="testimonial-item d-flex align-items-stretch" key={index}>
            <div className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <div className="profile">
              <img
                src={item.image}
                className="testimonial-img"
                alt
              />
              <h3>{item.client}</h3>
              <h4>{item.description}</h4>
              <br/>
              <p>
                {item.testimony}
              </p>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Clients;
