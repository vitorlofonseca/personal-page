import { ThemeOptions, createTheme } from "@mui/material/styles";
import { blue, deepOrange } from "@mui/material/colors";

const theme: ThemeOptions = {
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Ubuntu",
    button: {
      textTransform: "none",
    },
  },
};

export const orangeTheme = createTheme({
  ...theme,
  palette: { ...theme.palette, primary: deepOrange },
});

export const blueTheme = createTheme({
  ...theme,
  palette: { ...theme.palette, primary: blue },
});
