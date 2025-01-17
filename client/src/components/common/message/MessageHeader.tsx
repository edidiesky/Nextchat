"use client";
// import Image from "next/image";
import { MockUserList } from "@/constants";
import { TbDotsVertical } from "react-icons/tb";
import { RiSideBarLine } from "react-icons/ri";
const MessageHeader = ({
  data,
  setActive,
  active,
}: {
  active: boolean;
  data: {
    name: string;
    channelUser: {
      user: {
        image: string;
        name: string;
        id: string;
      };
    }[];
  };
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // console.log("name of user",user?.name?.slice("")[0])
  return (
    <div
      style={{
        backdropFilter: "blur(54px)",
      }}
      className="min-h-[80px] items-center bg-[#ffffffb0] sticky top-0 flex border-b border-[#F3F3EE] w-full px-4"
    >
      <div className="flex w-full items-center justify-between gap-4">
        {/* <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
                    <img
                        src={'/images/user_1.jpg'}
                        width={40}
                        height={40}
                        className='rounded-full w-[40px] h-[40px] object-cover'
                        alt='Avatar for user'
                    />
                    <h4 className="text-base">
                        <span className="family2">
                            Daniel Nguyen
                        </span>
                        <span className="text-sm block text-[#777]">Active Now</span>
                    </h4>
                </div> */}
        <div className="flex p-1 px-3 hover:bg-[#eee] cursor-pointer rounded-lg items-center gap-4">
          <h4 className="text-xl">
            <span className="family2">#{data?.name}</span>
            <span className="text-sm block">
              {data?.channelUser?.length} Members Online
            </span>
          </h4>
        </div>

        <div className="flex flex-1 justify-end items-center gap-2">
          {/* <div className="p-2 text-sm border cursor-pointer rounded-full flex items-center gap-2">
                        <IoCheckmarkOutline />
                        Mark as Read
                    </div> */}

          <div className="flex items-center">
            {data?.channelUser?.map(({ user }, index) => {
              console.log("name of user", user?.name);

              return (
                <div
                  key={index}
                  className={`${
                    index !== 0 ? "-ml-4 border-[#f8f8f8] border-2 p-2" : "p-2"
                  } rounded-full w-[40px] h-[40px] relative`}
                >
                  {user?.image ? (
                    <img
                      src={user?.image}
                      alt=""
                      className="w-[100%] h-[100%] object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-[100%] h-[100%] flex items-center text-[#fff] justify-center text-base rounded-full bg-[#A1718A]">
                      {user?.name?.split("")[0]}
                    </div>
                  )}
                </div>
              );
            })}
            <span className="w-[45px] h-[45px] -ml-3 bg-[#f8f8f8] cursor-pointer text-[#000] p-2 z-10 text-sm border-2 border-[#fff] rounded-full flex items-center justify-center">
              10+
            </span>
          </div>
          <span className="w-[40px] h-[40px] bg-[#fff] cursor-pointer text-[#000] hover:bg-[#eee] text-lg rounded-full flex items-center justify-center">
            <TbDotsVertical />
          </span>
          <div
            onClick={() => setActive(!active)}
            className="w-[40px] cursor-pointer h-[40px] bg-[#fff] text-[#000] hover:bg-[#eee] text-base rounded-full flex items-center justify-center"
          >
            <RiSideBarLine fontSize={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
