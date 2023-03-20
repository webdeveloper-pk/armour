import React from "react";
import SupporterCard from "./common/SupporterCard";
import pinksale from "../../src/assets/images/section4-pinksale.png";
import pancakeswap from "../../src/assets/images/section4-pancakeswap.png";
import trustwallet from "../../src/assets/images/section4-trustwallet.png";
import coingecko from "../../src/assets/images/section4-coingecko.png";
import dextool from "../../src/assets/images/section4-dextool.png";
import walletconnect from "../../src/assets/images/section4-walletconnect.png";

const Supporters = () => {
  return (
    <section className="w-full supporters-bg">
      <div className="px-6 md:px-16 pt-12 xl:pt-16 pb-16 xl:pb-24 homepage-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 lg:gap-x-0 gap-y-6 text-center md:text-left text-white uppercase">
          <div className="section-title-count text-lg">04</div>
          <div className="text-2xl font-semibold">Supported by:</div>
          <div></div>
        </div>
        <div className="mt-6 md:mt-12 flex flex-row flex-wrap gap-x-6 lg:gap-x-2  xl:gap-x-0 gap-y-6 justify-center lg:justify-between items-center px-4">
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
          <div>
            <SupporterCard src={walletconnect} name="WalletConnect" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
