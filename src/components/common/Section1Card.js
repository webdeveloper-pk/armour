import React from "react";

const Section1Card = ({ src, title, description }) => {
  return (
    <div className="section1-card flex flex-col items-center px-4 py-6 text-center z-50 min-h-[270px]">
      <div className="bg-carbon-black rounded-xl w-[60px] h-[60px] flex justify-center items-center">
        <img src={src} alt="image" width="28px" height="auto" />
      </div>
      <p className="mt-6 uppercase text-sm text-white font-bold">{title}</p>
      <p className="mt-4 text-[11px] text-white">{description}</p>
    </div>
  );
};

export default Section1Card;
