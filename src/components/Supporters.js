import React from "react";
import SupporterCard from "./common/SupporterCard";
import pinksale from "../../src/assets/images/section4-pinksale.png";
import pancakeswap from "../../src/assets/images/section4-pancakeswap.png";
import trustwallet from "../../src/assets/images/section4-trustwallet.png";
import coingecko from "../../src/assets/images/section4-coingecko.png";
import dextool from "../../src/assets/images/section4-dextool.png";
import walletconnect from "../../src/assets/images/section4-walletconnect.png";
import SupportSlider from "./common/SupportSlider";

const Supporters = () => {
  return (
    <section className="w-full supporters-bg mt-12 xl:mt-0">
      <div className="px-6 md:px-12 lg:px-16 pt-12 xl:pt-16 pb-16 xl:pb-16 homepage-container mx-auto">
        <div className="flex flex-row justify-center items-center text-center md:text-left text-white uppercase">
          <div
            className="text-[26px] font-bold"
            // data-aos="zoom-in-down"
          >
            Supported by:
          </div>
        </div>
        <div className="mt-6 md:mt-10 flex flex-row flex-wrap gap-x-8 md:gap-x-16 lg:gap-x-8 xl:gap-x-0 gap-y-6 justify-center xl:justify-between items-center md:px-4">
          <div
          // data-aos="zoom-in"
          >
            <SupporterCard src={pinksale} name="PinkSale" />
          </div>
          <div
          //  data-aos="zoom-in"
          >
            <SupporterCard src={pancakeswap} name="PancakeSwap" />
          </div>
          <div
          // data-aos="zoom-in"
          >
            <SupporterCard src={trustwallet} name="Trust Wallet" />
          </div>
          <div
          // data-aos="zoom-in"
          >
            <SupporterCard src={coingecko} name="CoinGecko" />
          </div>
          <div
          // data-aos="zoom-in"
          >
            <SupporterCard src={dextool} name="DexTool" />
          </div>
          <div
          // data-aos="zoom-in"
          >
            <SupporterCard src={walletconnect} name="WalletConnect" />
          </div>
        </div>
        <div className="mt-6 md:mt-10">
          <SupportSlider />
        </div>
      </div>
    </section>
  );
};

export default Supporters;
