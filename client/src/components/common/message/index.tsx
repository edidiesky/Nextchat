"use client";
import React from "react";
import MessageHeader from "./MessageHeader";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

export type MessageListType = {
  name: string;
  description: string;
  channelUser: {
    user: {
      image: string;
      name: string;
      id: string;
    };
  }[];
  message: {
    body: string;
    id: string;
    img: string;
    channelid: string;
    userid: string;
    user: {
      name: string;
      username: string;
      img: string;
      id: string;
    };
  }[];
};
const Message = ({
  data,
  setActive,
  active,
  setActiveThreadSidebar,
}: {
  active: boolean;
  data: MessageListType;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveThreadSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="h-full flex-1 flex flex-col overflow-hidden">
      <MessageHeader data={data} active={active} setActive={setActive} />

      <MessageList
        data={data}
        setActiveThreadSidebar={setActiveThreadSidebar}
      />
      <MessageForm />
    </div>
  );
};

export default Message;
