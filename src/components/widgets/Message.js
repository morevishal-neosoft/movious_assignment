import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { Heading } from "../header/Heading";

const Wrapper = styled.div`
  display: block;
  clear: both;
`;
const MessageBodyWrapper = styled.div``;

export const Message = ({ content, timestamp, direction }) => {
  const dateAndTime = new Date(timestamp).toLocaleDateString();
  return (
    <Wrapper>
      <MessageBodyWrapper
        className={`chat-message ${direction}`}
        direction={direction}
      >
        <Heading size={14} fontWeight={500}>
          {content}
        </Heading>
      </MessageBodyWrapper>
    </Wrapper>
  );
};
