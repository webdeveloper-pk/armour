import React from "react";

const Section1Card = ({ src, title, description, dataAos }) => {
  return (
    <div
      className="section1-card flex flex-col items-center px-4 pt-6 pb-2 text-center z-50 h-[280px] overflow-hidden"
      data-aos={dataAos}
    >
      <div className="bg-carbon-black rounded-xl w-[75px] h-[75px] flex justify-center items-center">
        <img src={src} alt="image" width="32px" height="auto" />
      </div>
      <p className="mt-6 uppercase text-sm text-white font-bold">{title}</p>
      <p className="mt-4 text-[11px] text-white">{description}</p>
    </div>
  );
};

export default Section1Card;
