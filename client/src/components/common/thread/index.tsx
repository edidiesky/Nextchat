"use client"
import React from 'react';
import { motion } from 'framer-motion'
import ThreadHeader from './ThreadHeader';
import ThreadMessageList from './ThreadMessageList'
import ThreadForm from './ThreadForm'
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
const ThreadSidebar = ({ active, setActive }: {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <motion.div
            variants={chatSlideLeft}
            initial='initial'
            exit='exit'
            animate={active ? "enter" : "exit"}
            className='h-full relative flex flex-col border-l overflow-hidden'>
            <ThreadHeader
                setActive={setActive}
            />
            <ThreadMessageList />
            <ThreadForm/>
        </motion.div>
    )
}


export default ThreadSidebar;