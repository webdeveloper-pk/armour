import React from "react";
import Section5Card from "./common/Section5Card";

const TokenomicsTab = () => {
  return (
    <section className="w-full xl:mt-8">
      <div className="px-6 md:px-12 lg:px-16 pb-12 xl:pb-24 homepage-container mx-auto">
        <div className="py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 xl:px-6">
          <div data-aos="zoom-in">
            <Section5Card
              color="#9E03FD"
              text="Public Sale Token"
              percentage="30%"
            />
          </div>
          <div data-aos="zoom-in">
            <Section5Card color="#FD03E4" text="Liquidity" percentage="18%" />
          </div>
          <div data-aos="zoom-in">
            <Section5Card
              color="#FD033F"
              text="Exchange Listings"
              percentage="15%"
            />
          </div>
          <div data-aos="zoom-in">
            <Section5Card
              color="#B7B1FF"
              text="Initial Burn"
              percentage="07%"
            />
          </div>
          <div data-aos="zoom-in">
            <Section5Card
              color="#05FF00"
              text="Future Partnership"
              percentage="10%"
            />
          </div>
          <div data-aos="zoom-in">
            <Section5Card
              color="#03B2FD"
              text="Wallet Update and Maintenance"
              percentage="15%"
            />
          </div>
          <div data-aos="zoom-in">
            <Section5Card
              color="#CCFF00"
              text="Referral Reserve"
              percentage="2.5%"
            />
          </div>
          <div data-aos="zoom-in">
            <Section5Card
              color="#03E1FF"
              text="Ambassadorial Programme"
              percentage="02%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsTab;
