import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import theme from "../design/palette"
import { Box, ClickAwayListener } from '@mui/material';
import { useNavigate } from 'react-router';
import "./MyProfile.css";

import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";


// const usePrevLocation = (location) => {

// const prevLocRef = useRef(location)

// useEffect(()=>{

// prevLocRef.current = location

// },[location])

// return prevLocRef.current

// }


/*const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  spacing: 4,
});*/

const ProfilePaper = (props) => (
    <Paper {...props} style={{ margin: 'auto', marginTop: theme.spacing(4), padding: theme.spacing(4), maxWidth: 500 }} />
    );

const AvatarWrapper = (props) => (
    <div {...props} style={{ display: 'flex', justifyContent: 'center', marginTop: theme.spacing(2) }} />
    );

const UserInfo = (props) => (
    <div {...props} style={{ marginTop: theme.spacing(2) }} />
    );

function ProfilePage() {
    // const location = useLocation();
    // const prevLocation = usePrevLocation(location)
    // localStorage.setItem('prevLocation',prevLocation)

    // Sample User data
    const user = {
        username: localStorage.getItem('username'),
        phoneNumber: localStorage.getItem('phoneNo'),
        email: localStorage.getItem('email')
    };
    // const [display,setDisplay] = useState(true)
    const navigate = useNavigate();
    const handleClickAway = () => {
        navigate('/')
    }

    return (
        <ThemeProvider theme={theme}>
            <Box className='prof-super-box'>

                
            <ClickAwayListener onClickAway={handleClickAway}>
                    <Box minWidth={600}>
                    
                    <ProfilePaper className='prof-paper'>
                <AvatarWrapper>
                    <Avatar alt={user.username} style={{ width: 150, height: 150 }} />
                </AvatarWrapper>
                <UserInfo>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="subtitle1">Username:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{user.username}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="subtitle1">Phone Number:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{user.phoneNumber}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="subtitle1">Email:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{user.email}</Typography>
                        </Grid>
                    </Grid>
                </UserInfo>
            </ProfilePaper>
                    </Box>
            </ClickAwayListener>
        
            </Box>
        </ThemeProvider>
    );
}

export default ProfilePage;