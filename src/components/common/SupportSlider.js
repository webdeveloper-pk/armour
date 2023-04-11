import React, { Component } from "react";
import Slider from "react-slick";
import SupporterCard from "./SupporterCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pinksale from "../../assets/images/section4-pinksale.png";
import pancakeswap from "../../assets/images/section4-pancakeswap.png";
import trustwallet from "../../assets/images/section4-trustwallet.png";
import coingecko from "../../assets/images/section4-coingecko.png";
import dextool from "../../assets/images/section4-dextool.png";
import walletconnect from "../../assets/images/section4-walletconnect.png";

export default class SupportSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <SupporterCard src={pinksale} name="PinkSale" />
          </div>
          <div>
            <SupporterCard src={pancakeswap} name="PancakeSwap" />
          </div>
          <div>
            <SupporterCard src={trustwallet} name="Trust Wallet" />
          </div>
          <div>
            <SupporterCard src={coingecko} name="CoinGecko" />
          </div>
          <div>
            <SupporterCard src={dextool} name="DexTool" />
          </div>
          <div className="mt-2">
            <SupporterCard src={walletconnect} name="WalletConnect" />
          </div>
          <div>
            <SupporterCard src={pinksale} name="PinkSale" />
          </div>
          <div>
            <SupporterCard src={pancakeswap} name="PancakeSwap" />
          </div>
          <div>
            <SupporterCard src={trustwallet} name="Trust Wallet" />
          </div>
          <div>
            <SupporterCard src={coingecko} name="CoinGecko" />
          </div>
          <div>
            <SupporterCard src={dextool} name="DexTool" />
          </div>
          <div className="mt-2">
            <SupporterCard src={walletconnect} name="WalletConnect" />
          </div>
          <div>
            <SupporterCard src={pinksale} name="PinkSale" />
          </div>
          <div>
            <SupporterCard src={pancakeswap} name="PancakeSwap" />
          </div>
          <div>
            <SupporterCard src={trustwallet} name="Trust Wallet" />
          </div>
          <div>
            <SupporterCard src={coingecko} name="CoinGecko" />
          </div>
          <div>
            <SupporterCard src={dextool} name="DexTool" />
          </div>
          <div className="mt-2">
            <SupporterCard src={walletconnect} name="WalletConnect" />
          </div>
        </Slider>
      </div>
    );
  }
}
