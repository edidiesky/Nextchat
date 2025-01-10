"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { RxCross2 } from "react-icons/rx";
import { LoginFormData } from '@/constants';
import { useSelector, useDispatch } from 'react-redux'
import { offLoginModal, onRegisterModal } from '@/redux/slices/modalSlice';

import { slide } from '@/constants/framer';
import { useLoginMutation } from '@/redux/services/userApi';
import toast from "react-hot-toast";

import { setUserCredentials } from '@/redux/slices/authSlice';
import Loader from '../common/loader';
;
const LoginModal = () => {
    const { loginmodal } = useSelector((store: { modal: { loginmodal: boolean } }) => store.modal);

    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState({
        password: "1234",
        email: "essienedidiong1000@gmail.com",
    })
    const [login, { isLoading, isSuccess }] = useLoginMutation();

    const noEntry = formValue.email === "" || formValue.password === "" || isLoading;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    const handleFormSubmision = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const data = await login(formValue).unwrap();
            // console.log(data)
            dispatch(setUserCredentials({ user: data?.user }));
            toast.success(data?.message);
        } catch (err:any) {
            toast.error(err?.data?.message || err.error);
        }
    };


    const handleOnRegisterModal = () => {
        dispatch(offLoginModal(""))
        dispatch(onRegisterModal(""))
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(offLoginModal(""));
        }
    }, [isSuccess]);
    return (
        <div
            className='h-[100vh]  bg-[#16161639] inset-0 backdrop-blur-sm w-full fixed top-0 left-0 z-[5000] flex items-center justify-center'>
            <motion.div
                variants={slide}
                initial="initial"
                animate={loginmodal ? "enter" : "exit"}
                exit={"exit"}
                className="modal-content w-full min-h-full md:w-[400px] md:max-w-[900px] lg:w-[900px] md:min-h-[600px] lg:h-[600px] justify-center relative items-start bg-white">
                <div onClick={() => dispatch(offLoginModal(""))} className="absolute top-2 md:top-4 right-4 text-[#000] cursor-pointer w-10 lg:w-12 h-10 lg:h-12 flex items-center hover:bg-[#7777772a] rounded-full justify-center z-[20] text-xl">
                    <RxCross2 />
                </div>
                <div className="w-full h-full grid lg:grid-cols-2">
                    <div className="w-full flex flex-col justify-center gap-4 py-16 md:py-12 px-10">
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="text-3xl capitalize md:text-4xl family2">
                                Join us for better Team Collaboration.
                            </h3>
                            <span className="block text-base md:text-lg max-w-[250px] pt-1">
                                Login to your account and check out your team's progress
                            </span>
                        </div>
                        <form onSubmit={handleFormSubmision} className="w-full mt-3 flex flex-col gap-2">
                            {
                                LoginFormData?.map((formdata, index) => {
                                    return <label key={index} htmlFor="" className="text-sm flex flex-col gap-2">
                                        <span>{formdata?.text}</span>
                                        <input
                                            type={formdata?.type}
                                            value={formValue[formdata.name]}
                                            name={formdata.name}
                                            onChange={(e) => onChange(e)}
                                            placeholder={formdata?.label}
                                            className="text-sm font-normal input bg-white rounded-full w-full "

                                        />

                                    </label>
                                })
                            }
                            <div className="w-full mt-4 flex items-center justify-center flex-col gap-3">
                                <button
                                    data-test="loginmodal_button"
                                    type="submit"
                                    disabled={noEntry}
                                    className="p-3 px-8 hover:opacity-[.5] text-[#fff] flex btn items-center justify-center w-full cursor-pointer  bg-[#000] rounded-md regular"
                                >
                                    {isLoading ? (
                                        <div className="w-full flex justify-center items-center gap-4">
                                            <Loader type="dots" color={"#fff"} /> Login in progress
                                            {/* Login in progress */}
                                        </div>
                                    ) : (
                                        "Sign In"
                                    )}
                                </button>
                                <div className="w-full flex items-center justify-start gap-2">
                                    <span className="text-sm font-normal text-dark">
                                        <span className="">Not yet a Member?</span>{" "}
                                        <span
                                            onClick={handleOnRegisterModal}
                                            style={{ textDecoration: "underline" }}
                                            className="font-booking_font_bold family2 cursor-pointer"
                                        >
                                            Sign Up
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-full h-full relative">
                        <Image
                            src={'https://app.crisp.chat/images/components/initiate/InitiateLayout/illustration_background.svg'}
                            className='w-full object-cover z-4'
                            fill
                            alt='login background'
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginModal;