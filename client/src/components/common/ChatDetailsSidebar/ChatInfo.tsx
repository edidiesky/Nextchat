"use client"
;
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { BiLink, BiPlus } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MockUserList } from "@/constants";
import { GoChevronDown } from "react-icons/go";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
const ChatInfo = ({ isGroup }: { isGroup?: boolean }) => {

    const userInfo = {
        id: "ryrg34555dgdhfkfgogusga", createdAt: "24th Set 2024", phone: "01733739933", email: "lexlieAlexander@gmail.com",
        name: " Development Channel", role: "CoFounder at UxCel"
    }

    if (isGroup) {
        return (
            <div style={{
                maxHeight: "calc(100% - 63px)",
            }} className='items-start overflow-auto flex flex-col w-full'>
                {/* top */}
                <div className="w-full relative ">
                    <div className="w-full h-40 bg-[#eee]">
                    </div>
                    <div className="w-full px-4">
                        <div className="w-full flex flex-col px-4 border-b pb-8">
                            <div className="w-full flex py-4 -mt-16  flex-col gap-2">
                                <div className="rounded-full w-[100px] h-[100px] border-[#fff] relative border-4 p-6 bg-white">
                                    <img
                                        src={'/images/user_1.jpg'}
                                        fill
                                        className='rounded-full w-full h-full object-cover'
                                        alt='Avatar for user'
                                    />
                                </div>
                                <h4>
                                    <span className="family2 text-lg lg:text-xl">
                                        {"Janeth Kamos"}
                                    </span>
                                    <span className="text-sm md:text-base block text-[#777]">
                                        Frontend Developer
                                    </span>
                                </h4>
                            </div>
                            <div className="flex p-3 hover:bg-[#fafafa] border rounded-full text-base items-center justify-center gap-4">
                                <IoChatboxEllipsesOutline fontSize={'20px'} />
                                Message
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
                {/* center */}

                <div className="w-full flex py-6 px-4 flex-col gap-4">
                    <h4 className="text-start px-4">
                        <span className="family2 text-lg lg:text-lg">
                            Contact Information
                        </span>
                    </h4>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex items-center gap-4 px-4">
                            <span className="text-lg w-12 h-12 rounded-full bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center"><MdOutlineMailOutline /></span>
                            <h4 className="text-start">
                                <span className="text-sm md:text-base family2">Email</span>
                                <span className="block text-sm md:text-sm">
                                    {userInfo?.email}
                                </span>
                            </h4>
                        </div>
                        <div className="flex items-center gap-4 px-4">
                            <span className="text-base w-12 h-12 rounded-full bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center"><MdOutlinePhone /></span>
                            <h4 className="text-start">
                                <span className="text-sm md:text-base family2">Phone</span>
                                <span className="text-sm block md:text-sm">
                                    {userInfo?.phone}
                                </span>
                            </h4>
                        </div>
                        <div className="flex items-center gap-4 px-4">
                            <span className="text-base w-12 h-12 rounded-full bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center"><CiCalendarDate /></span>
                            <h4 className="text-start">
                                <span className="text-sm md:text-base family2">Date Joined</span>
                                <span className="text-sm md:text-sm block">
                                    {userInfo?.createdAt}
                                </span>
                            </h4>
                        </div>
                    </div>

                </div>
                {/* bottom */}
            </div>
        )
    }
    return (
        <div style={{
            maxHeight: "calc(100% - 63px)",
        }} className='items-start overflow-auto flex flex-col w-full'>
            {/* top */}
            <div className="w-full  relative">
                <div className="w-full h-40 bg-[#eee]">
                </div>
                <div className="w-full flex py-4 -mt-16 px-4 border-b flex-col gap-2">
                    <div className="rounded-full w-[100px] h-[100px] border-[#fff] relative border-4 p-6 bg-white">
                        <Image
                            src={'/images/user_1.jpg'}
                            fill
                            className='rounded-full w-full h-full object-cover'
                            alt='Avatar for user'
                        />
                    </div>
                    <h4>
                        <span className="family2 text-lg lg:text-xl">
                            {userInfo?.name || "Development Channel"}
                        </span>
                        <span className="text-sm md:text-base block text-[#777]">
                            This is a professional channel that is dedicated to fostering the development and speed of Nexchat brand. The main aim is to welcome innovative minds

                        </span>
                    </h4>
                </div>
            </div>
            {/* center */}
            <div className="w-full py-3">
                <Collapsible className='space-y-2' style={{ width: "100%" }}>
                    <CollapsibleTrigger style={{ width: "100%" }}>
                        <span className='flex w-full rounded-full px-4 py-[6.5px] items-center justify-between text-sm gap-4'>
                            <div className="flex items-center gap-2">
                                <span className="family2 text-lg lg:text-lg">Members - 4</span>
                            </div>
                            <div className="flex items-center justify-end gap-1">
                                <span className="w-6 h-6 rounded-full hover:bg-[#eee] cursor-pointer flex items-center justify-center">
                                    <GoChevronDown fontSize={'16px'} />
                                </span>
                                <span className="w-6 h-6 rounded-full hover:bg-[#eee] cursor-pointer flex items-center justify-center">
                                    <BiPlus fontSize={'16px'} />
                                </span>
                            </div>
                        </span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {MockUserList.map((data, index) => {
                            return (
                                <div key={index} className="w-[95%] mx-auto flex cursor-pointer rounded-full items-center py-2 hover:bg-[#8c5a9b16] px-3 gap-3 text-sm lg:text-base">
                                    <Image
                                        width={40}
                                        height={40}
                                        className='w-[40px] h-[40px] rounded-full object-cover'
                                        src={data?.image}
                                        alt="message_image"
                                    />
                                    <h4>
                                        <span className="family2"> {data.name}</span>
                                        <span className="text-sm block ">Frontend Developer</span>
                                    </h4>
                                </div>
                            )
                        })}
                    </CollapsibleContent>
                </Collapsible>
            </div>
            {/* <div className="w-full flex py-6 flex-col gap-6">
                <h4 className="text-start px-4">
                    <span className="family2 text-lg">
                        Contact
                    </span>
                </h4>
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-4 px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><MdOutlineMailOutline /></span>

                            <span className="text-sm">Email</span>
                        </div>

                        <h4 className="text-start">
                            <span className="family2 text-sm">
                                {userInfo?.email}
                            </span>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4 px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><MdOutlinePhone /></span>

                            <span className="text-sm">Phone</span>
                        </div>

                        <h4 className="text-start">
                            <span className="family2 text-sm">
                                {userInfo?.phone}
                            </span>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4 px-4">
                        <div className="flex items-center gap-2">
                            <span className="text-lg"><CiCalendarDate /></span>

                            <span className="text-sm">Created</span>
                        </div>

                        <h4 className="text-start">
                            <span className="family2 text-sm">
                                {userInfo?.createdAt}
                            </span>
                        </h4>
                    </div>
                </div>

            </div> */}
            {/* bottom */}
        </div>
    )
}


export default ChatInfo;