"use client";
// import Link from 'next/link';
import { HiUserGroup } from "react-icons/hi2";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaHome } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { MockUserList, channelListsData } from "@/constants";
// import { IoMdSettings } from "react-icons/io";
import { BiLink, BiPlus } from "react-icons/bi";
import React from "react";
const ConversationList = React.memo(
  ({
    data,
  }: {
    data: { workspace: { channel: { id: number; name: string }[] } };
  }) => {
    const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
    console.log("workspace", data);
    return (
      <div
        style={{
          height: "calc(100% - 80px)",
        }}
        className="items-start flex overflow-auto justify-between flex-col w-full"
      >
        <div
          style={{
            height: "calc(100% - 65px)",
          }}
          className="w-full flex overflow-auto flex-col pt-4 text-[#ddd] gap-[5px]"
        >
          <div className="flex flex-col gap-2 w-full">
            <span className="flex w-full rounded-full px-4 py-[6px] items-center justify-between text-sm gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[15px] text-[#64676F]">
                  Getting Started
                </span>
              </div>
            </span>
            <div className="w-full flex flex-col gap-1">
              {[
                { name: "Home", icon: <FaHome /> },
                { name: "Members", icon: <HiUserGroup /> },
              ].map((data, index) => {
                return (
                  <div
                    key={index}
                    className="w-[90%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#3F4248] px-3 gap-3 text-sm"
                  >
                    <div className="flex items-center justify-center">
                      {data?.icon}
                    </div>
                    {data.name}
                  </div>
                );
              })}
            </div>
          </div>
          {/* channels */}
          <div className="w-full">
            <Collapsible className="space-y-2" style={{ width: "100%" }}>
              <CollapsibleTrigger style={{ width: "100%" }}>
                <span className="flex w-full rounded-full px-4 py-[6.5px] items-center justify-between text-sm gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 cursor-pointer flex items-center justify-center">
                      <GoChevronDown fontSize={"16px"} />
                    </span>
                    <span className="text-[15px] text-[#64676F]">Channels</span>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <span className="w-6 h-6 rounded-full hover:bg-[#ddd] cursor-pointer flex items-center justify-center">
                      <BiPlus fontSize={"16px"} />
                    </span>
                  </div>
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {data?.workspace?.channel?.map((data, index: any) => {
                  return (
                    <div
                      key={index}
                      className="w-[90%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#3F4248] px-3 gap-3 text-sm"
                    >
                      <div className="w-6 h-6 bg-[#3F4248] rounded-full flex items-center justify-center">
                        <BiLink fontSize={"14px"} />
                      </div>
                      {data.name}
                    </div>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* direct messages */}
          <div className="w-full">
            <Collapsible className="space-y-2" style={{ width: "100%" }}>
              <CollapsibleTrigger style={{ width: "100%" }}>
                <span className="flex w-full rounded-full px-4 py-[6.5px] items-center justify-between text-sm gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 cursor-pointer flex items-center justify-center">
                      <GoChevronDown fontSize={"16px"} />
                    </span>
                    <span className="text-[15px] text-[#64676F]">
                      Direct Messages
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <span className="w-6 h-6 rounded-full hover:bg-[#ddd] cursor-pointer flex items-center justify-center">
                      <BiPlus fontSize={"16px"} />
                    </span>
                  </div>
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {MockUserList.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[95%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#3F4248] px-3 gap-3 text-sm"
                    >
                      <img
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px] rounded-full object-cover"
                        src={data?.img}
                        alt="message_image"
                      />
                      {data.name}
                    </div>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
        <div className="w-full h-[65px] bg-[#1e1f22dd] sticky bottom-0 left-0 flex items-center">
          <div className="w-full px-4 flex items-center gap-2">
            <div className="flex items-center gap-2">
              {currentUser?.image ? (
                <img
                  src={currentUser?.image}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
              ) : (
                <div className="w-10 h-10 flex items-center text-[#fff] justify-center text-base rounded-full bg-[#A1718A]">
                  {currentUser?.name.slice("")[0]}
                </div>
              )}
            </div>
            <h4 className="text-base text-white ">
              <span className="family2">{currentUser?.name}</span>

              <span className="block text-[#64676F] text-sm family1">
                online
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
);

export default ConversationList;
