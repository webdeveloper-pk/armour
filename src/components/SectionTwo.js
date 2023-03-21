import React from "react";
import Section2Card from "./common/Section2Card";
import bg from "../../src/assets/images/section1-bg.png";
import bg2 from "../../src/assets/images/section1-bg2.png";
import community from "../../src/assets/images/section2-community.png";
import cases from "../../src/assets/images/section2-cases.png";
import launchpad from "../../src/assets/images/section2-launchpad.png";
import bot from "../../src/assets/images/section2-bot.png";
import nft from "../../src/assets/images/section2-nft.png";
import scheme from "../../src/assets/images/section2-scheme.png";
import bridge from "../../src/assets/images/section2-bridge.png";
import marketplace from "../../src/assets/images/section2-marketplace.png";

const SectionTwo = () => {
  return (
    <section className="w-full relative">
      <div className="section2-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="section2-bg-postion">
        <img src={bg2} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 py-12 xl:py-16 homepage-container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center md:items-start lg:items-center md:gap-x-4 lg:gap-x-0 gap-y-6 text-center md:text-left text-white uppercase">
          <div className="section-title-count text-lg">02</div>
          <div className="text-2xl font-semibold">
            That’s why
            <span className="sections-title-color pl-2 text-2xl font-semibold">
              we are best!
            </span>
          </div>
          <div></div>
        </div>
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 px-2 md:px-12 xl:px-32">
          <div>
            <Section2Card
              src={community}
              title="Customer Support & Community"
              description="Our support team is available 24/7 to answer any queries or concerns from users"
            />
          </div>
          <div>
            <Section2Card
              src={cases}
              title="Disruptive Use Cases"
              description="Besides community support, utilities are the next lifeblood of any crypto project. And here is why Armour Wallet will disrupt the space."
            />
          </div>
          <div>
            <Section2Card
              src={launchpad}
              title="Armour Launchpad"
              description="Armour Wallet will roll out revolutionary launchpad that enables new blockchain and cryptocurrency projects to raise funds and gain market exposure during their initial coin offerings (ICOs) or initial exchange offerings (IEOs)."
            />
          </div>
          <div>
            <Section2Card
              src={bot}
              title="Armour Recommendation Bot(ARB)"
              description="In-built powerful recommendation system that uses strong analytical intelligence to notify users in real-time on cryptocurrencies that have the potentials of making upward or downward trends."
            />
          </div>
          <div>
            <Section2Card
              src={nft}
              title="NFT Support"
              description="Directly store, manage and trade a wide range of NFTs using Armour Wallet."
            />
          </div>
          <div>
            <Section2Card
              src={scheme}
              title="Flexible Staking Scheme"
              description="Enjoy passive, but attractive rewards for Staking your favourite cryptocurrencies in Armour Wallet."
            />
          </div>
          <div>
            <Section2Card
              src={bridge}
              title="In-wallet Bridge"
              description="Users have the luxury of transferring their assets from one chain to another using our innovative cross-chain bridge."
            />
          </div>
          <div>
            <Section2Card
              src={marketplace}
              title="Armour Marketplace"
              description="Buy or sell your favourite digital assets like NFTs or useful crypto tools in our marketplace which promises to pool majority of talents in the space."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
