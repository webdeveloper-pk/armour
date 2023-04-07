import React from "react";
import progressbar from "../../src/assets/images/section5-progressbar.png";

const Tokenomics = () => {
  return (
    <section className="w-full xl:mt-8">
      <div
        className="px-6 md:px-12 lg:px-16 pt-12 xl:pt-16 homepage-container mx-auto"
        id="tokenomics"
      >
        <div className="flex flex-col justify-center items-center text-center md:text-left text-white uppercase">
          <div
            className="text-[26px] font-bold sections-title-color"
            // data-aos="zoom-in-down"
          >
            Tokenomics
          </div>
          <p
            className="text-white text-sm text-center mt-4"
            // data-aos="zoom-in-up"
          >
            Armour Wallet tokenomics is structured to ensure its sustainability.
          </p>
        </div>
        <div className="mt-8 mb-4 lg:mb-6 lg:mt-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-6 px-2 md:px-12 xl:px-24">
          <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[45%] relative lg:-ml-20">
            <div className="flex justify-center">
              <img
                src={progressbar}
                alt="progress-bar"
                className="w-[100%] lg:w-[80%] xl:w-[78%]"
                height="auto"
                // data-aos="zoom-out-up"
              />
            </div>
            <div className="progressbar-position text-center">
              <p
                className="total-supply text-[15px] md:text-[18px]"
                // data-aos="zoom-out-right"
              >
                Total Supply
              </p>
              <h1
                className="text-white font-bold text-2xl md:text-3xl mt-1"
                // data-aos="zoom-out-left"
              >
                1,000,000,000
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-[60%] lg:pl-12">
            <div
              className="flex flex-col w-full lg:w-[70%]"
              // data-aos="zoom-in"
            >
              <div className="custom-border">
                <p className="name text-xs md:text-sm mb-1">Name:</p>
                <p className="text-white text-sm md:text-base">
                  Armour Wallet Token
                </p>
              </div>
              <div className=" flex justify-between pt-6">
                <div className="text-white">
                  <p className="text-xs md:text-sm mb-1">Symbol:</p>
                  <p className="text-sm md:text-base mb-3">$AWT</p>
                  <p className="name text-xs md:text-sm mb-1">Total Supply:</p>
                  <p className="text-sm md:text-base mb-3">1,000,000,000</p>
                  <p className="name text-xs md:text-sm  mb-1">
                    Official Contract Address
                  </p>
                  <p className="text-sm md:text-base">coming soon</p>
                </div>
                <div className="text-white">
                  <p className="text-xs md:text-sm  mb-1">Network:</p>
                  <p className="ttext-sm md:text-base mb-3">
                    Binance Smart Chain
                  </p>
                  <p className="name text-xs md:text-sm mb-1 uppercase">Tax:</p>
                  <p className="text-sm md:text-base mb-3">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
