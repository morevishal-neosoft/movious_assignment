import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { Box, SpeedDial } from "@mui/material";
import { ChatBox } from "./ChatBox";
import { Stack } from "@mui/system";

export const ChatWidget = () => {
  const [state, setState] = useState(false);
  const handleOnClick = () => {
    setState(!state);
  };
  return (
    <Box
      sx={{ position: "fixed", zIndex: 9999, bottom: 16, right: 16 }}
      id="bot-chat"
    >
      {state && <ChatBox />}
      <Stack alignItems={"flex-end"}>
        <SpeedDial
          onClick={handleOnClick}
          ariaLabel="SpeedDial basic example"
          icon={state ? <CloseIcon color="#2c2c2c" /> : <ChatIcon />}
        ></SpeedDial>
      </Stack>
    </Box>
  );
};
