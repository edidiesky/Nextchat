"use client"
import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Message from './message';
import ChatDetailsSidebar from './ChatDetailsSidebar';
import { AnimatePresence } from 'framer-motion';
import ThreadSidebar from './thread';
const DashboardLayout = ({ children, sidebarlinks }: { children: React.ReactNode, sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    const [sidebaractive, setSidebarActive] = useState(false)
    const [threadsidebaractive, setThreadSidebarActive] = useState(false)
    return <div className="w-full h-[100vh] p-2 bg-[#1E1F22] sticky flex top-0 overflow-hidden flex-col items-start">
        {/* Header */}
        {/* <DashboardHeader /> */}
        <div  className="w-full h-full flex items-start sticky top-0">
            <div className="flex lg:w-[450px] h-full items-start">
                {/* sidebar */}
                <DashboardSidebar sidebarlinks={sidebarlinks} />
                {/* outlet */}
                <div className="w-full bg-[#313338] text-[#DBDEE1] h-full rounded-l-2xl">{children}</div>
                
            </div>
            <div className="w-full h-full rounded-r-2xl overflow-hidden bg-[#fff] text-[#000] flex items-start">
                {/* messages */}
                <Message
                    active={sidebaractive}
                    setActive={setSidebarActive}
                    setActiveThreadSidebar={setThreadSidebarActive}
                />
                <ThreadSidebar
                    active={threadsidebaractive}
                    setActive={setThreadSidebarActive}
                />
                <ChatDetailsSidebar
                    active={sidebaractive}
                    setActive={setSidebarActive}
                />
                {/* <AnimatePresence mode='wait'>
                    {
                        sidebaractive &&
                        <ChatDetailsSidebar
                            active={sidebaractive}
                            setActive={setSidebarActive}
                        />
                    }
                </AnimatePresence> */}
            </div>
        </div>
    </div>
}


export default DashboardLayout;