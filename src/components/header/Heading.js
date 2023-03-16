import { Typography } from "@mui/material";

export const Heading = (props) => {
  const { size = 24, fontWeight = 300 } = props;
  const style = {
    fontSize: `${size}px`,
    fontWeight: `${fontWeight}`,
    textWrap: "no-warp",
  };
  return <Typography style={style}>{props.children}</Typography>;
};
