import React from "react";

const FooterLinkArrow = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12H17"
          stroke="url(#paint0_linear_0_520)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8L17 12L13 16"
          stroke="url(#paint1_linear_0_520)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_520"
            x1="17.3611"
            y1="12.25"
            x2="14.0851"
            y2="17.1378"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36D1DC" />
            <stop offset="1" stopColor="#5B86E5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_520"
            x1="17.1444"
            y1="10"
            x2="12.9404"
            y2="10.3136"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36D1DC" />
            <stop offset="1" stopColor="#5B86E5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FooterLinkArrow;
