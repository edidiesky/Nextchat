"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { offDeleteWorkspaceModal } from '@/redux/slices/modalSlice';
;
import { slide } from '@/constants/framer';
import { useLoginMutation } from '@/redux/services/userApi';
import toast from "react-hot-toast";
import Loader from '../../common/loader';
const DeleteWorkspaceModal = () => {
    const dispatch = useDispatch()
    const { deleteworkspacemodal } = useSelector((store: { modal: { deleteworkspacemodal: boolean } }) => store.modal);
    const [login, { isLoading, isSuccess }] = useLoginMutation();
    const handleoffDeleteMessageModal = () => {
        dispatch(offDeleteWorkspaceModal(""))
    }

    return (
        <div
            className='h-[100vh] bg-[#16161639] inset-0 backdrop-blur-sm w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={deleteworkspacemodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[500px] md:max-w-[550px] pt-6 md:min-h-[200px] justify-between relative items-start md:rounded-[10px] flex flex-col gap-4 bg-white">

                <div className="w-full flex px-8 items-center justify-between gap-1">
                    <h3 className="text-2xl md:text-2xl ">
                        <span className="family2">  Delete WorkSpace</span>
                      
                        <span className="text-sm block text-[#777] max-w-[600px] md:text-sm">
                          You have to cautious with this action because it cannot be reversed. Are you sure you want to delete this workspace? This cannot be undone!
                        </span>
                    </h3>
                    {/* <div onClick={() => dispatch(offDeleteWorkspaceModal(""))} className="text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                        <RxCross2 />
                    </div> */}
                </div>
                <div className="w-full flex flex-col gap-4">

                    <div className="w-full text-sm flex px-8 py-4 border-t items-center justify-end gap-3">
                        <button
                            data-test="GroupNameModal_button_1"
                            onClick={handleoffDeleteMessageModal}
                            className="p-2 px-6 text-[#000] hover:text-[#000] flex items-center justify-center cursor-pointer hover:bg-[#fafafa] rounded-full regular"
                        >
                            Cancel
                        </button>
                        <button
                            data-test="GroupNameModal_button_2"
                            onClick={handleoffDeleteMessageModal}
                            className="p-2 px-6 text-[#fff] flex items-center justify-center cursor-pointer  bg-[#f73760] rounded-full regular"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}



export default DeleteWorkspaceModal;