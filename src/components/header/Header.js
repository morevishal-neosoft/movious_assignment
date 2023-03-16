import { AppBar, Box, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <header>
      <AppBar elevation={0} position="fixed" sx={{ background: "#ffffff" }}>
        <Toolbar>
          <Stack alignItems={"center"} direction={"row"} flexGrow={1}>
            <Link className="logo" to="/">
              <Logo size={"small"} />
            </Link>
            <Stack ml={4} alignItems={"center"}>
              <SearchBox />
            </Stack>
          </Stack>
          <Box>
            <Navigation />
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
