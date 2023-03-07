import logo from './logo.svg';
import './App.css';
import { AppBar, ThemeProvider, CssBaseline, Typography } from "@mui/material"
import theme from "./design/palette"
import Navbar from "./components/Navbar"
import { Box } from '@mui/system';
import MainContent from './components/MainContent'
import Services from './components/Services';
import Image from './img/bgtest.jpg'
function App() {
  return (

    <Box >
      <CssBaseline />

      <Navbar />
      <Services />

    </Box>
  );

}

export default App;
