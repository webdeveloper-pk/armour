import React from "react";
import line from "../assets/images/section3-line.png";
import dot from "../assets/images/section3-dot.png";

const Roadmap = () => {
  return (
    <section className="w-full py-12 xl:py-28">
      <div className="px-6 md:px-16 homepage-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 lg:gap-x-0 gap-y-6 text-center md:text-left text-white uppercase">
          <div className="section-title-count text-lg" data-aos="fade-right">
            03
          </div>
          <div className="text-2xl font-semibold" data-aos="zoom-in-down">
            <span className="sections-title-color">Roadmap </span>& Future
            Development
          </div>
          <div></div>
        </div>
        <div className="uppercase relative">
          <div className="absolute left-[50%] hidden md:block">
            <img src={line} alt="line" className="w-[71%] lg:w-[72%]" />
          </div>
          {/*  phase 1 */}
          <div className="mt-8 lg:mt-16 flex flex-row justify-between px-2 md:px-0 xl:px-32">
            <div className="w-[47%] hidden md:block"></div>
            <div className="w-[100%] md:w-[47%]">
              <div className="flex items-center gap-x-6 mb-5 phase-custom-position">
                <div>
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase" data-aos="zoom-in">
                  Phase 1
                </p>
              </div>
              <div
                className="section3-custom-button text-white text-sm pt-4 pb-2 px-6 md:px-3 lg:px-6"
                data-aos="zoom-in-left"
              >
                <ul className="list-disc pl-5 md:pl-3 lg:pl-5">
                  <li>Armour Wallet Ideation</li>
                  <li>Extensive Research</li>
                  <li>Team On boarding</li>
                  <li>Project Branding</li>
                  <li>Website Development</li>
                  <li>Whitepaper Drafting</li>
                  <li>Commencement of Armour Wallet Development</li>
                </ul>
              </div>
            </div>
          </div>
          {/* phase 2 */}
          <div>
            <div className="w-[100%] block md:hidden mt-6">
              <div className="flex items-center gap-x-6">
                <div className="">
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase" data-aos="zoom-in">
                  Phase 2
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-8 lg:mt-16 flex flex-row justify-between px-2 md:px-0 xl:px-32">
            <div
              className="w-[100%] md:w-[47%] section3-custom-button text-white text-sm pt-4 pb-2 px-6 mt-6 md:mt-0"
              data-aos="zoom-in-right"
            >
              <ul className="list-disc pl-5 md:pl-3 lg:pl-5">
                <li>Brand Unveiling</li>
                <li>First-Stage Marketing & Partnerships</li>
                <li>Website Release</li>
                <li>Socials Launch, Community Activation</li>
                <li>Publicity Campaign and Marketing</li>
                <li>Whitepaper Unveiling</li>
                <li>Fairlaunch</li>
                <li>Contract Deployment</li>
                <li>Dex Listing</li>
                <li>Intensified Marketing Campaign</li>
                <li>CoinmarketCap Listing</li>
                <li>CCoinGecko Listing</li>
              </ul>
            </div>
            <div className="w-[47%] hidden md:block">
              <div className="flex items-center gap-x-6 mb-5 -mt-4 md:-mt-4 lg:-mt-8 phase-custom-position">
                <div>
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase">Phase 2</p>
              </div>
            </div>
          </div>
          {/* phase 3 */}
          <div className="mt-8 lg:mt-16 flex flex-row justify-between px-2 md:px-0  xl:px-32">
            <div className="w-[46%] hidden md:block"></div>
            <div className="w-[100%] md:w-[47%]">
              <div className="flex items-center gap-x-6 mb-5 phase-custom-position">
                <div>
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase" data-aos="zoom-in">
                  Phase 3
                </p>
              </div>
              <div
                className=" section3-custom-button text-white text-sm pt-4 pb-2 px-6"
                data-aos="zoom-in-left"
              >
                <ul className="list-disc pl-5 md:pl-3 lg:pl-5">
                  <li>Release Armour Wallet Beta</li>
                  <li>Review of Feedback</li>
                  <li>Certik Audit Initiated</li>
                  <li>Partnership with top tier Exchange</li>
                  <li>Release Armour Wallet</li>
                  <li>Billboard and Banner Ads</li>
                  <li>Airdrop for Holders</li>
                </ul>
              </div>
            </div>
          </div>
          {/* phase 4 */}
          <div>
            <div className="w-[100%] block md:hidden mt-6">
              <div className="flex items-center gap-x-6">
                <div className="">
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase" data-aos="zoom-in">
                  Phase 4
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-8 lg:mt-16 flex flex-row justify-between px-2 md:px-0 xl:px-32">
            <div
              className="w-[100%] md:w-[47%] section3-custom-button text-white text-sm pt-4 pb-2 px-6 mt-6 md:mt-0"
              data-aos="zoom-in-right"
            >
              <ul className="list-disc pl-5 md:pl-3 lg:pl-5">
                <li>Website V2 Release</li>
                <li>Celebrity Partnership</li>
                <li>Armour Marketplace Launch</li>
                <li>Release Recommendation Bot</li>
                <li>Payment Gateway Integration</li>
                <li>Ambassadorial Scheme</li>
              </ul>
            </div>
            <div className="w-[47%] hidden md:block">
              <div className="flex items-center gap-x-6 mb-5 -mt-4 md:-mt-4 lg:-mt-8 phase-custom-position">
                <div>
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase">Phase 4</p>
              </div>
            </div>
          </div>
          {/* phase 5 */}
          <div className="mt-8 lg:mt-12 flex flex-row justify-between px-2 md:px-0  xl:px-32">
            <div className="w-[47%] hidden md:block"></div>
            <div className="w-[100%] md:w-[47%]">
              <div className="flex items-center gap-x-6 mb-5 phase-custom-position">
                <div>
                  <img src={dot} alt="dot" width="20px" />
                </div>
                <p className="text-white text-sm uppercase" data-aos="zoom-in">
                  Phase 5
                </p>
              </div>
              <div
                className="section3-custom-button text-white text-sm pt-4 pb-2 px-6"
                data-aos="zoom-in-left"
              >
                <ul className="list-disc pl-5 md:pl-3 lg:pl-5">
                  <li>Update of Whitepaper and Roadmap</li>
                  <li>Staking Feature</li>
                  <li>In-wallet Bridge</li>
                  <li>Refer and Earn Scheme</li>
                  <li>CEX Listings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
