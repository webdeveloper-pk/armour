import React from "react";

const Section2Card = ({ src, title, description, dataAos }) => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center md:items-start z-50 gap-x-8 gap-y-4"
      data-aos={dataAos}
    >
      <div className="section2-card w-[10%] rounded-xl w-[85px] h-[85px] flex justify-center items-center">
        <img src={src} alt="logo" width="36px" height="auto" />
      </div>
      <div className="text-center md:text-left w-full md:w-[80%]">
        <p className=" uppercase text-[18px] font-bold section2-card-title">
          {title}
        </p>
        <p className="mt-1 text-[13px] text-white font-light section2-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Section2Card;
