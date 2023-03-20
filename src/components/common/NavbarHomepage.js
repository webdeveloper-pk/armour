import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-white px-6 md:px-16 homepage-container mx-auto">
        <div className="mx-auto md:flex justify-between md:items-baseline py-6 mt-4">
          <div>
            <div className="flex-row flex justify-between items-center w-full">
              <a href="/">
                <span className="uppercase text-white text-lg font-semibold">
                  Armour Wallet
                </span>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-light-white rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-8 text-white"
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
                      className="w-9 h-8 text-white"
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
              className={`flex-1 justify-self-center py-16 md:py-0 md:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row items-center">
                <li>
                  <Link to="/">
                    <button
                      onClick={() => setNavbar(!navbar)}
                      className="custom-button text-white text-sm font-semibold py-2.5 px-6 uppercase cursor-pointer"
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
