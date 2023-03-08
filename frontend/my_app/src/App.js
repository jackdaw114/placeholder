import { ThemeProvider } from "@mui/material";
import React from "react";
import Auth from "./Auth";
import theme from './design/palette'
import Navbar from './components/Navbar'
import { Box } from "@mui/system";
import Services from "./components/Services.js";
import img from './img/plumbing.jpg'
import SearchBar from "./components/SearchBar";
import ImageHandler from './components/ImageHandler'

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <ImageHandler />
        <Navbar />
        <SearchBar />
        <Services />
      </ThemeProvider>
    </Box>
  );
}

export default App;
