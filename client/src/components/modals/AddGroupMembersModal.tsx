"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion'
;
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { offGroupMemberModal } from '@/redux/slices/modalSlice';
import { slide } from '@/constants/framer';
import { PiCheck } from "react-icons/pi";
import {  MockUserList } from "@/constants";

const AddGroupMembersModal = () => {
    const { addgroupmembersmodal } = useSelector((store: { modal: { addgroupmembersmodal: boolean } }) => store.modal);
    const [formValue, setFormValue] = useState({
        name: "",
    })
    const dispatch = useDispatch()

    // let newMembers = new Map()
    const noEntry = formValue.name === "";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleFormSubmision = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };
    type MockChatType = {
       img: string,
        name: string
        email: string
        lastMessage: string;
        createdAt: string;
    }
    const [newMembers, setNewMembers] = useState<MockChatType[]>([])
    const handleAddNewMembers = (data: MockChatType) => {
        setNewMembers((prev) => {
            const contactExists = prev.find((user) => user?.email === data?.email)
            if (contactExists) {
                return prev.filter((user) => user.email !== data.email)
            } else {
                return [...prev, data]
            }
        })
    }
    const handleOnGroupMembersModal = () => {
        dispatch(offGroupMemberModal(""))
    }
// @EOEboh
    return (
        <div
           
            className='h-[100vh] bg-[#16161639] inset-0 backdrop-blur-sm  w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={addgroupmembersmodal ? "enter" : "exit"}
                exit={"exit"}
                className="w-full min-h-full md:w-[420px] md:max-w-[420px]  md:min-h-[550px] justify-between relative items-start md:rounded-[10px] flex flex-col bg-white">
                <div role="button"
                    aria-label="Close Modal" onClick={() => dispatch(offGroupMemberModal(""))} className="absolute top-4 right-4 text-[#000] cursor-pointer w-12 h-12 flex items-center hover:bg-[#fafafa] rounded-full justify-center text-xl">
                    <RxCross2 />
                </div>
                <div className="w-full py-6 px-4 border-b flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl family2">
                        Add  Group Members
                    </h3>
                    <div className="w-full flex items-center gap-2 flex-wrap">
                        <div className="flex items-center">
                            {
                                newMembers?.map((user, index) => {
                                    return (
                                        <div key={index} className={`${index !== 0 ? "-ml-4 border-[#3e3aff] border-2 p-2" : "p-2"}  rounded-full w-[35px] h-[35px] relative`}>
                                            <Image
                                                src={user?.image}
                                                fill
                                                className='rounded-full relative object-cover'
                                                alt='Avatar for user'
                                            />

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <input
                            type={"text"}
                            value={formValue.name}
                            name={"name"}
                            onChange={(e) => onChange(e)}
                            placeholder={"Search for Contacts"}
                            className="text-sm font-normal bg-white border-none outline-none p-2 rounded-full flex-1 "

                        />
                    </div>
                </div>
                <div className="w-full h-[350px] overflow-auto flex flex-col">
                    {
                        MockUserList?.map((user, index) => {
                            const active = newMembers.find((contact) => contact?.email === user?.email)
                            // console.log(active)
                            return (
                                <div onClick={() => handleAddNewMembers(user)} key={index} className="w-full p-3 px-4 lg:pl-6 hover:bg-[#fafafa] cursor-pointer border-b flex flex-col gap-3">
                                    <div className="w-full flex items-start justify-between">
                                        <div className="flex flex-1 items-center gap-2">
                                            <div className={`${active ? "border-[#3e3aff] border-2 p-2" : ""} rounded-full w-[45px] h-[45px] relative`}>
                                                <Image
                                                    src={user?.image}
                                                    fill
                                                    className='rounded-full relative object-cover'
                                                    alt='Avatar for user'
                                                />
                                                {
                                                    active && <div className="absolute flex items-center justify-center w-[24px] h-[24px] rounded-full border-2 border-[#fff] p-2 bottom-0 bg-[#3e3aff] -right-1 ">
                                                        <span className="text-sm lg:text-base text-[#fff]">
                                                            <PiCheck />
                                                        </span>
                                                    </div>
                                                }

                                            </div>
                                            <h4 className="text-sm flex-1 md:text-base">
                                                <div className="flex flex-col flex-1">
                                                    <span className="family2">
                                                        {user?.name}
                                                    </span>
                                                    <span className="text-xs">Last seen {user?.createdAt}</span>
                                                </div>

                                            </h4>

                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="w-full px-4 h-[70px] border-t text-sm flex items-center justify-end gap-3">
                    <button
                        data-test="GroupNameModal_button_1"
                        onClick={() => dispatch(offGroupMemberModal(""))}
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
                        Create
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default AddGroupMembersModal;