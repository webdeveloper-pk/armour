import React from "react";

const SupporterCard = ({ src, name }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-x-4">
      <div>
        <img src={src} alt="logo" width="36px" height="auto" />
      </div>
      <p className="text-white text-sm">{name}</p>
    </div>
  );
};

export default SupporterCard;
