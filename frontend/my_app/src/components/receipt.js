import { Paper, Typography,Box, Grid } from '@mui/material';
import theme from '../design/palette';
import { ThemeProvider } from '@emotion/react';
import './receipt.css';

const ProfilePaper = (props) => (
    <Paper {...props} style={{ margin: 'auto', marginTop: theme.spacing(4), padding: theme.spacing(4), maxWidth: 1000 }} />
    );

const UserInfo = (props) => (
    <div {...props} style={{ marginTop: theme.spacing(2) }} />
);


export default function Receipt() {
    const data = {
        workerid: 'John Wick22',
        clientid: 'Farhan Bhai',
        payment_details: {
            visiting_charge: 200,
            material_charge: 100,
            service_charge: 400
        }
    }
    return (
        
            <ThemeProvider theme={theme}>
            <Box>
                <ProfilePaper>
                
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant='h2' textAlign={'center'}>
                            Receipt
                    </Typography>

                
                <UserInfo>
                    <Grid container spacing={1} alignItems="center" className='container-grid'>
                        <Grid item xs={3} className='container-grid'>
                            <Typography variant="subtitle1">WorkerName:</Typography>
                        </Grid>
                        <Grid item xs={3}className='container-grid'>
                                <Typography variant="body1">{data.workerid }</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" className='container-grid'>
                        <Grid item xs={3} className='container-grid'>
                            <Typography variant="subtitle1">CustomerName:</Typography>
                        </Grid>
                        <Grid item xs={3} className='container-grid'>
                                <Typography variant="body1">{ data.clientid }</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" className='container-grid'>
                        <Grid item xs={3} className='container-grid'>
                            <Typography variant="subtitle1">Visting charge:</Typography>
                        </Grid>
                        <Grid item xs={3} className='container-grid'>
                                <Typography variant="body1">{data.payment_details.visiting_charge }</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" className='container-grid'>
                        <Grid item xs={3} className='container-grid'>
                            <Typography variant="subtitle1">Material charge:</Typography>
                        </Grid>
                        <Grid item xs={3} className='container-grid'>
                                <Typography variant="body1">{data.payment_details.material_charge }</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" className='container-grid'>
                        <Grid item xs={3} className='container-grid'>
                            <Typography variant="subtitle1">Service charge:</Typography>
                        </Grid>
                        <Grid item xs={3} className='container-grid'>
                                <Typography variant="body1">{data.payment_details.service_charge }</Typography>
                        </Grid>
                    </Grid>
                </UserInfo>
                    </Box>
            </ProfilePaper>
            </Box>
        </ThemeProvider>
        

    )
}