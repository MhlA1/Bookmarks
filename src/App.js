import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#091e52",
    },
    secondary: {
      main: "#4d3cc7",
    },
    info: {
      main: "#017f10",
    },
    text: {
      secondary: "black",
    },
    background: {
      default: "red",
      paper: "pink",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
