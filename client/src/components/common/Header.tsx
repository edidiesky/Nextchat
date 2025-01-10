"use client"
import {
    onLoginModal,
    onRegisterModal,
} from '@/redux/slices/modalSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserProfile from './UserProfile';

const Header = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((store: { auth?: any }) => store.auth)
    // console.log(currentUser);
    return (
        <div className="w-full bg-[#08090a] lg:p-3">
            <div

                className="w-full p-4 border-[#e7e7e736] lg:border min-h-[55px] rounded-xl max-w-custom mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8 lg:gap-12">
                    <Link href={'/'} className='text-lg lg:text-xl text-white family2'>NexChat</Link>
                </div>


                <div className="flex items-center justify-end gap-8 md:gap-12">
                    <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
                        <Link href={'#'} className='text-base text-white font-normal'>Features</Link>
                        <Link href={'#'} className='text-base text-white font-normal'>App</Link>
                        <Link href={'#'} className='text-base text-white font-normal'>Pricing</Link>
                        <Link href={'#'} className='text-base text-white font-normal'>Integration</Link>

                    </div>
                  <div className="flex items-center justify-end">
                        {
                            currentUser ? (

                                <div className="flex items-center justify-end gap-2 md:gap-4">
                                    <Link href={'/dashboard/user'} className="text-sm lg:text-sm px-4 lg:px-6 py-3 border rounded-full text-white bg-[#3e3aff] shadows">Go to Dashboard</Link>

                                    <UserProfile />
                                </div>

                            ) : (
                                <div className="flex items-center justify-end gap-2 md:gap-4">
                                    <span className=''>
                                        <button onClick={() => dispatch(onLoginModal(""))} className="text-xs lg:text-sm px-4 lg:px-4 py-2 border-[#e7e7e736] border rounded-full text-dark bg-[#fff]">Join with Us</button>
                                    </span>
                                    <button onClick={() => dispatch(onRegisterModal(""))} className="text-xs lg:text-sm text-white px-4 lg:px-4 py-2 rounded-full border-[#e7e7e736] border">Get Started</button>
                                </div>
                            )
                        }
                  </div>

                </div>

            </div>
        </div>
    )
}

export default Header;