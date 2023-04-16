import { ClassNames, ThemeProvider } from "@emotion/react";
import { List, ListItem, ListItemButton, TextField, Typography, Drawer, Box, ListItemText, IconButton, Divider, Tab, CssBaseline, ListItemIcon, Icon, Paper, MenuItem, Avatar } from "@mui/material"
import { Palette } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../design/palette";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { AppBar, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import EggIcon from '@mui/icons-material/Egg';
import MuiToolbar from '@mui/material/Toolbar';
import MuiBox from '@mui/material/Paper';
import Select from '@mui/icons-material/BubbleChart';
import { useNavigate } from "react-router";
import FocusTrap from '@mui/base/FocusTrap';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion'
import { MotionConfig } from "framer-motion";

//import MenuIcon from '@mui/icons-material'
import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined, AccountCircle, Add, BuildCircleOutlined
} from "@mui/icons-material";
import { margin } from "@mui/system";






let test = localStorage.getItem('username') ? 'login/signup' : 'logout';

const drawerWidth = 240;

const Toolbar = styled(MuiToolbar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {

        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerBox = styled(MuiBox, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `${drawerWidth}px`,
        margin: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));



function Navbar() {

    // let login_status_name = localStorage.getItem('username') ? 'Logout' : 'Login/Signup';
const [loginStatusName,setLoginStatusName] = useState('Login/Signup')
const [loginStatusFunc,setLoginStatusFunc] = useState('navigateToLogin()')

// let login_status_function = localStorage.getItem('username') ? 'logout()' : 'navigateToLogin()';

const [open, setOpen] = useState(false);
const [data,setData] = useState([
    {
        name: "Home",
        icon: <HomeOutlined />, nav: 'navigateToHome()',
    },
    { name: "Categories", icon: <InboxOutlined />, nav: 'navigateToCategories()' },

    { name: "Workers", icon: <BuildCircleOutlined />, nav: 'navigateToWorkers()' },

    { name: 'Login/Signup', icon: <AccountCircle />, nav:'navigateToLogin()' },
]);

    useEffect(() => {
        if (localStorage.getItem('username')) {
            // setLoginStatusName('Login/Signup')
            // setLoginStatusFunc('navigateToLogin()')
            setData((prevState) => ([
                prevState[0],
                prevState[1],
                prevState[2],
                { name: 'Logout', icon: <AccountCircle />, nav:'logout()' },
                
            ]))
        }
        else {
            setData((prevState) => ([
                prevState[0],
                prevState[1],
                prevState[2],
                { name: 'Login/Signup', icon: <AccountCircle />, nav:'navigateToLogin()' }
                
            ]))
            
        //     setLoginStatusName('Logout')
        //     setLoginStatusFunc('logout()')
        }
    },[open])

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }

    const navigatetoprofile = () => {
        navigate('/profile')
    }
    
    const navigateToCategories = () => {
        navigate('/categories')
    }
    const navigateToWorkers = () => {
        navigate('/rel')
    }
    const navigateToHome = () => {
        navigate('/')
    }

    const navigateToLogin = () => {
        // setLoginStatusName('Logout')
        // setLoginStatusFunc('logout()')
        navigate('/login')
    }

    // const logout = () => {
        
    // }


    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'block',
        alignItems: 'center',
        ...theme.mixins.toolbar,
    }));

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', zIndex: 10 }}>
                <CssBaseline />
                < AppBar position='sticky' className="Nav-main" open={open}
                    sx={{
                        borderBottom: 1, borderColor: 'black.main', position: 'fixed', zIndex: 1
                    }
                    }>
                    <Toolbar open={open}>
                        <IconButton edge="start" color="inherit" sx={{ mr: 2, ...(open && { display: 'none' }) }} onClick={handleClick}><MenuIcon></MenuIcon></IconButton>
                        <Divider sx={{ background: 'black.main' }} />

                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h4" noWrap color={theme.palette.secondary.main} fontFamily={"Tilt Neon"}  >
                                worKonnect

                            </Typography>
                        </Box>
                        { (localStorage.getItem('username'))&&
                            <motion.div initial={{ borderRadius: '100%' }}
                                whileHover={{
                                    scale: 1.1,
                                    outline: 'solid 3px #a63446'
                                }}>

                                <Avatar

                                    onClick={navigatetoprofile}
                                //src="/broken-image.jpg" 
                                />

                            </motion.div>
                        }
                    </Toolbar>
                </AppBar >

                {/* {open
                    &&
                <div className="overlay"></div>} */}
                <Drawer className='drawer' sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                }}
                    PaperProps={{ sx: { width: drawerWidth, boxSizing: 'border-box', background: theme.palette.primary.main, borderColor: theme.palette.black.main } }}
                    anchor="left"
                    open={open}
                    variant='persistent'>
                    <DrawerHeader><Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText, margin: 0 }}>
                            MENU
                        </Typography>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <IconButton sx={{ ml: 2, color: theme.palette.secondary.main }} edge="end" onClick={handleClick}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon color="primary" />}</IconButton>
                        </ClickAwayListener>

                    </Toolbar></DrawerHeader>

                    <Divider sx={{ background: theme.palette.black.main }} />
                    <DrawerHeader>
                        <List>

                            {data.map((item, index) => (

                                <ListItem sx={{ width: 'auto' }} button key={index} onClick={() => {
                                    eval(item.nav)
                                    handleClick()
                                }}>
                                    <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            ))}
                        </List>

                    </DrawerHeader>
                </Drawer>
                <Toolbar />
            </Box >

            <br></br>
        </ThemeProvider>
    )
}

export default Navbar;