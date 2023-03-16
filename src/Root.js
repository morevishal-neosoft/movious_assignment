import {
  createTheme,
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from "@mui/material/styles";

import RouterSorter from "./components/RouteSorter";

// const theme = unstable_createMuiStrictModeTheme();
const theme = createTheme({
  typography: {
    fontFamily: `"Varela Round", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <RouterSorter />
    </ThemeProvider>
  );
}

export default Root;
