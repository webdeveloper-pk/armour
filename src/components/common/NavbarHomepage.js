import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/header-logo.png";

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-white px-6 md:px-12 lg:px-12 homepage-container mx-auto">
        <div className="mx-auto lg:flex justify-between lg:items-start pt-8 md:pt-10 pb-6">
          <div>
            <div className="flex-row flex justify-between items-center w-full">
              <Link to="/" data-aos="fade-right">
                <div
                  className="flex items-center uppercase text-white text-base xl:text-[20px] font-bold"
                  style={{ fontWeight: "700" }}
                >
                  <div className="mr-4">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[36px] lg:w-[30px] xl:w-[37px] h-auto"
                    />
                  </div>
                  <span className="logo-title pr-1">Armour</span>Wallet
                </div>
              </Link>
              <div className="lg:hidden">
                <button
                  className="pt-2 text-light-white rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-7 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-center items-center lg:block pt-12 lg:pt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className="flex flex-col lg:flex-row items-center lg:gap-x-4 xl:gap-x-8 gap-y-3 text-sm lg:text-xs xl:text-sm uppercase"
                data-aos="zoom-in-down"
              >
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/">
                    <div className="btn btn-one hover:text-light-blue header-item1">
                      home
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/">
                    <div className="btn btn-one hover:text-light-blue header-item2">
                      about us
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/">
                    <div className="btn btn-one hover:text-light-blue header-item3">
                      features
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="#tokenomics">
                    <div className="btn btn-one hover:text-light-blue header-item4">
                      tokenomics
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="#roadmap-section">
                    <div className="btn btn-one hover:text-light-blue header-item5">
                      roadmap
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/">
                    <div className="btn btn-one hover:text-light-blue header-item6">
                      whitepapers
                    </div>
                  </a>
                </li>
                <li className="box-1" onClick={() => setNavbar(!navbar)}>
                  <a href="/">
                    <div className="btn btn-one hover:text-light-blue header-item7">
                      social links
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-center items-center pb-6 lg:pb-0 lg:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row items-center">
                <li>
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="navbar-btn1 navbar-button text-white text-sm md:text-xs xl:text-sm font-semibold py-3 lg:py-2.5 xl:py-3 px-7 lg:px-5 xl:px-7 uppercase headerRightBtn"
                    data-aos="fade-left"
                  >
                    <span className="navbar-btn2">Launching Soon</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarHomepage;
