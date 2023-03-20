import React from "react";
import { Collapse } from "antd";
import dropdown from "../../src/assets/images/dropdown.png";
import dropup from "../../src/assets/images/dropup.png";
import bg from "../../src/assets/images/nft-offerings-bg.png";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <section className="w-full relative">
      <div className="absolute top-[20%]">
        <img src={bg} alt="hero-bg" />
      </div>
      <div className="px-6 md:px-16 pb-12 xl:pb-16 homepage-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-4 lg:gap-x-0 gap-y-6 text-center md:text-left text-white uppercase">
          <div className="section-title-count text-lg">06</div>
          <div className="text-2xl font-semibold sections-title-color ">
            Faqs
          </div>
          <div></div>
        </div>
        <div className="mt-8 lg:mt-12 flex flex-col px-2 md:px-12 xl:px-44">
          <div className="">
            <Collapse
              ghost
              // defaultActiveKey={["1"]}
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="Do I need KYC verification to use Armour Wallet?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="What is Armour Wallet, and how does it work?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="How do I create Armour Wallet?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="What types of cryptocurrencies does Armour Wallet support?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="How do I send and receive cryptocurrency using Armour Wallet?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="What are seed phrases and private key, and how do I keep it safe?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="What is the nature of your transaction fees?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              ghost
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img src={dropup} alt="dropup" width="12px" height="12px" />
                  </div>
                ) : (
                  <div className="flex justify-end  pr-2 md:pr-8">
                    <img
                      src={dropdown}
                      alt="dropdown"
                      width="12px"
                      height="12px"
                    />
                  </div>
                )
              }
            >
              <Panel
                header="What happens if I lose access to my wallet?"
                key="1"
                className=""
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs lowercase">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
