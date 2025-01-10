"use client"
import { IoImageOutline } from "react-icons/io5";
import { HiLink } from "react-icons/hi";
import { SlEmotsmile } from "react-icons/sl";
import { BiSolidSend } from "react-icons/bi";
const MessageForm = () => {
    return (
        <div style={{
            backdropFilter: "blur(14px)"
        }} className="w-full bg-[rgba(255,255,255,0.14)] px-8 py-2">
            <div className='min-h-[60px] w-full border rounded-lg flex flex-col gap-4 justify-between'>
                <textarea placeholder="Write your Message here..." className="h-[50px] p-4 bg-transparent resize-none outline-none"></textarea>
                <div className="w-full px-4 pb-3 flex items-center gap-4 justify-between">
                    <div className="flex items-center">
                        <div className="w-10 text-lg rounded-full cursor-pointer hover:bg-[#eee] h-10 flex items-center justify-center">
                            <IoImageOutline />
                        </div>
                        <div className="w-10 text-lg rounded-full cursor-pointer hover:bg-[#eee] h-10 flex items-center justify-center">
                            <SlEmotsmile />
                        </div> <div className="w-10 text-lg rounded-full cursor-pointer hover:bg-[#eee] h-10 flex items-center justify-center">
                            <HiLink />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                        <button className="p-2 bg-[#002b31] px-4 text-white flex items-center gap-2 text-sm justify-center rounded-lg">
                            <BiSolidSend />
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MessageForm;