
import Header from "../../components/channels/Header";
import ConversationList from "../../components/channels/ConversationList";
const WorkspaceLayout = () => {
    return (
        <div className="w-full">
            <Header title="Dev Expert" />
            <ConversationList />
        </div>
    )
}


export default WorkspaceLayout;