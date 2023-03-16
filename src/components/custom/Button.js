import { Button } from "@mui/material";
import styled from "styled-components";

const CustomisedButton = styled(Button)``;

export const HighlightButton = (props) => {
  return (
    <CustomisedButton
      sx={{
        padding: "5px 20px",
        borderRadius: "28px",
        fontSize: "18px",
      }}
      {...props}
    >
      {props.children}
    </CustomisedButton>
  );
};
