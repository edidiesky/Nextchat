import Header from "../../components/channels/Header";
import ConversationList from "../../components/channels/ConversationList";
import { useParams } from "react-router-dom";
import { useGetSingleWorkSpaceQuery } from "@/redux/services/workspaceApi";

const WorkspaceLayout = () => {
  const { workspaceId: id, workspaceUserId } = useParams();

  const { data } = useGetSingleWorkSpaceQuery({
    id,
    workspaceUserId,
  });
  return (
    <div className="w-full h-full">
      <Header title={data?.workspace?.name} />
      <ConversationList data={data} />
    </div>
  );
};

export default WorkspaceLayout;
