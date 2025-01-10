"use client"

import { MockMessages } from "@/constants";
import MessageDetails from "./MessageDetails";

const MessageList = ({ setActiveThreadSidebar }: {
    setActiveThreadSidebar: React.Dispatch<React.SetStateAction<boolean>>

}) => {
    // const userInfo = { id: "ryrg34555dgdhfkfgogusga" }
    return (
        <div style={{
            maxHeight: "calc(100% - 80px - 60px)",
        }} className='items-start overflow-auto flex flex-col gap-2 w-full'>
            <div className="w-full">
                <div className="w-full flex items-center min-h-[250px] border-b py-4 gap-4">
                    <div className="w-full px-4 lg:px-8 md:max-w-[700px] flex flex-col gap-4">
                        <div className="w-full flex items-start flex-col gap-4">
                            <div className="w-[80px] h-[80px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-3xl">#</div>
                            <h3 className="text-3xl flex-1">
                                <span className="family2">
                                    Welcome to #Chat Channel
                                </span>

                                <span className="text-base block text-[#777]">
                                    This channel is everything for chat app. You can hold meeting, shareimgs, documents, and make decisions together with your team.
                                </span>

                            </h3>
                        </div>

                    </div>
                </div>
            </div>
            {
                MockMessages?.map((message, index) => {
                    // const isSender = userInfo?.id === message?.sender?.id
                    return <MessageDetails setActiveThreadSidebar={setActiveThreadSidebar} key={index} message={message} />
                })
            }
        </div>
    )
}


export default MessageList;