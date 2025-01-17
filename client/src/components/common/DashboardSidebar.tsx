"use client";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { onGroupNameModal } from "@/redux/slices/modalSlice";
import { FiPlus } from "react-icons/fi";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const DashboardSidebar = ({
  sidebarlinks,
  workspaceTitle,
}: {
  workspaceTitle: string;
  sidebarlinks?: {
    id: number;
    tab: { title: string; path: string; icon: React.JSX.Element };
    list: never[];
  }[];
}) => {
  const dispatch = useDispatch();
  // console.log(workspaceTitle?.split("-")[0][0]);
  return (
    <div className=" bg-[#1E1F22] lg:block hidden h-[100%] w-[100px] px-2 overflow-auto sticky py-3 top-0">
      <div className="w-full h-full flex justify-between flex-col gap-3">
        <div className="flex w-full flex-col gap-8">
          <div className="w-full flex items-center justify-center">
            <div className="w-[55px] h-[55px] rounded-xl flex bg-[#5865F2] items-center justify-center text-lg text-[#fff]">
              {workspaceTitle?.split("-")[0][0]}
              {workspaceTitle?.split("-")[1][0]}
            </div>
          </div>
          <div className="flex-1 flex items-start flex-col text-xs gap-4">
            {sidebarlinks?.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={`/workspace/user${link?.tab?.path}`}
                  className="flex justify-center w-full flex-col text-xs text-[#777] items-center gap-1"
                >
                  <div className="w-[50px] h-[50px] rounded-full flex bg-[#46474ab4] hover:bg-[#35373ed5] items-center justify-center text-xl text-[#fff]">
                    {link.tab?.icon}
                  </div>
                  {link?.tab?.title}
                </Link>
              );
            })}
            <button
              onClick={() => dispatch(onGroupNameModal(""))}
              className="flex justify-center w-full flex-col text-xs text-[#777] items-center gap-1"
            >
              <div className="w-[60px] h-[60px] rounded-full flex bg-[#46474ab4] hover:bg-[#35373ed5] items-center justify-center text-xl text-[#fff]">
                <FiPlus />
              </div>
              Add Workspace
            </button>
          </div>
        </div>
        <div className="flex-1 pb-4 flex items-center justify-end flex-col text-xs gap-4">
          {/* <button
                        className='flex justify-center w-full flex-col text-xs text-[#fff] items-center gap-1'>
                        Account
                        <div className="w-[60px] h-[60px] rounded-full flex bg-[#5865F2] items-center
                         justify-center text-xl text-[#fff]">
                            V
                        </div>
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
