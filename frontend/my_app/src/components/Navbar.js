import { ClassNames, ThemeProvider } from "@emotion/react";
import { List, ListItem, ListItemButton, TextField, Typography, Drawer, Box, ListItemText, IconButton, Divider, Tab, CssBaseline, ListItemIcon, Icon, Paper } from "@mui/material"
import { Palette } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../design/palette";
import "./Navbar.css";
import { useState } from "react";
import { AppBar, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import EggIcon from '@mui/icons-material/Egg';
import MuiToolbar from '@mui/material/Toolbar';
import MuiBox from '@mui/material/Paper';
import Select from '@mui/icons-material/BubbleChart';
//import MenuIcon from '@mui/icons-material'

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
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
    }));

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                < AppBar position='static' className="Nav-main" open={open}
                    sx={{
                        borderBottom: 1, borderColor: 'black.main', position: 'fixed'
                    }
                    }>
                    <Toolbar open={open}>
                        <IconButton edge="start" color="inherit" sx={{ mr: 2, ...(open && { display: 'none' }) }} onClick={handleDrawerOpen}><AddIcon></AddIcon></IconButton>
                        <Divider sx={{ background: 'black.main' }} />
                        <Typography variant="h4" noWrap color={theme.palette.secondary.main} fontFamily={"Gloock"}  >
                            WorkerConnect
                        </Typography>
                    </Toolbar>
                </AppBar >

                <Drawer sx={{
                    width: drawerWidth,
                    flexShrink: 0,


                }}
                    PaperProps={{ sx: { width: drawerWidth, boxSizing: 'border-box', background: theme.palette.primary.main, borderColor: theme.palette.black.main } }}
                    anchor="left"
                    open={open}
                    variant='persistent'>
                    <DrawerHeader><Toolbar>
                        <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>
                            MENU
                        </Typography> <IconButton sx={{ ml: 2 }} edge="end" onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: theme.palette.primary.contrastText }} /> : <ChevronRightIcon color="primary" />}</IconButton>

                    </Toolbar></DrawerHeader>

                    <Divider sx={{ background: theme.palette.black.main }} />
                    <DrawerHeader>
                        <List className="Drawer-list">
                            {['TEST', 'TEST'].map((text, index) =>
                                <ListItem >
                                    <ListItemText primary={text} sx={{ textAlign: 'right', opacity: open ? 1 : 0, color: theme.palette.primary.contrastText }}>
                                    </ListItemText>
                                    <ListItemIcon  >
                                        <IconButton sx={{ ml: 2, color: theme.palette.primary.contrastText }} edge='end' >
                                            <Select />
                                        </IconButton>
                                    </ListItemIcon>

                                </ListItem>

                            )}
                        </List>
                    </DrawerHeader>
                </Drawer>
                <DrawerHeader />
            </Box >


        </ThemeProvider>
    )
}

export default Navbar;