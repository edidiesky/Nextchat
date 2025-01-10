"use client"
import React, { useState } from 'react';

import { motion } from 'framer-motion'
import { BiCamera } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { offGroupNameModal, onGroupMemberModal } from '@/redux/slices/modalSlice';
import { slide } from '@/constants/framer';

const WorkspaceInviteModal = () => {
    const { groupnamemodal } = useSelector((store: { modal: { groupnamemodal: boolean } }) => store.modal);
    const [image, setImage] = useState("");
    const [uploading, setUploading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [formValue, setFormValue] = useState({
        name: "",
    })

    const dispatch = useDispatch()
    const noEntry = formValue.name === "";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleFormSubmision = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };

    const handleFileUpload = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };
    const handleOnGroupMembersModal = () => {
        dispatch(offGroupNameModal(""))
        dispatch(onGroupMemberModal(""))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                },
            }}
            animate={{ opacity: 1 }}
            className='h-[100vh] bg-[#16161639] inset-0 backdrop-blur-sm w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={groupnamemodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[450px] md:max-w-[450px]  md:min-h-[240px] justify-center relative items-start md:rounded-[10px] flex flex-col gap-6 p-8 bg-white">
                <div onClick={() => dispatch(offGroupNameModal(""))} className="absolute top-4 right-4 text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                    <RxCross2 />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl family2">
                        Group Name
                    </h3>
                    {/* <span className="block text-sm md:text-sm max-w-[250px]">
                        Create a name for your group, make it concise and brief.
                    </span> */}
                </div>
                <form onSubmit={handleFormSubmision} className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-center gap-4">
                        <div className="w-20 cursor-pointer h-20 bg-[#3e3aff] rounded-full flex items-center justify-center relative">
                            <label htmlFor="upload" className='cursor-pointer'>
                                <BiCamera className='text-3xl lg:text-5xl text-[#fff]' />
                                <input
                                    type="file"
                                    id="upload"
                                    placeholder="Gigimg"
                                    autoComplete="off"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                    multiple
                                    className="w-full"
                                />
                            </label>
                        </div>
                        <input
                            type={"text"}
                            value={formValue.name}
                            name={"name"}
                            onChange={(e) => onChange(e)}
                            placeholder={"Enter the Group Name"}
                            className="text-sm font-normal input bg-white rounded-full flex-1 "

                        />
                    </div>
                    <div className="w-full text-sm flex items-center justify-end gap-3">
                        <button
                            data-test="GroupNameModal_button_1"
                            onClick={() => dispatch(offGroupNameModal(""))}
                            className="p-3 px-6 hover:opacity-[.5] text-[#000] hover:text-[#fff] flex items-center justify-center cursor-pointer border hover:bg-[#000] rounded-full regular"
                        >
                            Cancel
                        </button>
                        <button
                            data-test="GroupNameModal_button_2"
                            disabled={noEntry}
                            onClick={handleOnGroupMembersModal}
                            className="p-3 px-6 hover:opacity-[.5] text-[#fff] flex items-center justify-center cursor-pointer  bg-[#3e3aff] rounded-full regular"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default WorkspaceInviteModal;