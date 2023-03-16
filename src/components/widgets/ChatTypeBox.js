import { Send } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const ControlWrapper = styled(Stack)``;
export const ChatTypeBox = ({ handleOnSend }) => {
  const [messageContent, setMessageContent] = useState("");
  const handleOnClick = () => {
    debugger;
    handleOnSend(messageContent);
    setMessageContent("");
  };
  return (
    <ControlWrapper alignItems={"center"} mt={2} direction={"row"}>
      <Box flexGrow={1} mr={3}>
        <TextField
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          multiline
          fullWidth
          sx={{
            maxHeight: "80px",
            overflowY: "scroll",
          }}
          placeholder="Type a message..."
        />
      </Box>
      <IconButton
        disabled={!Boolean(messageContent?.trim())}
        onClick={handleOnClick}
      >
        <Send />
      </IconButton>
    </ControlWrapper>
  );
};
