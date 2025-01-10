"use client"
import { MockMessageType } from "@/constants";
;
import { PiEyesFill } from "react-icons/pi";
import { IoIosCheckbox } from "react-icons/io";
import { PiHandsClapping } from "react-icons/pi";
import { TbMessageDots } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import React from "react";
const ThreadMessageDetail = ({ message }: { message: MockMessageType }) => {
    const [active, setActive] = React.useState(false)
    return (

        <div onMouseMove={() => setActive(true)} onMouseLeave={() => setActive(false)} className="flex w-full p-3 px-6 hover:bg-[#9469a11a] justify-start relative items-start gap-3">
            {active && <div className="absolute right-20 -top-5 p-1 px-2 border flex items-center gap-2 rounded-lg text-sm min-w-[300px] bg-white z-40">
                <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#4CEA95]"><IoIosCheckbox /></span>
                <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]"><PiEyesFill /></span>
                <span className="text-lg w-[28px] h-[28px] hover:bg-[#eee] cursor-pointer rounded-full  flex items-center justify-center  text-[#000]"><PiHandsClapping /></span>
                <span className="flex items-center gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md">
                    <span className="text-lg cursor-pointer rounded-full  flex items-center justify-center
                      text-[#000]"> <TbMessageDots /></span>
                    Reply
                </span>
                <span className="flex items-center gap-1 p-2 hover:bg-[#fafafa] text-sm rounded-md">
                    <span className="text-lg cursor-pointer rounded-full  flex items-center justify-center
                      text-[#E93FA8]"> <AiFillDelete /></span>
                    Delete
                </span>
            </div>}
            {message?.sender?.image ? (
                <Image
                    width={46}
                    height={46}
                    className='rounded-full w-[46px] h-[46px] object-cover'
                    src={message?.sender?.image}
                    alt="user_image"
                />
            ) : (
                <div className="w-10 h-10 rounded-full  flex items-center justify-center text-lg text-white bg-[#571F6A]">
                    {message?.sender?.name && message?.sender?.name[0]}
                </div>
            )}

            <div className="flex-1 flex items-start flex-col justify-start">
                <div className="flex w-full items-center gap-2">
                    <span className="text-sm md:text-base family2 text-dark">{message?.sender?.name}</span>
                    <span className="text-xs md:text-sm text-dark">{message?.createdAt}</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <span className="max-w-[100%] text-sm text-[#777] md:text-sm leading-[1.6] text-dark">
                        {message?.text}
                    </span>
                    {
                        message?.image && <div className="h-[200px] relative w-full">
                            <Image
                                fill
                                className='rounded-lg  object-cover'
                                src={message?.image}
                                alt="message_image"
                            />
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}


export default ThreadMessageDetail;