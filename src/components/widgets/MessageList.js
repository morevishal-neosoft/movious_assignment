import { Stack } from "@mui/material";
import { height } from "@mui/system";
import styled from "styled-components";
import { Message } from "./Message";

const Wrapper = styled(Stack)`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #efefef;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2c2c2c;
    border-radius: 8px;
  }
`;
const Container = styled.div`
  margin-right: 10px;
`;
export const MessageList = ({ messages }) => {
  const renderedMessages = messages.map((message) => (
    <Message key={message.id} {...message} />
  ));
  return (
    <Wrapper flexGrow={1}>
      <Container>{renderedMessages}</Container>
    </Wrapper>
  );
};
