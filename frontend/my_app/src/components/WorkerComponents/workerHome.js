import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import theme from "../../design/palette"
import { Box, ClickAwayListener } from '@mui/material';
import { useNavigate } from 'react-router';

import renderTable from './renderTable';
// import Paper from '@mui/material/Paper';




const ProfilePaper = (props) => (
    <Paper {...props} style={{ margin: 'auto', marginTop: theme.spacing(4), padding: theme.spacing(4), maxWidth: 500 }} />
    );

const AvatarWrapper = (props) => (
    <div {...props} style={{ display: 'flex', justifyContent: 'center', marginTop: theme.spacing(2) }} />
    );

const UserInfo = (props) => (
    <div {...props} style={{ marginTop: theme.spacing(2) }} />
);

const ongoing_jobs = [{
    name: 'john doe',
    date: '19/05/22',
    address: 'asudiashdihasuidhaiushdihasdh'
},
{
    name: 'jone doe',
    date: '19/05/22',
    address: 'asudiashdihasuidhaiushdihasdh'
},
]
const pending_jobs = [{
    name: 'john doe',
    date: '19/05/22',
    address: 'asudiashdihasuidhaiushdihasdh'
},
{
    name: 'jone doe',
    date: '19/05/22',
    address: 'asudiashdihasuidhaiushdihasdh'
},]
const completed_jobs = [{
    name: 'john doe',
    date: '19/05/22',
    address: 'asudiashdihasuidhaiushdihasdh'
},
{
    name: 'jone doe',
    date: '19/05/22',
    address: 'asudiashdihasuidhaiushdihasdh'
    },]

const sup = [
    {
        arr: ongoing_jobs,
        heading: 'Ongoing Jobs',  
        buttons_arr: ['Complete']
    },

    {
        arr: pending_jobs,
        heading: 'Pending Job Requests',
        buttons_arr: ['Accept','Decline']
    },
    {
        arr: completed_jobs,
        heading: 'Completed Jobs',
        buttons_arr: []
    }]



function WorkerHome() {
  
    const user = {
        username: localStorage.getItem('username'),
        phoneNumber: localStorage.getItem('phoneNo'),
        email: localStorage.getItem('email')
    };
    // const [display,setDisplay] = useState(true)
    const navigate = useNavigate();
    // const handleClickAway = () => {
    //     navigate('/')
    // }

    return (
        <ThemeProvider theme={theme}>
            
                    
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

            <ProfilePaper className='ongoing-paper' sx={{ minWidth : 1300 }}>
                {renderTable(sup[0])}
            </ProfilePaper>
            <ProfilePaper className='pending-paper' sx={{ minWidth : 1300 }}>
                {renderTable(sup[1])}
            </ProfilePaper>
            <ProfilePaper className='completed-paper' sx={{ minWidth : 1300 }}>
                {renderTable(sup[2])}
            </ProfilePaper>
                    
        
        </ThemeProvider>
    );
}

export default WorkerHome;