"use client"
import React from "react";

import { IoImageOutline } from "react-icons/io5";
import { HiLink } from "react-icons/hi";
import { SlEmotsmile } from "react-icons/sl";
const EditForm = ({ setIsEdit }: {
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div className='min-h-[60px] bg-white w-full border rounded-lg flex flex-col gap-4 justify-between'>
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
                    <button onClick={() => setIsEdit(false)} className="p-[7px]  bg-red-600 px-4 text-white flex items-center text-sm justify-center rounded-lg">

                        Cancel
                    </button>
                    <button className="p-[7px] bg-[#002b31] px-4 text-white flex items-center gap-2 text-sm justify-center rounded-lg">

                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}


export default EditForm;