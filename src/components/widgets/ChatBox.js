import { Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { ChatTypeBox } from "./ChatTypeBox";
import { MessageList } from "./MessageList";

import MessageData from "./../../__mock__/messages.json";
import { useState } from "react";

const Wrapper = styled(Stack)`
  width: 320px;
  height: 420px;
  background: #fff;
  border: 1px solid #fefefe;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 20px 0px rgba(109, 110, 111, 0.28);
`;
export const ChatBox = () => {
  const [messages, setMessages] = useState(MessageData);
  const handleOnSend = (contentText) => {
    debugger;
    const timestamp = Date.now();
    const newMessage = {
      id: timestamp.toString(35),
      content: contentText,
      timestamp,
      direction: "left",
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <Wrapper display={"flex"} direction={"column"}>
      <Typography variant="h5">How can I help you?</Typography>
      <MessageList messages={messages} />
      <ChatTypeBox handleOnSend={handleOnSend} />
    </Wrapper>
  );
};
