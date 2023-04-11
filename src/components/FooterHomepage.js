import React from "react";
import logo from "../assets/images/header-logo.png";
import FooterLinkArrow from "./common/FooterLinkArrow";

const FooterHomepage = () => {
  return (
    <>
      <footer className="px-6 md:px-12 lg:px-16 pt-8 xl:pt-8 pb-6 xl:pb-6 homepage-container mx-auto footer-black-bg">
        <div className="w-[100%] xl:w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:text-left text-center">
          <div className="w-[100%] pt-0 lg:pt-12">
            <a
              href="/"
              className="mb-6 md:mb-12 flex justify-center md:justify-start"
            >
              <div
                className="flex items-center uppercase text-white text-xl xl:text-[21px] font-bold"
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
            </a>
            <nav className="list-none mb-6 md:mb-0">
              <div className="mb-3">
                <p className="footer-description-text text-[13px] w-[100%] lg:w-[90%]">
                  Armour Wallet is an innovative, non-custodial, multi-chain
                  crypto wallet that leverages cutting-edge AI technology to
                  revolutionize traditional wallet systems. With its
                  ground-breaking solutions, Armour Wallet offers users a new
                  level of convenience in managing their diverse cryptocurrency
                  holdings securely within a single, user-friendly interface,
                  empowering them to take control of their digital assets
                  with confidence.
                </p>
              </div>
              <div className="">
                <p className="footer-community-text text-base mb-3">
                  Community
                </p>
                <div className="flex justify-center md:justify-start gap-x-4">
                  <a
                    href="https://t.me/ArmourWallet"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white  text-sm group stroke-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 37 37"
                      fill="none"
                      className="group-hover:stroke-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_0_558)">
                        <path
                          d="M18.1132 30.9618C21.3158 30.9618 24.3873 29.6896 26.6518 27.425C28.9164 25.1604 30.1887 22.0889 30.1887 18.8863C30.1887 15.6837 28.9164 12.6123 26.6518 10.3477C24.3873 8.08309 21.3158 6.81086 18.1132 6.81086C14.9106 6.81086 11.8391 8.08309 9.57455 10.3477C7.30996 12.6123 6.03773 15.6837 6.03773 18.8863C6.03773 22.0889 7.30996 25.1604 9.57455 27.425C11.8391 29.6896 14.9106 30.9618 18.1132 30.9618ZM18.1132 33.9807C9.7766 33.9807 3.01886 27.2229 3.01886 18.8863C3.01886 10.5497 9.7766 3.79199 18.1132 3.79199C26.4498 3.79199 33.2075 10.5497 33.2075 18.8863C33.2075 27.2229 26.4498 33.9807 18.1132 33.9807ZM13.4189 20.6524L9.64829 19.4765C8.8332 19.2275 8.82867 18.666 9.83094 18.2629L24.5223 12.5875C25.3751 12.2403 25.8581 12.6795 25.5819 13.7799L23.0807 25.5837C22.9057 26.4244 22.4 26.6252 21.6981 26.2373L17.8475 23.3875L16.0528 25.1203C15.8687 25.2984 15.7192 25.4509 15.4355 25.4886C15.1532 25.5278 14.9207 25.4433 14.7502 24.9754L13.437 20.6418L13.4189 20.6539V20.6524Z"
                          fill="white"
                          className="group-hover:fill-blue-400"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_558">
                          <rect
                            width="36.2264"
                            height="36.2264"
                            fill="none"
                            transform="translate(6.10352e-05 0.773438)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@Armourwallet"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm group stroke-white"
                  >
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 38 37"
                      fill="none"
                      className="group-hover:stroke-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_0_555)">
                        <path
                          d="M30.4242 11.3323C30.3095 10.8825 29.9835 10.5428 29.6106 10.4387C28.951 10.253 25.7359 9.83039 18.9435 9.83039C12.151 9.83039 8.93893 10.253 8.27327 10.4387C7.90497 10.5413 7.57893 10.881 7.46271 11.3323C7.29818 11.9723 6.86799 14.6545 6.86799 18.887C6.86799 23.1194 7.29818 25.8002 7.46271 26.4432C7.57742 26.8915 7.90346 27.2311 8.27478 27.3338C8.93893 27.521 12.151 27.9436 18.9435 27.9436C25.7359 27.9436 28.9495 27.521 29.6136 27.3353C29.982 27.2327 30.308 26.893 30.4242 26.4417C30.5887 25.8017 31.0189 23.1134 31.0189 18.887C31.0189 14.6606 30.5887 11.9738 30.4242 11.3323ZM33.348 10.5821C34.0378 13.2719 34.0378 18.887 34.0378 18.887C34.0378 18.887 34.0378 24.5021 33.348 27.1919C32.9646 28.6787 31.8431 29.8485 30.4227 30.244C27.8431 30.9625 18.9435 30.9625 18.9435 30.9625C18.9435 30.9625 10.0484 30.9625 7.46422 30.244C6.0378 29.8425 4.9178 28.6742 4.53893 27.1919C3.84912 24.5021 3.84912 18.887 3.84912 18.887C3.84912 18.887 3.84912 13.2719 4.53893 10.5821C4.92233 9.0953 6.04384 7.92549 7.46422 7.53001C10.0484 6.81152 18.9435 6.81152 18.9435 6.81152C18.9435 6.81152 27.8431 6.81152 30.4227 7.53001C31.8491 7.93152 32.9691 9.09983 33.348 10.5821ZM15.9246 24.17V13.604L24.9812 18.887L15.9246 24.17Z"
                          fill="white"
                          className="group-hover:fill-blue-400"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_555">
                          <rect
                            width="36.2264"
                            height="36.2264"
                            fill="white"
                            transform="translate(0.8302 0.773438)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://medium.com/@armourwallet"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm group stroke-white mt-0.5"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:stroke-blue-400"
                    >
                      <g clip-path="url(#clip0_1_266)">
                        <path
                          d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM5 5V19H19V5H5ZM17.3 15.94L18.255 16.894V16.944H13.334V16.894L14.338 15.94C14.438 15.84 14.488 15.74 14.488 15.589V9.664C14.488 9.412 14.488 9.061 14.539 8.76L11.225 17.045H11.175L7.76 9.412C7.71 9.212 7.66 9.212 7.61 9.112V14.132C7.559 14.484 7.61 14.785 7.76 15.087L9.116 16.894V16.944H5.5V16.894L6.856 15.036C7.006 14.736 7.056 14.384 7.006 14.082V8.56C7.006 8.309 6.956 8.007 6.756 7.807L5.851 6.55V6.5H9.366L12.278 12.978L14.84 6.5H18.255V6.55L17.301 7.655C17.201 7.755 17.151 7.906 17.151 8.006V15.639C17.151 15.739 17.201 15.89 17.301 15.94H17.3Z"
                          fill="white"
                          className="group-hover:fill-blue-400"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_266">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/Armourwallet"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white   text-sm group stroke-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:stroke-blue-400"
                    >
                      <g clipPath="url(#clip0_1_524)">
                        <path
                          d="M23.4145 9.15069C22.2672 9.1505 21.1658 9.60069 20.3471 10.4044C19.5285 11.2081 19.0581 12.301 19.0371 13.4481L18.9948 15.8254C18.9924 15.9531 18.9629 16.0787 18.9085 16.1942C18.854 16.3097 18.7758 16.4123 18.6788 16.4954C18.5819 16.5785 18.4685 16.6402 18.3461 16.6764C18.2236 16.7126 18.0949 16.7225 17.9684 16.7054L15.6122 16.3854C12.5118 15.9628 9.54125 14.5348 6.69144 12.1605C5.7888 17.1567 7.55182 20.6179 11.7979 23.2881L14.4348 24.9454C14.5601 25.0241 14.6642 25.1324 14.738 25.2607C14.8118 25.3889 14.853 25.5333 14.8581 25.6812C14.8631 25.8291 14.8319 25.976 14.7671 26.109C14.7022 26.242 14.6058 26.3572 14.4862 26.4443L12.0831 28.1997C13.5126 28.2888 14.8696 28.2254 15.9956 28.002C23.1171 26.5801 27.8522 21.2216 27.8522 12.3824C27.8522 11.6609 26.3247 9.15069 23.4145 9.15069V9.15069ZM16.0182 13.3922C16.0446 11.9372 16.4996 10.5223 17.3262 9.32461C18.1529 8.12695 19.3145 7.19978 20.6657 6.65917C22.0168 6.11856 23.4973 5.98855 24.922 6.28541C26.3467 6.58226 27.6521 7.2928 28.6748 8.32805C29.748 8.3205 30.6613 8.5922 32.7035 7.35447C32.1979 9.82994 31.9488 10.9047 30.8711 12.3824C30.8711 23.9175 23.7813 29.5265 16.5873 30.962C11.6545 31.9462 4.48163 30.3296 2.42578 28.1831C3.47333 28.1016 7.72993 27.6443 10.1903 25.8435C8.1088 24.4714 -0.176483 19.596 5.26805 6.48805C7.82352 9.4722 10.4152 11.5039 13.0416 12.5816C14.7896 13.2986 15.2182 13.2835 16.0197 13.3937L16.0182 13.3922Z"
                          fill="white"
                          className="group-hover:fill-blue-400"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_524">
                          <rect
                            width="36.2264"
                            height="36.2264"
                            fill="white"
                            transform="translate(0.320312 0.773438)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/officialarmourwallet"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white   text-sm group stroke-white"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 37 37"
                      fill="none"
                      className="group-hover:stroke-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_0_570)">
                        <path
                          d="M18.2642 14.3395C17.0632 14.3395 15.9114 14.8166 15.0622 15.6658C14.213 16.515 13.7359 17.6668 13.7359 18.8678C13.7359 20.0688 14.213 21.2206 15.0622 22.0698C15.9114 22.919 17.0632 23.3961 18.2642 23.3961C19.4652 23.3961 20.617 22.919 21.4662 22.0698C22.3154 21.2206 22.7925 20.0688 22.7925 18.8678C22.7925 17.6668 22.3154 16.515 21.4662 15.6658C20.617 14.8166 19.4652 14.3395 18.2642 14.3395ZM18.2642 11.3206C20.2658 11.3206 22.1855 12.1158 23.6009 13.5311C25.0162 14.9465 25.8114 16.8661 25.8114 18.8678C25.8114 20.8694 25.0162 22.7891 23.6009 24.2044C22.1855 25.6198 20.2658 26.4149 18.2642 26.4149C16.2626 26.4149 14.3429 25.6198 12.9275 24.2044C11.5122 22.7891 10.717 20.8694 10.717 18.8678C10.717 16.8661 11.5122 14.9465 12.9275 13.5311C14.3429 12.1158 16.2626 11.3206 18.2642 11.3206ZM28.0755 10.9432C28.0755 11.4437 27.8767 11.9236 27.5229 12.2774C27.1691 12.6313 26.6891 12.83 26.1887 12.83C25.6883 12.83 25.2084 12.6313 24.8546 12.2774C24.5007 11.9236 24.3019 11.4437 24.3019 10.9432C24.3019 10.4428 24.5007 9.96293 24.8546 9.60909C25.2084 9.25524 25.6883 9.05646 26.1887 9.05646C26.6891 9.05646 27.1691 9.25524 27.5229 9.60909C27.8767 9.96293 28.0755 10.4428 28.0755 10.9432ZM18.2642 6.79231C14.5299 6.79231 13.92 6.80287 12.1827 6.87985C10.9993 6.9357 10.2053 7.09419 9.46873 7.38098C8.81363 7.63457 8.34118 7.93797 7.83854 8.44212C7.3661 8.89857 7.00285 9.45583 6.7759 10.0723C6.48911 10.8119 6.33062 11.6044 6.27628 12.7863C6.19779 14.4527 6.18873 15.0353 6.18873 18.8678C6.18873 22.6021 6.1993 23.2119 6.27628 24.9493C6.33213 26.1312 6.49062 26.9266 6.7759 27.6617C7.0325 28.3183 7.33439 28.7908 7.83552 29.2919C8.3442 29.7991 8.81665 30.1025 9.46571 30.3531C10.2114 30.6414 11.0053 30.8014 12.1827 30.8557C13.8491 30.9342 14.4317 30.9432 18.2642 30.9432C21.9985 30.9432 22.6084 30.9327 24.3457 30.8557C25.5261 30.7999 26.3216 30.6414 27.0582 30.3561C27.7117 30.101 28.1872 29.7976 28.6884 29.2965C29.197 28.7878 29.5004 28.3153 29.751 27.6663C30.0378 26.9221 30.1978 26.1266 30.2521 24.9493C30.3306 23.2829 30.3397 22.7002 30.3397 18.8678C30.3397 15.1334 30.3291 14.5236 30.2521 12.7863C30.1963 11.6059 30.0378 10.8089 29.751 10.0723C29.5235 9.45646 29.1609 8.89942 28.6899 8.44212C28.2336 7.96943 27.6763 7.60614 27.0597 7.37948C26.32 7.09268 25.5261 6.93419 24.3457 6.87985C22.6793 6.80136 22.0967 6.79231 18.2642 6.79231ZM18.2642 3.77344C22.3653 3.77344 22.877 3.78853 24.4861 3.864C26.0936 3.93948 27.188 4.19155 28.151 4.56589C29.1472 4.94929 29.9865 5.46853 30.8257 6.30627C31.5932 7.06083 32.1872 7.97357 32.5661 8.98098C32.9389 9.94249 33.1925 11.0383 33.268 12.6459C33.3389 14.2549 33.3585 14.7666 33.3585 18.8678C33.3585 22.9689 33.3434 23.4806 33.268 25.0897C33.1925 26.6972 32.9389 27.7915 32.5661 28.7546C32.1882 29.7625 31.5942 30.6755 30.8257 31.4293C30.0709 32.1966 29.1583 32.7904 28.151 33.1697C27.1895 33.5425 26.0936 33.7961 24.4861 33.8716C22.877 33.9425 22.3653 33.9621 18.2642 33.9621C14.1631 33.9621 13.6514 33.947 12.0423 33.8716C10.4348 33.7961 9.34043 33.5425 8.37741 33.1697C7.3696 32.7915 6.45669 32.1975 5.70269 31.4293C4.935 30.6749 4.34108 29.7621 3.96231 28.7546C3.58797 27.7931 3.3359 26.6972 3.26043 25.0897C3.18948 23.4806 3.16986 22.9689 3.16986 18.8678C3.16986 14.7666 3.18496 14.2549 3.26043 12.6459C3.3359 11.0368 3.58797 9.944 3.96231 8.98098C4.34003 7.97295 4.93409 7.05996 5.70269 6.30627C6.45691 5.53831 7.36975 4.94435 8.37741 4.56589C9.34043 4.19155 10.4333 3.93948 12.0423 3.864C13.6514 3.79306 14.1631 3.77344 18.2642 3.77344Z"
                          fill="white"
                          className="group-hover:fill-blue-400"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_570">
                          <rect
                            width="36.2264"
                            height="36.2264"
                            fill="white"
                            transform="translate(0.151001 0.754883)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="w-[100%] flex flex-col items-center md:items-center">
            <h2 className="font-bold text-white text-lg mb-5 uppercase">
              Quick Menu
            </h2>
            <nav className="list-none mb-6 lg:mb-0 uppercase flex flex-col items-center md:items-start gap-y-4">
              <li>
                <a
                  href="/#"
                  className="flex items-center gap-x-3 text-white text-[13px]"
                >
                  <span>
                    <FooterLinkArrow />
                  </span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center gap-x-3 text-white   text-[13px]"
                >
                  <span>
                    <FooterLinkArrow />
                  </span>
                  about us
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center gap-x-3 text-white   text-[13px]"
                >
                  <span>
                    <FooterLinkArrow />
                  </span>
                  features
                </a>
              </li>
              <li>
                <a
                  href="#tokenomics"
                  className="flex items-center gap-x-3 text-white   text-[13px]"
                >
                  <span>
                    <FooterLinkArrow />
                  </span>
                  tokenomics
                </a>
              </li>
              <li>
                <a
                  href="#roadmap-section"
                  className="flex items-center gap-x-3 text-white text-[13px]"
                >
                  <span>
                    <FooterLinkArrow />
                  </span>
                  roadmap
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="flex items-center gap-x-3 text-white   text-[13px]"
                >
                  <span>
                    <FooterLinkArrow />
                  </span>
                  white papers
                </a>
              </li>
            </nav>
          </div>
          <div className="w-[100%] flex flex-col items-center md:items-start">
            <h2 className="font-bold text-white text-lg mb-8 uppercase">
              Get in touch
            </h2>
            <nav className="list-none mb-6 lg:mb-0 uppercase flex flex-col items-center md:items-start">
              <li>
                <a
                  href="https://t.me/ArmourWallet"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-x-3 text-white   text-[13px] mb-5"
                >
                  <span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_0_558)">
                        <path
                          d="M18.1132 30.9618C21.3158 30.9618 24.3873 29.6896 26.6518 27.425C28.9164 25.1604 30.1887 22.0889 30.1887 18.8863C30.1887 15.6837 28.9164 12.6123 26.6518 10.3477C24.3873 8.08309 21.3158 6.81086 18.1132 6.81086C14.9106 6.81086 11.8391 8.08309 9.57455 10.3477C7.30996 12.6123 6.03773 15.6837 6.03773 18.8863C6.03773 22.0889 7.30996 25.1604 9.57455 27.425C11.8391 29.6896 14.9106 30.9618 18.1132 30.9618ZM18.1132 33.9807C9.7766 33.9807 3.01886 27.2229 3.01886 18.8863C3.01886 10.5497 9.7766 3.79199 18.1132 3.79199C26.4498 3.79199 33.2075 10.5497 33.2075 18.8863C33.2075 27.2229 26.4498 33.9807 18.1132 33.9807ZM13.4189 20.6524L9.64829 19.4765C8.8332 19.2275 8.82867 18.666 9.83094 18.2629L24.5223 12.5875C25.3751 12.2403 25.8581 12.6795 25.5819 13.7799L23.0807 25.5837C22.9057 26.4244 22.4 26.6252 21.6981 26.2373L17.8475 23.3875L16.0528 25.1203C15.8687 25.2984 15.7192 25.4509 15.4355 25.4886C15.1532 25.5278 14.9207 25.4433 14.7502 24.9754L13.437 20.6418L13.4189 20.6539V20.6524Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_558">
                          <rect
                            width="36.2264"
                            height="36.2264"
                            fill="white"
                            transform="translate(6.10352e-05 0.773438)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Telegram
                </a>
              </li>
              <li className="flex gap-x-3">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_0_550)">
                    <path
                      d="M4.12502 4.125H28.875C29.2397 4.125 29.5894 4.26987 29.8473 4.52773C30.1052 4.78559 30.25 5.13533 30.25 5.5V27.5C30.25 27.8647 30.1052 28.2144 29.8473 28.4723C29.5894 28.7301 29.2397 28.875 28.875 28.875H4.12502C3.76034 28.875 3.41061 28.7301 3.15274 28.4723C2.89488 28.2144 2.75002 27.8647 2.75002 27.5V5.5C2.75002 5.13533 2.89488 4.78559 3.15274 4.52773C3.41061 4.26987 3.76034 4.125 4.12502 4.125ZM27.5 9.95225L16.599 19.7148L5.50002 9.922V26.125H27.5V9.95225ZM6.20264 6.875L16.5839 16.0352L26.8153 6.875H6.20264Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_550">
                      <rect width="33" height="33" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <a
                  href="mailto:Contact@armourwallet.app"
                  className=" flex items-center gap-x-3 text-white  text-[13px]"
                >
                  Contact@armourwallet.app
                </a>
              </li>
            </nav>
          </div>
        </div>
      </footer>
      <div className="text-center flex justify-center items-center px-6 md:px-12 lg:px-16 pt-6 pb-4 homepage-container mx-auto text-xs md:text-sm text-white uppercase">
        <p>
          Copyright © 2023 Created by
          <span className="footer-text px-1">Armourwallet</span>
        </p>
      </div>
    </>
  );
};

export default FooterHomepage;
