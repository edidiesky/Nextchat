import AnimateTextWord from "@/components/common/AnimateTextWord";
import React from "react";
// import img from 'next/image'

import { BsDatabaseDown } from "react-icons/bs";
import { RiInboxLine } from "react-icons/ri";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineCampaign } from "react-icons/md";
const About = () => {
  return (
    <div className="flex w-full py-24 items-center bg-[#fff] gap-8 justify-center">
      <div className="max-w-custom mx-auto w-[90%] flex flex-col gap-12">
        <h2 className="text-3xl lg:text-5xl max-w-[750px] family2 leading-[1.3] capitalize text-dark">
          <AnimateTextWord>
            Meet the workspace that delights your teams & customers
          </AnimateTextWord>
        </h2>
        <div className="w-full grid lg:grid-cols-2 gap-12">
          <div className="pt-8 border rounded-xl bg-[#fcfcfd]">
            <div className="w-full flex flex-col gap-8">
              <div className="flex px-8 text-[#3e3aff] text-lg items-center gap-3">
                <RiInboxLine fontSize="23px" />
                Inbox
              </div>
              <div className="w-full px-8 flex flex-col gap-2">
                <h3 className="text-2xl family2">
                  Centralize your inbound messages
                </h3>
                <p className="text-base">
                  Centralize all your inbound conversations from emails, website
                  chat, WhatsApp, Messenger, phone, and more into one
                  collaborative inbox. This allows multiple team members to
                  access, manage, and respond to messages efficiently.
                </p>
                <h4 className="flex text-[#3e3aff] text-base family2 items-center gap-2">
                  Learn More
                  <HiOutlineChevronRight />
                </h4>
              </div>
              <div className="w-full relative inset-0 mt-8 h-[250px] lg:h-[300px] rounded-[10px]">
                <img
                  alt={"Photoimg Descriptioon"}
                  src={
                    "https://crisp.chat/_ipx/w_533/components/home/HomeFeatures/shared_inbox.png"
                  }
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="pt-8 border rounded-xl bg-[#fcfcfd]">
            <div className="w-full flex flex-col gap-8">
              <div className="flex px-8 text-[#3e3aff] text-lg items-center gap-3">
                <RiInboxLine fontSize="23px" />
                Inbox
              </div>
              <div className="w-full px-8 flex flex-col gap-2">
                <h3 className="text-2xl family2">
                  Make your customers more autonomous
                </h3>
                <p className="text-base">
                  Leverage the power of asynchronous communication by creating,
                  editing, and managing help articles. Create your own help
                  center that fits your brand, providing your customers with
                  easily accessible, comprehensive guides and solutions,
                  enabling them to find answers at any time.
                </p>
                <h4 className="flex text-[#3e3aff] text-base family2 items-center gap-2">
                  Learn More
                  <HiOutlineChevronRight />
                </h4>
              </div>
              <div className="w-full relative inset-0 mt-8 h-[250px] lg:h-[300px] rounded-[10px]">
                <img
                  alt={"Photoimg Descriptioon"}
                  src={
                    "https://crisp.chat/_ipx/w_533/components/home/HomeFeatures/knowledge_base.png"
                  }
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="py-8 border rounded-xl bg-[#fcfcfd]">
            <div className="w-full flex flex-col gap-8">
              <div className="flex px-8 text-[#3e3aff] text-lg items-center gap-3">
                <BsDatabaseDown fontSize="23px" />
                Database
              </div>
              <div className="w-full px-8 flex flex-col gap-2">
                <h3 className="text-2xl family2">
                  Allow your teams to leverage customer's data
                </h3>
                <p className="text-base">
                  Synchronize leads' and customers' data in one unified view
                  gathered from one or multiple sources. This ensures whenever
                  you communicate with someone, you have access to their data
                  and past interactions, enabling more personnal and
                  personalized conversations.
                </p>
                <h4 className="flex text-[#3e3aff] text-base family2 items-center gap-2">
                  Learn More
                  <HiOutlineChevronRight />
                </h4>
              </div>
            </div>
          </div>
          <div className="py-8 border rounded-xl bg-[#fcfcfd]">
            <div className="w-full flex flex-col gap-8">
              <div className="flex px-8 text-[#3e3aff] text-lg items-center gap-3">
                <MdOutlineCampaign fontSize="23px" />
                Campaigns
              </div>
              <div className="w-full px-8 flex flex-col gap-2">
                <h3 className="text-2xl family2">
                  Engage proactively and consistently
                </h3>
                <p className="text-base">
                  Onboard customers with in-context, multichannel automated
                  messages that delivers timely and relevant information and
                  guidance across various channels. This approach ensures
                  customers receive the assistance they need precisely when they
                  need it, enhancing their experience and reducing the time your
                  support team spends on repetitive tasks.
                </p>
                <h4 className="flex text-[#3e3aff] text-base family2 items-center gap-2">
                  Learn More
                  <HiOutlineChevronRight />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
