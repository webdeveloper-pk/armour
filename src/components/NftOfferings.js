import React from "react";
import bg from "../../src/assets/images/nft-offerings-bg.png";
import hero1 from "../../src/assets/images/nft-offerings-image.png";

const NftOfferings = () => {
  return (
    <section className="w-full relative mt-0 lg:mt-16">
      <div className="nft-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 text-light-white homepage-container mx-auto">
        <div className="mx-auto flex lg:flex-row flex-col items-center gap-y-12 md:px-8 xl:px-24">
          <div className="w-[100%] lg:w-[40%] flex justify-center lg:justify-start items-center z-50">
            <img
              src={hero1}
              alt="hero"
              className="w-[75%] md:w-[50%] lg:w-[80%] xl:w-[65%] h-auto"
              data-aos="zoom-in-right"
            />
          </div>
          <div className="w-[100%] lg:w-[60%] flex flex-col md:items-end md:text-left z-50">
            <h1
              className="w-full xl:w-[90%] text-2xl xl:text-[28px] mb-4 font-bold text-light-white uppercase text-center md:text-left"
              data-aos="fade-down-left"
              style={{ lineHeight: "40px" }}
            >
              "Enter the Digital Realm: Explore Unique
              <span className="pl-2 sections-title-color">
                NFT Offerings on Our Marketplace"
              </span>
            </h1>
            <span
              className="mb-7 w-full text-[14px] md:text-[16px] hero-description xl:w-[90%] text-center md:text-left"
              data-aos="fade-up-left"
            >
              Experience the future of digital ownership with our NFT
              marketplace! We offer a wide range of unique and one-of-a-kind
              NFTs that are sure to capture your imagination. From digital art
              and music to rare collectibles and virtual real estate, our
              marketplace has something for everyone. Plus, with our
              cutting-edge blockchain technology, you can be confident that your
              NFTs are secure and protected from fraud or duplication. Whether
              you're an artist, a collector, or just curious about the world of
              NFTs, our platform has everything you need to explore this
              exciting new frontier. Join us today and start collecting NFTs
              that are as unique as you are!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftOfferings;
