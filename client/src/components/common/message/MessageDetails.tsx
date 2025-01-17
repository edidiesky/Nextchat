"use client";
import { MockMessageType } from "@/constants";
import { onDeleteMessageModal } from "@/redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import { FiEdit2 } from "react-icons/fi";
import { PiEyes } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import { PiHandsClapping } from "react-icons/pi";
import { TbMessageDots } from "react-icons/tb";
import { FiThumbsUp } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";
import React, { useState } from "react";
import EditForm from "./EditForm";
import Avatar from "../Avatar";
const MessageDetails = ({
  message,
  setActiveThreadSidebar,
}: {
  setActiveThreadSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  message: MockMessageType;
}) => {
  const [active, setActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  // console.log("message", message);
  return (
    <div
      onMouseMove={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="flex w-full p-3 px-6 hover:bg-[#4f4f5110] justify-start relative items-start gap-3"
    >
      {active && !isEdit && (
        <div className="absolute right-20 -top-5 p-1 px-2 border flex items-center gap-2 rounded-lg text-sm min-w-[300px] bg-white z-40">
          <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#4CEA95]">
            <IoIosCheckbox />
          </span>
          <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]">
            <PiEyes />
          </span>
          <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]">
            <PiHandsClapping />
          </span>
          <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]">
            <FiThumbsUp />
          </span>
          <span
            onClick={() => setIsEdit(true)}
            className="flex items-center cursor-pointer  gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md"
          >
            <span
              className="text-lg cursor-pointer rounded-full  flex items-center justify-center
                      text-[#000]"
            >
              {" "}
              <FiEdit2 />
            </span>
            Edit
          </span>
          <span
            onClick={() => setActiveThreadSidebar(true)}
            className="flex items-center cursor-pointer  gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md"
          >
            <span
              className="text-lg cursor-pointer rounded-full  flex items-center justify-center
                      text-[#000]"
            >
              {" "}
              <TbMessageDots />
            </span>
            Reply
          </span>
          <span
            onClick={() => dispatch(onDeleteMessageModal(""))}
            className="flex items-center cursor-pointer  gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md"
          >
            <span
              className="text-lg rounded-full  flex items-center justify-center
                      text-[#f73760]"
            >
              {" "}
              <FiDelete />
            </span>
            Delete
          </span>
        </div>
      )}
      {message?.user?.img ? (
        <img
          width={45}
          height={45}
          className="rounded-full w-[45px] h-[45px] object-cover"
          src={message?.user?.img}
          alt="user_image"
        />
      ) : (
      <Avatar
      username={message?.user?.name}
      />
      )}
      <>
        {isEdit ? (
          <EditForm setIsEdit={setIsEdit} />
        ) : (
          <div className="flex-1 flex items-start flex-col justify-start gap-1">
            <div className="flex w-full items-center gap-2">
              <span className="text-sm md:text-lg family2 text-dark">
                {message?.user?.name}
              </span>
              <span className="text-xs md:text-sm text-dark">
                {/* {message?.createdAt} */}
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <span className="max-w-[100%] md:max-w-[500px] text-sm md:text-base leading-[1.6]">
                {message?.body}
              </span>
              {message?.img && (
                <div className="h-[280px] relative w-full md:w-[450px]">
                  <img
                    className="rounded-lg w-full h-full object-cover"
                    src={message?.img}
                    alt="message_image"
                  />
                </div>
              )}
              <div className="w-full flex items-center gap-3">
                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                  <span className="text-lg rounded-full flex items-center justify-center text-[#000]">
                    {" "}
                    <PiEyes />
                  </span>
                  13
                </span>
                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                  <span className="text-lg rounded-full flex items-center justify-center text-[#000]">
                    {" "}
                    <PiHandsClapping />
                  </span>
                  6
                </span>
                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                  <span className="text-lg rounded-full flex items-center justify-center text-[#000]">
                    {" "}
                    <FiThumbsUp />
                  </span>
                  16
                </span>
                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                  <span className="text-lg rounded-full flex items-center justify-center text-[#4CEA95]">
                    {" "}
                    <IoIosCheckbox />
                  </span>
                  6
                </span>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default MessageDetails;
