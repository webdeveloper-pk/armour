import React from "react";
// import AOS from "aos";
import Hero from "../components/Hero";
import NavbarHomepage from "../components/common/NavbarHomepage";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import NftOfferings from "../components/NftOfferings";
import StakeCoin from "../components/StakeCoin";
import LowFee from "../components/LowFee";
import Supporters from "../components/Supporters";
import Tokenomics from "../components/Tokenomics";
import Faq from "../components/Faq";
import Roadmap from "../components/Roadmap";
import TokenomicsTab from "../components/TokenomicsTabs";
import FooterHomepage from "../components/FooterHomepage";

const Homepage = () => {
  // React.useEffect(() => {
  //   AOS.init({
  //     duration: 2500,
  //   });
  // }, []);

  return (
    <>
      <div className="sections-bg overflow-body">
        <div className="bg-blue">
          <NavbarHomepage />
          <Hero />
        </div>
        <AboutUs />
        <Features />
        <NftOfferings />
        <StakeCoin />
        <LowFee />
        <Roadmap />
        <Supporters />
        <Tokenomics />
      </div>
      <TokenomicsTab />
      <Faq />
      <FooterHomepage />
    </>
  );
};

export default Homepage;
