// import Image from 'next/image'


import React from 'react';
import AnimateTextWord from '@/components/common/AnimateTextWord';

const TopCompanies = () => {
    return (
        <div className='flex w-full py-8 items-center bg-[#fff] gap-8 justify-center'>

            <div className="max-w-custom mx-auto w-[90%] flex flex-col gap-12 md:gap-20">
                <div className="w-full flex items-center justify-center">
                    <div className="p-8 md:px-12 border max-w-[700px] flex flex-col gap-4">
                        <h4 className="text-xl md:text-2xl w-full leading-[1.6]">
                            Plain let us to go from having to be everywhere all at once, to everything all in one place. All of our support channels, insights, and customer communication in one tool instead of four.
                        </h4>
                        <div className="w-full flex items-center gap-4">
                            <img
                                width={50}
                                height={50}
                                alt={'Photoimg Description'}
                                src={'/images/user_5.jpg'}
                                className='w-[50px] h-[50px] rounded-full object-cover'
                            />
                            <h4 className="text-lg md:text-xl flex-1">
                                Carlos Costa
                                <span className="block text-base lg:text-lg text-[#777]">Head of Developer Success</span>
                            </h4>

                        </div>
                      

                    </div>
                </div>
                <h2 className="text-3xl lg:text-5xl w-full max-w-[700px] leading-[1.6] capitalize text-dark ">
                    <span className="">
                        <AnimateTextWord>
                            Built for customer support, marketing, and sales. All together.
                        </AnimateTextWord>
                    </span>

                    <span className="text-lg pt-3 block">
                        Stay in complete control. Maintain complete visibility over your queue, configure granular SLAs and notifications, and bring your support and pricing structure to Plain.
                    </span>
                </h2>
                <div className="w-full grid md:grid-cols-3 gap-6">
                    <div className="py-6 px-4 hover:bg-[#fcfcfd] min-h-[200px] lg:min-h-[300px] justify-center border rounded-lg w-full flex flex-col gap-4">
                        <div className="w-[80px] h-[70px] relative rounded-[10px]">
                            <img
                                
                                alt={'Photoimg Descriptioon'}
                                src={'/images/icon_1.png'}
                                className='w-full object-cover'
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="text-2xl family2">Customer Support</h3>
                            <p className="text-base">
                                Retarget customers by sending target emails and in-app messages

                            </p>
                        </div>
                    </div>
                    <div className="py-6 px-4 hover:bg-[#fcfcfd] min-h-[200px] lg:min-h-[300px] justify-center border rounded-lg w-full flex flex-col gap-4">
                        <div className="w-[80px] h-[70px] relative rounded-[10px]">
                            <img
                                
                                alt={'Photoimg Descriptioon'}
                                src={'/images/icon_2.png'}
                                className='w-full object-cover'
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="text-2xl family2">Inbound Sales</h3>
                            <p className="text-base">
                                Retarget customers by sending target emails and in-app messages

                            </p>
                        </div>
                    </div>
                    <div className="py-6 px-4 hover:bg-[#fcfcfd] min-h-[200px] lg:min-h-[300px] justify-center border rounded-lg w-full flex flex-col gap-4">
                        <div className="w-[80px] h-[70px] relative rounded-[10px]">
                            <img
                                
                                alt={'Photoimg Descriptioon'}
                                src={'/images/icons_3.png'}
                                className='w-full object-cover'
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <h3 className="text-2xl family2">Marketing</h3>
                            <p className="text-base">
                                Cross-channel customer support experiences using modern messaging

                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="py-20 px-8 border flex flex-col gap-12 w-full rounded-[40px]">

                    <div className="w-full grid md:grid-cols-3 gap-6">
                        <div className="py-6 px-4 bg-[#fcfcfd] border rounded-lg w-full flex flex-col gap-4">
                            <div className="w-[80px] h-[70px] relative rounded-[10px]">
                                <img
                                    
                                    alt={'Photoimg Descriptioon'}
                                    src={'/images/icon_1.png'}
                                    className='w-full object-cover'
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-2xl family2">Customer Support</h3>
                                <p className="text-base">
                                    Retarget customers by sending target emails and in-app messages

                                </p>
                            </div>
                        </div>
                        <div className="py-6 px-4 bg-[#fcfcfd] border rounded-lg w-full flex flex-col gap-4">
                            <div className="w-[80px] h-[70px] relative rounded-[10px]">
                                <img
                                    
                                    alt={'Photoimg Descriptioon'}
                                    src={'/images/icon_2.png'}
                                    className='w-full object-cover'
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-2xl family2">Inbound Sales</h3>
                                <p className="text-base">
                                    Retarget customers by sending target emails and in-app messages

                                </p>
                            </div>
                        </div>
                        <div className="py-6 px-4 bg-[#fcfcfd] border rounded-lg w-full flex flex-col gap-4">
                            <div className="w-[80px] h-[70px] relative rounded-[10px]">
                                <img
                                    
                                    alt={'Photoimg Descriptioon'}
                                    src={'/images/icons_3.png'}
                                    className='w-full object-cover'
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <h3 className="text-2xl family2">Marketing</h3>
                                <p className="text-base">
                                    Cross-channel customer support experiences using modern messaging

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-1 bg-[#fcfcfd] rounded-2xl border">
                        <div className="w-full h-[380px] relative lg:h-[700px] rounded-2xl">
                            <img
                                
                                alt={'Photoimg Descriptioon'}
                                src={'/images/image_1.jpeg'}
                                className='w-full object-cover rounded-2xl'
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default TopCompanies;