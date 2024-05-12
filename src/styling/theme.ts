import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: deepOrange,
  },
  typography: {
    fontFamily: "Ubuntu",
    button: {
      textTransform: "none",
    },
  },
});
