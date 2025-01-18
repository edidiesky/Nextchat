"use client";

import { MockMessages } from "@/constants";
import MessageDetails from "./MessageDetails";
import { MessageListType } from ".";
import { SlPeople } from "react-icons/sl";
import { RiEdit2Line } from "react-icons/ri";
const MessageList = ({
  setActiveThreadSidebar,
  data,
}: {
  setActiveThreadSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  data: MessageListType;
}) => {
  // const userInfo = { id: "ryrg34555dgdhfkfgogusga" }
  //   console.log("messages", data?.message)
  return (
    <div
      style={{
        height: "calc(100% - 80px - 60px)",
      }}
      className="items-start overflow-auto flex flex-col gap-2 w-full"
    >
      <div className="w-full">
        <div className="w-full flex items-center min-h-[220px] border-b py-4 gap-4">
          <div className="w-full px-4 lg:px-8 md:max-w-[700px] flex flex-col gap-4">
            <div className="w-full flex items-start flex-col gap-4">
              {/* <div className="w-[80px] h-[80px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-3xl">
                #
              </div> */}
              <h3 className="text-3xl flex-1">
                <span className="family2">#{data?.name}</span>

                <span className="text-base block text-[#1d1c1db3]">
                  {/* This channel is everything for chat app. You can hold meeting,
                  shareimgs, documents, and make decisions together with your
                  team. */}
                  {data?.description}
                </span>
              </h3>
              <div className="w-full flex items-center gap-3">
                <div className="p-2 px-4 flex items-center family2 hover:bg-[#fafafa] text-base cursor-pointer gap-3 border rounded-md">
                  <span className="text-xl">
                    {" "}
                    <SlPeople />
                  </span>
                  Add People to the group
                </div>

                <div className="p-2 px-4 flex items-center family2 hover:bg-[#fafafa] text-base cursor-pointer gap-3 border rounded-md">
                  <span className="text-xl">
                    {" "}
                    <RiEdit2Line />
                  </span>
                  Edit Channel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        {data?.message?.map((message, index) => {
          // const isSender = userInfo?.id === message?.sender?.id
          return (
            <MessageDetails
              setActiveThreadSidebar={setActiveThreadSidebar}
              key={index}
              message={message}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;
