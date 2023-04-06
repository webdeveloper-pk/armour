import React from "react";
import Section1Card from "./common/Section1Card";
import bg from "../../src/assets/images/section1-bg.png";
import bg2 from "../../src/assets/images/section1-bg2.png";
import technology from "../../src/assets/images/section1-technology.png";
import approach from "../../src/assets/images/section1-approach.png";
import support from "../../src/assets/images/section1-support.png";
import protocol from "../../src/assets/images/section1-protocol.png";
import feature from "../../src/assets/images/section1-feature.png";
import interfaces from "../../src/assets/images/section1-interface.png";
import verification from "../../src/assets/images/section1-verification.png";
import system from "../../src/assets/images/section1-system.png";
import speed from "../../src/assets/images/section1-speed.png";
import fee from "../../src/assets/images/section1-fee.png";
import software from "../../src/assets/images/section1-software.png";
import mobile from "../../src/assets/images/section1-mobile.png";

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
        <div className="flex flex-row justify-center items-center  text-center md:text-left text-white uppercase">
          <div className="text-[26px] font-bold" data-aos="zoom-in-down">
            Why
            <span className="sections-title-color px-1.5 text-[26px] font-bold">
              Armour Wallet
            </span>
            Will be Game-Changing?
          </div>
        </div>
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 px-2 md:px-12 xl:px-28">
          <div className="section1-card-inner">
            <Section1Card
              src={technology}
              title="Advanced AI Technology"
              description="Incorporating advanced AI tech, which offers enhanced security features, personalized user experiences, and intelligent asset management capabilities, providing a unique and innovative solution in the crypto wallet space."
              dataAos="flip-left"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={approach}
              title="Non-Custodial Approach"
              description="Armour Wallet is non-custodial, giving users full control over their private keys and funds, ensuring increased security and ownership of their cryptocurrencies compared to custodial wallets."
              dataAos="flip-right"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={support}
              title="Multi-Chain Support"
              description="Supporting multiple cryptocurrencies and blockchain networks, allowing users to manage diverse digital assets in one wallet, streamlining their crypto management experience and eliminating the need for multiple wallets for different cryptocurrencies."
              dataAos="flip-left"
            />
          </div>
          {/* old */}
          <div className="section1-card-inner">
            <Section1Card
              src={protocol}
              title="Multi-Layer Security Protocol"
              description="Designed to secure users’ digital assets, with multi-layer security protocols and two-factor authentication to prevent unauthorized access."
              dataAos="flip-left"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={feature}
              title={`Multi-Wallet \n Feature`}
              description="Diversify your portfolio and minimise risk by swiftly acquiring, storing, exchanging and managing different cryptocurrencies in one wallet."
              dataAos="flip-right"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={interfaces}
              title="User-Friendly Interface"
              description="Easily navigate through wallet, notwithstanding level of experience. Explore functionalities and manage digital assets on preferred devices."
              dataAos="flip-left"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={verification}
              title="No KYC Verification"
              description="Armour Wallet lets you enjoy your privacy and anonymousness by giving you decentralized services which do not require any form of KYC verification or email confirmation."
              dataAos="flip-right"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={system}
              title="Price Alert System"
              description="Stay on top of market trends and make informed decisions about when to buy or sell assets by setting up price alerts using our AI-backed price alert system."
              dataAos="flip-left"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={speed}
              title="Friendly Exchange Rates & Speed"
              description="Swiftly buy or sell cryptocurrencies using your credit or debit card at very competitive exchange rates, plus all major fiat currencies are supported."
              dataAos="flip-right"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={fee}
              title="Transaction Fees & speed"
              description="Competitive transaction fees to ensure that users can swap and manage their cryptocurrencies without incurring high costs."
              dataAos="flip-left"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={software}
              title="Language Localisation Software"
              description="Switch to a preferred language at a click with diverse language options."
              dataAos="flip-right"
            />
          </div>
          <div className="section1-card-inner">
            <Section1Card
              src={mobile}
              title="Mobile compatibility"
              description="Mobile-compatible crypto wallet that can be accessed via iOS and Android platforms, making it convenient for users to manage their digital assets on-the-go."
              dataAos="flip-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
