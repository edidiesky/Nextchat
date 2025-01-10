"use client"
import React from 'react';
import { MockMessages } from "@/constants";
import ThreadMessageDetail from "./ThreadMessageDetail";
const ThreadMessageList = () => {
    return (
        <div style={{
            maxHeight: "calc(100% - 80px - 60px)",
        }} className='items-start overflow-auto flex py-4 flex-col gap-2 w-full'>
            {
                MockMessages?.map((message, index) => {
                    // const isSender = userInfo?.id === message?.sender?.id
                    return <ThreadMessageDetail key={index} message={message} />
                })
            }
        </div>
    )
}



export default ThreadMessageList;