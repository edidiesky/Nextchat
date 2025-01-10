"use client"
import React from 'react';
import { motion } from 'framer-motion'
import ChatHeader from './ChatHeader';
import ChatInfo from './ChatInfo'
const chatSlideLeft = {
    initial: {
        width: "0"
    },
    enter: {
        width: "400px",
        transition: {
            duration: .6,
        },
    },
    exit: {
        // right: "-100%",
        width: "0",
        transition: {
            duration: .6,

        },
    },
};
const ChatDetailsSidebar = ({ active, setActive }: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const isGroup = true
    return (
        <motion.div
            variants={chatSlideLeft}
            initial='initial'
            exit='exit'
            animate={active ? "enter" : "exit"}
            className='h-full relative flex flex-col border-l overflow-hidden'>
            <ChatHeader
            
                setActive={setActive} 
            />
            <ChatInfo isGroup={isGroup} />
        </motion.div>
    )
}


export default ChatDetailsSidebar;