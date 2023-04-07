import React from "react";
import { Collapse } from "antd";
import dropdown from "../../src/assets/images/dropdown.png";
import dropup from "../../src/assets/images/dropup.png";
import bg from "../../src/assets/images/nft-offerings-bg.png";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <section className="w-full relative">
      <div className="faq-bg-postion">
        <img src={bg} alt="hero-bg" className="w-[100vw] h-auto" />
      </div>
      <div className="px-6 md:px-12 lg:px-16 pb-12 xl:pb-24 homepage-container mx-auto">
        <div className="flex flex-row justify-center items-center text-center md:text-left text-white uppercase">
          <div
            className="text-2xl font-semibold sections-title-color md:-ml-[16px]"
            // data-aos="zoom-in-down"
          >
            Faqs
          </div>
        </div>
        <div
          className="mt-8 lg:mt-12 flex flex-col md:px-12 lg:px-32 xl:px-64"
          // data-aos="zoom-in"
        >
          <div className="">
            <Collapse
              ghost
              accordion
              defaultActiveKey="null"
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
                header=" Do I need KYC verification to use Armour Wallet?"
                key="1"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    No! Armour Wallet prioritizes your privacy and anonymousness
                    and hence doesn’t require any form of profile or identity
                    verification for our users.
                  </div>
                </div>
              </Panel>
              <Panel
                header="What is Armour Wallet, and how does it work?"
                key="2"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    Armour Wallet is a digital wallet that allows you to
                    securely store, send, and receive cryptocurrencies. It works
                    by generating a unique contract address and private key for
                    each cryptocurrency that you hold. Your contract address
                    serves as your account number, and your private key is used
                    to access your funds and authorize transactions.
                  </div>
                </div>
              </Panel>
              <Panel header="How do I create Armour Wallet?" key="3">
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    To create Armour Wallet, download App on your store or use
                    our web wallet service. Click on create wallet and follow
                    the instructions provided to create a wallet, and be sure to
                    securely store your private key and seed phrase.
                  </div>
                </div>
              </Panel>
              <Panel
                header="What types of cryptocurrencies does Armour Wallet support?"
                key="4"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    Armour Wallet supports all commonplace cryptocurrencies and
                    some other unique digital assets.
                  </div>
                </div>
              </Panel>
              <Panel
                header="How do I send and receive cryptocurrency using Armour Wallet?"
                key="5"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    To send cryptocurrency, you will need to enter the
                    recipient’s contract address and the amount of
                    cryptocurrency that you want to send. To receive
                    cryptocurrency, simply provide your specific contract
                    address to the sender.
                  </div>
                </div>
              </Panel>
              <Panel
                header="What are seed phrases and private key, and how do I keep it safe?"
                key="6"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    A private key is a secret code that allows you to access
                    your assets in Armour Wallet. It is important to keep your
                    private key safe and secure, as anyone who has access to it
                    can also access your funds. You can store your private key
                    in a secure location, such as a hardware wallet or a
                    password-protected file.
                  </div>
                </div>
              </Panel>
              <Panel
                header="What is the nature of your transaction fees?"
                key="7"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs ">
                    The fees charged for transactions may vary depending on the
                    specific cryptocurrency and the current network conditions.
                    Be assured that we offer the most competitive fees
                    available.
                  </div>
                </div>
              </Panel>
              <Panel
                header="What happens if I lose access to my wallet?"
                key="8"
              >
                <div className="flex flex-row items-start">
                  <div className="pb-6 text-white text-xs">
                    If you lose access to your wallet or forget your private key
                    and seed phrase, you may not be able to access your funds.
                    It is important to keep your private key and seed phrase
                    safe and to have a backup in case of loss or damage.
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
