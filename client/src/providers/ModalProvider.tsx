"use client"
import React from 'react';
import { AnimatePresence } from "framer-motion";
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { useSelector } from 'react-redux'
import CreateWorkspaceModal from '@/components/modals/createModals/CreateWorkspaceModal';
import CreateChannelModal from '@/components/modals/createModals/CreateChannelModal';
// CreateChannelM
import AddGroupMembersModal from '@/components/modals/AddGroupMembersModal';
import DeleteMessageModal from '@/components/modals/deleteModals/DeleteMessageModal';
import DeleteWorkspaceModal from '@/components/modals/deleteModals/DeleteWorkspaceModal';
import DeleteChannelModal from '@/components/modals/deleteModals/DeleteChannelModal';
// DeleteWorkspaceModal DeleteWorkspaceModal
const ModalProvider = () => {
    const {
        loginmodal,
        registermodal,
        deletemessagemodal,
        groupnamemodal,
        addgroupmembersmodal,
        channelmodal,
        deletechannelmodal,
        deleteworkspacemodal
    } = useSelector((store: { modal?: any }) => store.modal);

    return (
        <>
            {/* animating the login modal */}
            <AnimatePresence mode='wait' >
                {loginmodal && <LoginModal />}
            </AnimatePresence>
            {/* animating the register modal */}
            <AnimatePresence mode='wait' >
                {registermodal && <RegisterModal />}
            </AnimatePresence>
            <AnimatePresence mode='wait' >
                {groupnamemodal && <CreateWorkspaceModal />}
            </AnimatePresence>
            {/* create channel modal */}
            <AnimatePresence mode='wait' >
                {channelmodal && <CreateChannelModal />}
            </AnimatePresence>
            {/* add group members modal */}
            <AnimatePresence mode='wait' >
                {addgroupmembersmodal && <AddGroupMembersModal />}
            </AnimatePresence>

            {/* delete channel modal */}
            <AnimatePresence mode='wait' >
                {deletechannelmodal && <DeleteChannelModal />}
            </AnimatePresence>
            {/* delete workspace modal */}
            <AnimatePresence mode='wait' >
                {deleteworkspacemodal && <DeleteWorkspaceModal />}
            </AnimatePresence>
            {/* delete Message Modal */}
            <AnimatePresence mode='wait' >
                {deletemessagemodal && <DeleteMessageModal />}
            </AnimatePresence>
        </>
    );
}


export default ModalProvider;