import { useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fatchData } from "../utilits";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/testimonial.json"));
  }, []);
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                {data &&
                  data.map((data, i) => (
                    <SwiperSlide key={i}>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <p>{data.details}</p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <div className="main" data-img-url={data.img} />
                        </div>
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <span>{data.profession}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/2.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/1.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/3.jpg"
              />
              <div
                className="det_image four wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
                data-img-url="img/testimonials/4.jpg"
              />
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/5.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/6.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/7.jpg"
              />
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
