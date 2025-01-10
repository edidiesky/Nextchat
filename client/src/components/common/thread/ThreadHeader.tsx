"use client"
import React from 'react';
import { RxCross1 } from "react-icons/rx";
const ThreadHeader = ({ setActive }: {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div className='min-h-[80px] items-center sticky top-0 flex border-b w-full px-4'>
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">

                    <h4 className="text-lg lg:text-xl">
                        <span className="family2">
                            Thread
                        </span>
                    </h4>
                </div>
                <div className="flex flex-1 justify-end items-center gap-2">
                    <div onClick={() => setActive(false)} className="text-xl h-10 w-10 rounded-full hover:bg-[#fafafa] cursor-pointer flex items-center justify-center ">
                        <RxCross1 />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ThreadHeader;