import React, { useEffect } from "react";
import AOS from "aos";
import Hero from "../components/Hero";
import NavbarHomepage from "../components/common/NavbarHomepage";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import NftOfferings from "../components/NftOfferings";
import StakeCoin from "../components/StakeCoin";
import LowFee from "../components/LowFee";
import Supporters from "../components/Supporters";
import Tokenomics from "../components/Tokenomics";
import Faq from "../components/Faq";
import Roadmap from "../components/Roadmap";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="overflow-body bg-blue min-h-screen">
        <NavbarHomepage />
        <Hero />
      </div>
      <SectionOne />
      <SectionTwo />
      <NftOfferings />
      <StakeCoin />
      <LowFee />
      <Roadmap />
      <Supporters />
      <Tokenomics />
      <Faq />
    </>
  );
};

export default Homepage;
