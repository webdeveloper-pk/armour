import React from "react";
import Section5Card from "./common/Section5Card";
import progressbar from "../../src/assets/images/section5-progressbar.png";

const Tokenomics = () => {
  return (
    <section className="w-full xl:mt-8">
      <div className="px-6 md:px-12 lg:px-16 pt-12 xl:pt-16 pb-12 xl:pb-24 homepage-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 lg:gap-x-0 gap-y-6 text-center md:text-left text-white uppercase">
          <div className="section-title-count text-lg">05</div>
          <div className="text-2xl font-semibold sections-title-color">
            Tokenomics
          </div>
          <div></div>
        </div>
        <div className="-mt-2 flex flex-col md:flex-row justify-between items-center">
          <div className="section5-title-count text-lg text-transparent">
            05
          </div>
          <p className="text-white text-sm text-center -mt-6 md:mt-0">
            Armour Wallet tokenomics is structured to ensure its sustainability.
          </p>
          <div></div>
        </div>
        <div className="mt-8 mb-4 lg:mb-6 lg:mt-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-6 px-2 md:px-12 xl:px-24">
          <div className="w-full md:w-[60%] lg:w-[40%] relative">
            <div>
              <img
                src={progressbar}
                alt="progress-bar"
                className="w-[100%] lg:w-[80%] xl:w-[70%]"
                height="auto"
              />
            </div>
            <div className="progressbar-position text-center">
              <p className="total-supply text-[11px]">Total Supply</p>
              <h1 className="text-white font-bold text-lg">1,000,000,000</h1>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col w-full lg:w-[70%]">
              <div className="custom-border">
                <p className="name text-xs mb-1">Name:</p>
                <p className="text-white text-sm">Armour Wallet Token</p>
              </div>
              <div className=" flex justify-between pt-6">
                <div className="text-white">
                  <p className="text-xs mb-1">Symbol:</p>
                  <p className="text-sm mb-3">$AWT</p>
                  <p className="name text-xs mb-1">Total Supply:</p>
                  <p className="text-sm mb-3">1,000,000,000</p>
                  <p className="name text-xs mb-1">Address</p>
                  <p className="text-sm">-</p>
                </div>
                <div className="text-white">
                  <p className="text-xs mb-1">Network:</p>
                  <p className="text-sm mb-3">Binance Smart Chain</p>
                  <p className="name text-xs mb-1 uppercase">Tax:</p>
                  <p className="text-sm mb-3">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          <div>
            <Section5Card
              color="#9E03FD"
              text="Public Sale Token"
              percentage="25%"
            />
          </div>
          <div>
            <Section5Card color="#FD03E4" text="Liquidity" percentage="20%" />
          </div>
          <div>
            <Section5Card
              color="#FD033F"
              text="Exchange Listings"
              percentage="18%"
            />
          </div>
          <div>
            <Section5Card
              color="#B7B1FF"
              text="Initial Burn"
              percentage="17%"
            />
          </div>
          <div>
            <Section5Card color="#05FF00" text="Marketing" percentage="10%" />
          </div>
          <div>
            <Section5Card
              color="#03B2FD"
              text="Wallet Update and Maintenance"
              percentage="05%"
            />
          </div>
          <div>
            <Section5Card
              color="#CCFF00"
              text="Refer and Earn Scheme"
              percentage="2.5%"
            />
          </div>
          <div>
            <Section5Card
              color="#03E1FF"
              text="Ambassadorial Programme"
              percentage="2.5%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
