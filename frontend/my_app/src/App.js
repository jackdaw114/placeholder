import { ThemeProvider } from "@mui/material";
import React from "react";
import Auth from "./Auth";
import theme from './design/palette'
import Navbar from './components/Navbar'
import { Box } from "@mui/system";
// import Services from "./components/Services.js";
// import img from './img/plumbing.jpg'
// import SearchBar from "./components/SearchBar";
import ImageHandler from './components/ImageHandler'
import Categories from "./components/categories";
import Home from "./components/HomeNigel";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
const express = require('express');
express.Router();
function App() {
  return (
    <Box>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* <ImageHandler /> */}
          <Navbar />
          <Routes>
            <Route path="/home" element={<><Home /></>}></Route>
            <Route path="/categories" element={<><Categories /></>}></Route>
            <Route path="/login" element={<><Auth /></>}></Route>
          </Routes>

        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
