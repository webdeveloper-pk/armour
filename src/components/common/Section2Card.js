import React from "react";

const Section2Card = ({ src, title, description, dataAos }) => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center md:items-start z-50 gap-x-6 gap-y-4"
      data-aos={dataAos}
    >
      <div className="section2-card w-[10%] rounded-xl w-[70px] h-[70px] flex justify-center items-center">
        <img src={src} alt="image" width="32px" height="auto" />
      </div>
      <div className="text-center md:text-left w-full md:w-[80%]">
        <p className=" uppercase text-base text-white font-bold">{title}</p>
        <p className="mt-1 text-[11px] text-white font-light section2-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Section2Card;
