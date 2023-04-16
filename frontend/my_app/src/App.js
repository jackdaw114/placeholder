import { Divider, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import Auth from "./Auth";
import theme from './design/palette'
import Navbar from './components/Navbar'
import Worker from './components/Workers'
import { Box } from "@mui/system";
import Services from "./components/Services.js";
import img from './img/plumbing.jpg'
import SearchBar from "./components/SearchBar";
import ImageHandler from './components/ImageHandler'
//import Home from "./components/Home";
import Profile from "./components/myprofile"
import Catagories from "./components/Catagories";
import HomeNigel from "./components/HomeNigel";
import WorkerProfile from "./components/WorkerProfile";
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import Rel from './components/Rel'
import Hire from "./components/hire";
function App() {

  return (
    <Box >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ImageHandler></ImageHandler>
          <Navbar />
          <Routes>


            <Route path="/categories" element={<><Catagories /></>}></Route>
            <Route path="/" element={<><HomeNigel /></>}></Route>
            <Route path="/login" element={<><Auth /></>}></Route>
            <Route path="/profile" element={<><Profile /></>}></Route>
            <Route path='/worker' element={<><Worker /></>}></Route>
            <Route path='/workerProfile' element={<><WorkerProfile /></>}></Route>
            <Route path='/hire' element={<><Hire /></>}></Route>

            <Route path='/rel' element={<><Rel /></>}></Route>
          </Routes>

        </ThemeProvider>
      </BrowserRouter>
    </Box >
  );
}

export default App;
