import React from "react";
import Section1Card from "./common/Section1Card";
import bg from "../../src/assets/images/section1-bg.png";
import bg2 from "../../src/assets/images/section1-bg2.png";
import protocol from "../../src/assets/images/section1-protocol.png";
import feature from "../../src/assets/images/section1-feature.png";
import interfaces from "../../src/assets/images/section1-interface.png";
import verification from "../../src/assets/images/section1-verification.png";
import system from "../../src/assets/images/section1-system.png";
import speed from "../../src/assets/images/section1-speed.png";
import fee from "../../src/assets/images/section1-fee.png";
import software from "../../src/assets/images/section1-software.png";

const SectionOne = () => {
  return (
    <section className="w-full relative">
      <div className="section1-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="section1-bg-postion">
        <img src={bg2} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 py-12 xl:py-16 homepage-container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start lg:items-center md:gap-x-4 lg:gap-x-0 gap-y-6 text-center md:text-left text-white uppercase">
          <div className="section-title-count text-lg">01</div>
          <div className="text-2xl font-semibold">
            Why
            <span className="sections-title-color px-1 text-2xl font-semibold">
              Armour Wallet
            </span>
            Will be Game-Changing?
          </div>
          <div></div>
        </div>
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-2 md:px-12 xl:px-32">
          <div>
            <Section1Card
              src={protocol}
              title="Multi-Layer Security Protocol"
              description="Diversify your portfolio and minimise risk by swiftly acquiring, storing, exchanging and managing different cryptocurrencies in one wallet."
            />
          </div>
          <div>
            <Section1Card
              src={feature}
              title={`Multi-Wallet \n Feature`}
              description="Diversify your portfolio and minimise risk by swiftly acquiring, storing, exchanging and managing different cryptocurrencies in one wallet."
            />
          </div>
          <div>
            <Section1Card
              src={interfaces}
              title="User-Friendly Interface"
              description="Easily navigate through wallet, notwithstanding level of experience. Explore functionalities and manage digital assets on preferred devices."
            />
          </div>
          <div>
            <Section1Card
              src={verification}
              title="No KYC Verification"
              description="Armour Wallet lets you enjoy your privacy and anonymousness by giving you decentralized services which do not require any form of KYC verification or email confirmation."
            />
          </div>
          <div>
            <Section1Card
              src={system}
              title="Price Alert System"
              description="Stay on top of market trends and make informed decisions about when to buy or sell assets by setting up price alerts using our AI-backed price alert system."
            />
          </div>
          <div>
            <Section1Card
              src={speed}
              title="Friendly Exchange Rates & Speed"
              description="Swiftly buy or sell cryptocurrencies using your credit or debit card at very competitive exchange rates, plus all major fiat currencies are supported."
            />
          </div>
          <div>
            <Section1Card
              src={fee}
              title="Transaction Fees & speed"
              description="Competitive transaction fees to ensure that users can swap and manage their cryptocurrencies without incurring high costs."
            />
          </div>
          <div>
            <Section1Card
              src={software}
              title="Language Localisation Software"
              description="Switch to a preferred language at a click with diverse language options."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
