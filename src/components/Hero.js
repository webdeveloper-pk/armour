import React from "react";
import bg from "../../src/assets/images/hero-bg.png";
import hero1 from "../../src/assets/images/hero1-bg.png";

const Hero = () => {
  return (
    <section className="w-full relative">
      <div className="absolute top-[15%]">
        <img src={bg} alt="hero-bg" />
      </div>
      <div className="px-6 md:px-16 pt-12 lg:pt-0 pb-12 md:pb-16 text-light-white homepage-container mx-auto">
        <div className="mx-auto flex lg:flex-row flex-col items-center gap-y-12 lg:-mt-12">
          <div className="w-[100%] lg:w-[55%] flex flex-col md:items-start md:text-left items-center text-center z-50">
            <h1 className="text-2xl xl:text-3xl mb-4 font-bold text-light-white uppercase">
              Disrupting
              <span className="pl-2 heading-color sections-title-color">
                Crypto Wallet Experience
              </span>
              <br /> with Game-Changing Solutions!
            </h1>
            <span className="mb-7 w-full text-base hero-description">
              Armour Wallet is non-custodial,multi-chain, cutting-edge crypto
              wallet modelled to revolutionise traditional wallet systems
              through its ground-breaking solutions. Experience a new level of
              convenience in managing your cryptocurrencies all in one wallet.
            </span>
            <div className="flex justify-center">
              <button className="custom-button text-white text-xs md:text-sm font-semibold py-2.5 px-6 uppercase cursor-pointer">
                Launching Soon
              </button>
            </div>
          </div>
          <div className="w-[100%] lg:w-[45%] flex justify-center items-center z-50">
            <img src={hero1} alt="hero" width="55%" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
