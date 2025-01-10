"use client"
import { MockMessageType } from "@/constants";
;
import { onDeleteMessageModal } from '@/redux/slices/modalSlice';
import { useDispatch } from 'react-redux'
import { FiEdit2 } from 'react-icons/fi';
import { PiEyesFill } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import { PiHandsClapping } from "react-icons/pi";
import { TbMessageDots } from "react-icons/tb";
import { FiThumbsUp } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import React, { useState } from "react";
import EditForm from "./EditForm";
const MessageDetails = ({ message, setActiveThreadSidebar }: {
    setActiveThreadSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    message: MockMessageType
}) => {
    const [active, setActive] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    return (

        <div onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)} className="flex w-full p-3 px-6 hover:bg-[#4f4f5110] justify-start relative items-start gap-3">
            {active && !isEdit && (
                <div className="absolute right-20 -top-5 p-1 px-2 border flex items-center gap-2 rounded-lg text-sm min-w-[300px] bg-white z-40">
                    <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#4CEA95]"><IoIosCheckbox /></span>
                    <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]"><PiEyesFill /></span>
                    <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]"><PiHandsClapping /></span>
                    <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]"><FiThumbsUp /></span>
                    <span onClick={() => setIsEdit(true)} className="flex items-center cursor-pointer  gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md">
                        <span className="text-lg cursor-pointer rounded-full  flex items-center justify-center
                      text-[#000]"> <FiEdit2 /></span>
                        Edit
                    </span>
                    <span onClick={() => setActiveThreadSidebar(true)} className="flex items-center cursor-pointer  gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md">
                        <span className="text-lg cursor-pointer rounded-full  flex items-center justify-center
                      text-[#000]"> <TbMessageDots /></span>
                        Reply
                    </span>
                    <span onClick={() => dispatch(onDeleteMessageModal(""))} className="flex items-center cursor-pointer  gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md">
                        <span className="text-lg rounded-full  flex items-center justify-center
                      text-[#f73760]"> <AiFillDelete /></span>
                        Delete
                    </span>
                </div>
            )}
            {message?.sender?.image ? (
                <Image
                    width={46}
                    height={46}
                    className='rounded-full w-[46px] h-[46px] object-cover'
                    src={message?.sender?.image}
                    alt="user_image"
                />
            ) : (
                    <div className="w-10 h-10 rounded-full  flex items-center justify-center text-lg text-white bg-[#35373e41]">
                    {message?.sender?.name && message?.sender?.name[0]}
                </div>
            )}
            <>
                {
                    isEdit ? <EditForm setIsEdit={setIsEdit} /> : <div className="flex-1 flex items-start flex-col justify-start gap-1">
                        <div className="flex w-full items-center gap-2">
                            <span className="text-sm md:text-lg family2 text-dark">{message?.sender?.name}</span>
                            <span className="text-xs md:text-sm text-dark">{message?.createdAt}</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <span className="max-w-[100%] md:max-w-[500px] text-[#777] text-sm md:text-base leading-[1.6]">
                                {message?.text}
                            </span>
                            {
                                message?.image && <div className="h-[280px] relative w-full md:w-[450px]">
                                    <Image
                                        fill
                                        className='rounded-lg  object-cover'
                                        src={message?.image}
                                        alt="message_image"
                                    />
                                </div>
                            }
                            <div className="w-full flex items-center gap-3">
                                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                                    <span className="text-lg rounded-full flex items-center justify-center text-[#000]"> <PiEyesFill /></span>
                                    13
                                </span>
                                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                                    <span className="text-lg rounded-full flex items-center justify-center text-[#000]"> <PiHandsClapping /></span>
                                    6
                                </span>
                                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                                    <span className="text-lg rounded-full flex items-center justify-center text-[#000]"> <FiThumbsUp /></span>
                                    16
                                </span>
                                <span className="flex items-center cursor-pointer gap-1 p-2 hover:bg-[#eee] bg-[#fafafa] text-sm rounded-lg">
                                    <span className="text-lg rounded-full flex items-center justify-center text-[#4CEA95]"> <IoIosCheckbox /></span>
                                    6
                                </span>
                            </div>
                        </div>

                    </div>
                }
            </>

        </div>
    )
}


export default MessageDetails;