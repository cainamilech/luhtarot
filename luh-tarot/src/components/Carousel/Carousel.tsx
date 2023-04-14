import Slider from "react-slick";
import React, { Component } from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./assets/Slick.scss";

import fb1 from "./assets/imgs/1.jpg";
import fb2 from "./assets/imgs/2.jpg";
import fb3 from "./assets/imgs/3.jpg";
import fb4 from "./assets/imgs/4.jpg";
import fb5 from "./assets/imgs/5.jpg";
import fb6 from "./assets/imgs/6.jpg";
import fb7 from "./assets/imgs/7.jpg";
import fb8 from "./assets/imgs/8.jpg";
import fb9 from "./assets/imgs/9.jpg";
import fb10 from "./assets/imgs/10.jpg";
import fb11 from "./assets/imgs/11.jpg";
import fb12 from "./assets/imgs/12.jpg";
import fb13 from "./assets/imgs/13.jpg";
import fb14 from "./assets/imgs/14.jpg";
import fb15 from "./assets/imgs/15.jpg";
import fb16 from "./assets/imgs/16.jpg";
import fb17 from "./assets/imgs/17.jpg";
import fb18 from "./assets/imgs/18.jpg";
import fb19 from "./assets/imgs/19.jpg";
import fb20 from "./assets/imgs/20.jpg";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slick-session">
        <h3>Feedbacks</h3>
        <Slider {...settings}>
          <div>
            <figure className="fb">
              <img src={fb1} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb2} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb3} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb4} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb5} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb6} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb7} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb8} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb9} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb10} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb11} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb12} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb13} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb14} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb15} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb16} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb17} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb18} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb19} alt="feedback" />
            </figure>
          </div>

          <div>
            <figure>
              <img src={fb20} alt="feedback" />
            </figure>
          </div>
        </Slider>
      </div>
    );
  }
}
