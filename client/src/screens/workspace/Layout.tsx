import { Outlet, useNavigate, useParams } from "react-router-dom";
import DashboardSidebar from "../../components/common/DashboardSidebar";
import { useEffect } from "react";
import { useGetSingleWorkSpaceQuery } from "@/redux/services/workspaceApi";
import Header from "@/components/workspace/Header";
import ConversationList from "@/components/workspace/ConversationList";
const WorkspaceLayout = ({
  sidebarlinks,
}: {
  sidebarlinks?: {
    id: number;
    tab: { title: string; path: string; icon: React.JSX.Element };
    list: never[];
  }[];
}) => {
  const navigate = useNavigate();

  const { workspaceId: id, workspaceUserId, channelId } = useParams();
  //   console.log("workspaceUserId", workspaceUserId);
  //   console.log("id", id);

  const { data, isLoading } = useGetSingleWorkSpaceQuery({
    id,
    workspaceUserId,
  });
  // console.log("channel_id", data?.workspace?.channel[0]?.id);
  // redirect when the loading state has completed
  useEffect(() => {
    if (!isLoading && data?.workspace?.channel?.[0]?.id && !channelId) {
      navigate(`channel/${data.workspace.channel[0].id}`);
    }
  }, [isLoading, data, navigate, channelId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-[100vh] p-2 bg-[#1E1F22] sticky flex top-0 overflow-hidden flex-col items-start">
      {/* Header */}
      {/* <DashboardHeader /> */}
      <div className="w-full h-full flex items-start sticky top-0">
        <div className="flex lg:w-[450px] h-full items-start">
          {/* sidebar */}
          <DashboardSidebar
            workspaceTitle={data?.workspace?.name}
            sidebarlinks={sidebarlinks}
          />
          {/* outlet */}
          <div className="w-full bg-[#313338] text-[#DBDEE1] h-full rounded-l-2xl">
            <Header title={data?.workspace?.name} />
            <ConversationList data={data} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default WorkspaceLayout;
