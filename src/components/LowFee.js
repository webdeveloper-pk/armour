import React from "react";
import bg from "../../src/assets/images/nft-offerings-bg.png";
import hero1 from "../../src/assets/images/low-fee-image.png";

const LowFee = () => {
  return (
    <section className="w-full relative mt-0 lg:mt-16">
      <div className="fee-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 text-light-white homepage-container mx-auto">
        <div className="mx-auto flex lg:flex-row flex-col items-center gap-y-12 md:px-8 xl:px-20">
          <div className="w-[100%] lg:w-[40%] flex justify-center lg:justify-start items-center z-50">
            <img
              src={hero1}
              alt="hero"
              className="w-[75%] md:w-[50%] lg:w-[80%] xl:w-[85%] h-auto"
              // data-aos="zoom-in-right"
            />
          </div>
          <div className="w-[100%] lg:w-[60%] flex flex-col md:items-end md:text-left items-center text-center z-50">
            <h1
              className="w-full xl:w-[100%] text-2xl xl:text-[29px] mb-4 font-bold text-light-white uppercase"
              // data-aos="fade-down-left"
              style={{ lineHeight: "40px" }}
            >
              Exchange through our crypto platform <br />
              <span className="sections-title-color">with low fees,</span>
            </h1>
            <span
              className="mb-7 w-full text-[14px] md:text-[17px] nft-description xl:w-[100%]"
              // data-aos="fade-up-left"
            >
              Introducing the most affordable and efficient crypto exchange
              platform in town! Say goodbye to those sky-high transaction fees
              that eat away at your hard-earned cryptocurrency. Our platform
              offers a low-fee solution for all your crypto exchange needs.
              Enjoy lightning-fast transaction times, top-notch security
              features, and unparalleled customer service. Don't let high
              transaction fees hold you back any longer - join our platform
              today and experience the future of crypto exchange!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowFee;
