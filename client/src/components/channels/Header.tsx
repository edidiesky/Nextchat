import React from 'react';
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { HiUserGroup } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { BsPlusCircle, BsTrash } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { onGroupNameModal, onCreateChannelModal, onDeleteWorkspaceModal } from '@/redux/slices/modalSlice';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
const Header = ({ title }: { title: string }) => {
    const dispatch = useDispatch()

    return (
        <div className='h-[80px] sticky top-0 items-center border-b border-[#bebebe3c] justify-between flex w-full px-4'>
            <div className="flex-1 flex items-center gap-2">
                <Popover>
                    <PopoverTrigger>
                        <h4 className="text-lg w-full flex p-2 justify-between cursor-pointer text-[#ddd] rounded-lg hover:bg-[#3F4248] items-center gap-1 md:text-lg">
                            <span className="family2">
                                {title}
                            </span>
                            <span className="text-lg">
                                <FiChevronDown />
                            </span>
                        </h4>
                    </PopoverTrigger>
                    <PopoverContent className="w-[230px] border-[#1E1F22] overflow-hidden bg-[#1E1F22] p-0" align="start">
                        <div className="w-[100%] flex px-3 py-2 flex-col">
                            <div className="w-full cursor-pointer hover:bg-[#5865F2] rounded-md text-[#ddd] hover:text-[#fff] flex items-center p-2 justify-between">
                                <span className="text-[15px]">Workspace Invite</span>
                                <span className="text-lg"><HiUserGroup /></span>
                            </div>
                            <div className="w-full cursor-pointer hover:bg-[#5865F2] rounded-md text-[#ddd] hover:text-[#fff] flex items-center p-2 justify-between">
                                <span className="text-[15px]">Workspace Settings</span>
                                <span className="text-lg"><IoSettingsSharp /></span>
                            </div>
                            <div onClick={() => dispatch(onDeleteWorkspaceModal(""))} className="w-full cursor-pointer hover:bg-[#5865F2] rounded-md text-[#ddd] hover:text-[#fff] flex items-center p-2 justify-between">
                                <span className="text-[15px]">Delete Workspace</span>
                                <span className="text-lg text-[#c31212]"><BsTrash /></span>
                            </div>
                            <div onClick={() => dispatch(onCreateChannelModal(""))} className="w-full cursor-pointer hover:bg-[#5865F2] rounded-md text-[#ddd] hover:text-[#fff] flex items-center p-2 justify-between">
                                <span className="text-[15px]">Create A Channel</span>
                                <span className="text-lg"><BsPlusCircle /></span>
                            </div>

                            <div onClick={() => dispatch(onGroupNameModal(""))} className="w-full cursor-pointer hover:bg-[#5865F2] rounded-md text-[#ddd] hover:text-[#fff] flex items-center p-2 justify-between">
                                <span className="text-[15px]">Create A Workspace</span>
                                <span className="text-lg"><BsPlusCircle /></span>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

            </div>

        </div>
    )
}


export default Header;