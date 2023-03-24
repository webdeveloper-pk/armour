import React from "react";

const Section1Card = ({ src, title, description, dataAos }) => {
  return (
    <div
      className="section1-card flex flex-col items-center px-4 pt-6 pb-2 text-center z-50 h-[285px] xl:h-[280px] overflow-hidden"
      data-aos={dataAos}
    >
      <div className="bg-carbon-black rounded-xl w-[90px] h-[90px] flex justify-center items-center">
        <img src={src} alt="logo" width="40px" height="auto" />
      </div>
      <p className="mt-6 uppercase text-[17px] font-bold section1-card-title">
        {title}
      </p>
      <p className="mt-4 text-[13px] section1-description">{description}</p>
    </div>
  );
};

export default Section1Card;
