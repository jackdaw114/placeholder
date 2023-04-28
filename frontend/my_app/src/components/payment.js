import { Box, Paper, TextField, ThemeProvider, Typography, Grid, Button } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

import theme from "../design/palette";

export default function Payment() {

    const location = useLocation();
    const navigate = useNavigate();
    const ProfilePaper = (props) => (
        <Paper {...props} style={{ margin: 'auto', marginTop: theme.spacing(4), padding: theme.spacing(4), maxWidth: 500 }} />
    );

    const AvatarWrapper = (props) => (
        <div {...props} style={{ display: 'flex', justifyContent: 'center', marginTop: theme.spacing(2) }} />
    );

    const UserInfo = (props) => (
        <div {...props} style={{ marginTop: theme.spacing(2) }} />
    );

    const handleSubmit = () => {
        axios.post('/worker/updatetransaction', { action: 'Paid', id: location.state.id }, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).then(res => {
            console.log(res)
            navigate('/receipt', { state: { data: location.state.data } })
        }).catch(error => console.log(error))
    }


    return (
        <>
            <ThemeProvider>
                <ProfilePaper>
                    <Typography variant='h2' textAlign={'center'}>
                        Payment
                    </Typography>
                    <Box marginTop={3}>
                        <Grid container spacing={0} className='container-grid'>
                            <Grid item xs={5} className='container-grid'>
                                <Typography variant="subtitle1">Payable amount:</Typography>
                            </Grid>
                            <Grid item xs={5} className='container-grid'>
                                <Typography variant="body1">1000</Typography>
                            </Grid>
                        </Grid>
                        <Box marginTop={2} sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'space-between' }}>

                            <TextField
                                sx={{
                                    width: "100%"
                                }}
                                variant="outlined"
                                name="cardholder_Name"
                                placeholder="Cardholder Name"
                                margin="normal"
                            />

                            <TextField
                                sx={{
                                    width: "100%"
                                }}
                                variant="outlined"
                                name="credit_card_no."
                                placeholder="credit card number"
                                margin="normal"
                            />
                            <Box>

                                <TextField
                                    sx={{
                                        width: "50%"
                                    }}
                                    variant="outlined"
                                    name="doe"
                                    placeholder="Date of expiry (MM/YY)"
                                    margin="normal"
                                />
                                <TextField
                                    sx={{
                                        width: "50%"
                                    }}
                                    variant="outlined"
                                    name="cvv"
                                    placeholder="CVV"
                                    margin="normal"
                                />

                            </Box>
                            <Button onClick={handleSubmit} variant='contained' sx={{ backgroundColor: '#2e7d32' }}>
                                Proceed to pay
                            </Button>
                        </Box>

                    </Box>
                </ProfilePaper>
            </ThemeProvider>
        </>
    )
}