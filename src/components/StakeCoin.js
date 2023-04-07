import React from "react";
import bg from "../../src/assets/images/stake-bg.png";
import hero1 from "../../src/assets/images/stake-coin-image.png";

const StakeCoin = () => {
  return (
    <section className="w-full relative">
      <div className="stake-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 text-light-white homepage-container mx-auto">
        <div className="mx-auto flex lg:flex-row flex-col items-center gap-y-12 md:px-8 xl:px-20">
          <div className="w-[100%] lg:w-[60%] flex flex-col md:items-start md:text-left items-center text-center z-50">
            <h1
              className="w-full xl:w-[100%] text-2xl xl:text-[29px] mb-4 font-bold text-light-white uppercase"
              // data-aos="fade-down-right"
              style={{ lineHeight: "40px" }}
            >
              <span className="pr-2 sections-title-color">Stake your coin</span>
              and get an opportunity to earn a passive income
            </h1>
            <span
              className="mb-7 w-full  text-[14px] md:text-[17px] nft-description xl:w-[100%]"
              // data-aos="fade-up-right"
            >
              Looking for a smart and reliable way to grow your cryptocurrency
              holdings? Stake your coin with us and start earning passive income
              today! Our staking program is designed to help you maximize your
              returns while minimizing your risk. With our user-friendly
              platform and intuitive interface, staking has never been easier.
              Simply choose the coin you want to stake, select your staking
              period, and watch your holdings grow over time. Plus, with our
              competitive staking rewards and low fees, you can rest assured
              that you're getting the best value for your investment. Don't miss
              out on this exciting opportunity - stake your coin with us now!
            </span>
          </div>
          <div className="w-[100%] lg:w-[40%] flex justify-center lg:justify-end items-center z-50">
            <img
              src={hero1}
              alt="hero"
              className="w-[75%] md:w-[50%] lg:w-[80%] xl:w-[85%] h-auto"
              // data-aos="zoom-in-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeCoin;
