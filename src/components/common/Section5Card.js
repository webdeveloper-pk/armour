import React from "react";

const Section5Card = ({ color, text, percentage }) => {
  return (
    <div
      className={`section5-card flex flex-row justify-between items-center py-1 text-white text-sm`}
    >
      <div className="flex items-center">
        <div
          className="border-r-4 h-[30px]"
          style={{ borderColor: color }}
        ></div>
        <p className="pl-6 py-3">{text}</p>
      </div>
      <p className="pr-6 py-3">{percentage}</p>
    </div>
  );
};

export default Section5Card;
