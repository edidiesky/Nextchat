import { Outlet, useParams } from "react-router-dom";
import DashboardSidebar from "../../components/common/DashboardSidebar";
import Message from "../../components/common/message";
import ThreadSidebar from "../../components/common/thread";
import ChatDetailsSidebar from "../../components/common/ChatDetailsSidebar";
import { useState } from "react";
import { useGetSingleWorkSpaceQuery } from "@/redux/services/workspaceApi";
const WorkspaceLayout = ({
  sidebarlinks,
}: {
  sidebarlinks?: {
    id: number;
    tab: { title: string; path: string; icon: React.JSX.Element };
    list: never[];
  }[];
}) => {
  const [sidebaractive, setSidebarActive] = useState(false);
  const [threadsidebaractive, setThreadSidebarActive] = useState(false);

  const { workspaceId: id, workspaceUserId } = useParams();
  //   console.log("workspaceUserId", workspaceUserId);
  //   console.log("id", id);

  const { data, isLoading } = useGetSingleWorkSpaceQuery({
    id,
    workspaceUserId,
  });
  console.log("workspaceTitle", data?.workspace?.name);
  if (isLoading) {
    return null;
  }
  return (
    <div className="w-full h-[100vh] p-2 bg-[#1E1F22] sticky flex top-0 overflow-hidden flex-col items-start">
      {/* Header */}
      {/* <DashboardHeader /> */}
      <div className="w-full h-full flex items-start sticky top-0">
        <div className="flex lg:w-[450px] h-full items-start">
          {/* sidebar */}
          <DashboardSidebar workspaceTitle={data?.workspace?.name} sidebarlinks={sidebarlinks} />
          {/* outlet */}
          <div className="w-full bg-[#313338] text-[#DBDEE1] h-full rounded-l-2xl">
            <Outlet />
          </div>
        </div>
        <div className="w-full h-full rounded-r-2xl overflow-hidden bg-[#fff] text-[#000] flex items-start">
          {/* messages */}
          <Message
            active={sidebaractive}
            setActive={setSidebarActive}
            setActiveThreadSidebar={setThreadSidebarActive}
          />
          <ThreadSidebar
            active={threadsidebaractive}
            setActive={setThreadSidebarActive}
          />
          <ChatDetailsSidebar
            active={sidebaractive}
            setActive={setSidebarActive}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
