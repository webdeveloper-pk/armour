import React from "react";
import SupportSlider from "./common/SupportSlider";

const Supporters = () => {
  return (
    <section className="w-full supporters-bg mt-12 xl:mt-0 overflow-body">
      <div className="px-6 md:px-12 lg:px-16 pt-12 xl:pt-16 pb-16 xl:pb-16 homepage-container mx-auto">
        <div className="flex flex-row justify-center items-center text-center md:text-left text-white uppercase">
          <div className="text-[26px] font-bold">Supported by:</div>
        </div>
        <div className="mt-6 md:mt-10">
          <SupportSlider />
        </div>
      </div>
    </section>
  );
};

export default Supporters;
