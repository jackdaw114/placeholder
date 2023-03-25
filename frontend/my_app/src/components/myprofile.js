import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import theme from "../design/palette"

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

  // Sample User data
  const user = {
    username: 'JohnDoe',
    phoneNumber: '555-1234',
    email: 'johndoe@example.com',
  };

  return (
    <ThemeProvider theme={theme}>
      <ProfilePaper>
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
    </ThemeProvider>
  );
}

export default ProfilePage;
