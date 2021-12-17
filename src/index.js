import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { CircularProgress } from "@mui/material";
import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={<CircularProgress />}>
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </Suspense>
  </ThemeProvider>,
  document.getElementById("root")
);
