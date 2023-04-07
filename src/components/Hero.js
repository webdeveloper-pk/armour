import React from "react";
import bg from "../../src/assets/images/hero-bg.png";
import hero1 from "../../src/assets/images/hero-image.png";

const Hero = () => {
  return (
    <section className="w-full relative heroWrapper">
      <div className="absolute hero-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 pt-12 pb-12 lg:pt-52 lg:pb-24 text-light-white homepage-container mx-auto">
        <div className="mx-auto flex lg:flex-row flex-col items-center gap-y-16">
          <div className="w-[100%] lg:w-[53%] xl:w-[55%] flex flex-col md:items-start md:text-left items-center text-center z-50">
            <h1
              className="hidden xl:block text-2xl xl:text-[32px] mb-4 font-bold text-light-white uppercase"
              // data-aos="zoom-in-down"
            >
              Disrupting
              <span className="pl-2 heading-color sections-title-color">
                Crypto Wallet Experience
              </span>
              <br />
              <div className="mt-4">with Game-Changing Solutions!</div>
            </h1>
            <h1
              className="block xl:hidden text-2xl xl:text-[31px] mb-4 font-bold text-light-white uppercase"
              // data-aos="zoom-in-down"
            >
              Disrupting
              <span className="px-2 heading-color sections-title-color">
                Crypto Wallet Experience
              </span>
              with Game-Changing Solutions!
            </h1>
            <div
              className="mb-7 w-[95%] md:w-[100%] xl:w-[85%] 2xl:w-[78%] text-sm md:text-[16px] hero-description font-light"
              // data-aos="zoom-in-right"
            >
              Armour Wallet is an innovative, non-custodial, multi-chain crypto
              wallet that leverages cutting-edge AI technology to revolutionize
              traditional wallet systems. With its ground-breaking solutions,
              Armour Wallet offers users a new level of convenience in managing
              their diverse cryptocurrency holdings securely within a single,
              user-friendly interface, empowering them to take control of their
              digital assets with confidence.
            </div>
            <div
              className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4 justify-center"
              // data-aos="zoom-in-up"
            >
              <a
                href="/#"
                target="_self"
                //  data-aos="zoom-in-right"
              >
                <button className="hero-button text-white text-xs md:text-sm font-semibold py-3 px-6 uppercase">
                  BUY PREsale Now
                </button>
              </a>
              <a
                href=" https://t.me/ArmourWallet"
                target="_blank"
                // data-aos="zoom-in-up"
              >
                <button className="flex items-center gap-x-2 hero-button2 text-white text-xs md:text-sm font-semibold py-2.5 px-4 uppercase">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L6.39308 12.3911C5.85317 12.2255 5.84996 11.854 6.51397 11.5871L16.247 7.82754C16.8115 7.59644 17.1325 7.88842 16.9495 8.61641L15.2917 16.4377C15.1763 16.9941 14.8407 17.1266 14.3759 16.8698L11.825 14.9823L10.6361 16.1297C10.5139 16.2476 10.4145 16.3489 10.2273 16.3743C10.04 16.3996 9.88564 16.3442 9.77337 16.0337L8.90378 13.1628L8.89113 13.1708Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  COMMUNITY
                </button>
              </a>
            </div>
          </div>
          <div className="w-[100%] lg:w-[45%] flex justify-center items-center z-50">
            <img
              src={hero1}
              alt="hero"
              className="w-[90%] md:w-[70%] lg:w-[90%] xl:w-[100%] h-auto"
              // data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
