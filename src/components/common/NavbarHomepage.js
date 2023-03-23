import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-white px-6 md:px-12 lg:px-16 homepage-container mx-auto">
        <div className="mx-auto md:flex justify-between md:items-baseline pt-8 md:pt-10 pb-6">
          <div>
            <div className="flex-row flex justify-between items-center w-full">
              <Link to="/" data-aos="fade-right">
                <span
                  className="uppercase text-white text-base lg:text-[18px] font-bold"
                  style={{ fontWeight: "700" }}
                >
                  Armour Wallet
                </span>
              </Link>
              <div className="md:hidden">
                <button
                  className="pt-2 text-light-white rounded-md outline-none focus:none "
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
              className={`h-[80vh] flex justify-center items-center md:h-[100%] md:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row items-center">
                <li>
                  <Link to="/">
                    <button
                      onClick={() => setNavbar(!navbar)}
                      className="custom-button text-white text-sm md:text-xs lg:text-sm font-semibold py-3 px-7 uppercase cursor-pointer headerRightBtn"
                      data-aos="fade-left"
                    >
                      Launching Soon
                    </button>
                  </Link>
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
