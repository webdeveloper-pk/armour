import React from "react";

const Section5Card = ({ color, text, percentage }) => {
  return (
    <div
      className={`section5-card flex flex-row justify-between items-center py-1 text-white text-xs md:text-sm lg:text-base`}
    >
      <div className="flex items-center">
        <div
          className="border-r-4 h-[35px]"
          style={{ borderColor: color }}
        ></div>
        <p className="pl-6 py-4">{text}</p>
      </div>
      <p className="pr-6 py-4">{percentage}</p>
    </div>
  );
};

export default Section5Card;
