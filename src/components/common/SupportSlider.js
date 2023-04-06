import React, { Component } from "react";
import Slider from "react-slick";
import SupporterCard from "./SupporterCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bscscan from "../../assets/images/section4-bscscan.png";
import dexview from "../../assets/images/section4-dexview.png";
import coinmarketcap from "../../assets/images/section4-coinmarketcap.png";

export default class SupportSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 6000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
      <div>
        <Slider {...settings}>
          <div>
            <a href="https://bscscan.com/" target="_blank" rel="noreferrer">
              <SupporterCard src={bscscan} name="Bscscan" />
            </a>
          </div>
          <div>
            <a href="https://www.dexview.com/" target="_blank" rel="noreferrer">
              <SupporterCard src={dexview} name="DexView" />
            </a>
          </div>
          <div>
            <a
              href="https://coinmarketcap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SupporterCard src={coinmarketcap} name="Coinmarketcap" />
            </a>
          </div>
          <div>
            <a href="https://bscscan.com/" target="_blank" rel="noreferrer">
              <SupporterCard src={bscscan} name="Bscscan" />
            </a>
          </div>
          <div>
            <a href="https://www.dexview.com/" target="_blank" rel="noreferrer">
              <SupporterCard src={dexview} name="DexView" />
            </a>
          </div>
          <div>
            <a
              href="https://coinmarketcap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SupporterCard src={coinmarketcap} name="Coinmarketcap" />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
