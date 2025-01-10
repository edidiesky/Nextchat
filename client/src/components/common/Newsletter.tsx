
import AnimateTextWord from '@/components/common/AnimateTextWord';

import React from 'react';

const Newsletter = () => {
    return <div className='flex w-full py-20 items-center gap-8 justify-center'>
        <div className="max-w-custom border bg-[#fcfcfd] py-16 px-8 md:px-16 rounded-[40px] mx-auto w-[90%]">
            <div className="w-full flex flex-col gap-4">
                <h2 className="text-4xl flex-1 md:text-5xl lg:text-7xl max-w-[400px] md:max-w-[600px] text-start leading-[1.2] family2 text-dark family2">

                    <AnimateTextWord type='bigtext'>
                        Ready to get started?
                    </AnimateTextWord>

                </h2>
                <div className="flex flex-1 flex-col gap-4">
                    <span className='text-base lg:text-lg font-normal max-w-[500px]'>
                        <AnimateTextWord>
                            Join the teams who rely on NexChat to provide world-class support to their customers.
                        </AnimateTextWord>
                    </span>
                </div>
                <span className=''>
                    <button
                        className="text-xs lg:text-base px-4 lg:px-8 py-4 rounded-md text-white bg-[#f65713]">Start A Conversation</button>
                </span>

            </div>
        </div>
    </div>;
}

export default Newsletter;