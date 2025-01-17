import Header from "../../components/workspace/Header";
import ConversationList from "../../components/workspace/ConversationList";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetSingleChannelQuery } from "@/redux/services/channelsApi";
import Message from "@/components/common/message";
import ThreadSidebar from "@/components/common/thread";
import ChatDetailsSidebar from "@/components/common/ChatDetailsSidebar";

const Channel = () => {
  const [sidebaractive, setSidebarActive] = useState(false);
  const [threadsidebaractive, setThreadSidebarActive] = useState(false);
  // const { workspaceId: id, workspaceUserId } = useParams();
  const { channelId, workspaceId } = useParams();
  const { data, isLoading, error, isSuccess } = useGetSingleChannelQuery({
    id: channelId,
    workspaceid: workspaceId,
  });
  // console.log("channelId", channelId);
  // console.log("workspaceId", workspaceId);
  // console.log("channel", data);
  return (
    // <div className="w-full h-full">
    // <Header title={data?.workspace?.name} />
    // <ConversationList data={data} />
    // </div>
    <div className="w-full h-full rounded-r-2xl overflow-hidden bg-[#fff] text-[#000] flex items-start">
      {/* messages */}
      <Message
        data={data}
        active={sidebaractive}
        setActive={setSidebarActive}
        setActiveThreadSidebar={setThreadSidebarActive}
      />
      <ThreadSidebar
        active={threadsidebaractive}
        setActive={setThreadSidebarActive}
      />
      <ChatDetailsSidebar active={sidebaractive} setActive={setSidebarActive} />
    </div>
  );
};

export default Channel;
