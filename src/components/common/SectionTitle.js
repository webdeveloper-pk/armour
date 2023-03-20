import React from "react";

const SectionTitle = ({ number, title }) => {
  return (
    <div>
      <div>{number}</div>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
