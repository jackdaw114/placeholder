import { Star } from "@mui/icons-material";
import { Button, Card, Grid, IconButton, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt'
import theme from "../design/palette";
import './UserTransactions.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useNavigate } from 'react-router';


export default function UserTransactions() {

    // const clearHistory = () => {
    //     axios.post('/user/cleartransactions', {
    //         username: localStorage.getItem('username')
    //     },
    //         {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //             }
    //         }).then((res) => {
    //             console.log(res)
    //             setData(res.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // };


    const [data, setData] = useState([])
    const [temp, updateTemp] = useState('')
    useEffect(() => {

        console.log(localStorage.getItem('username'))
        axios.post('/user/gettransactions', {
            username: localStorage.getItem('username')
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            }).then((res) => {
                console.log(res)
                setData(res.data)
                console.log(res.data.length)
            }).catch((err) => {
                console.log(err)
            })
    }, [temp])

    const sendRating = (value, email, id) => {
        axios.post('/user/rate', {
            rating: value,
            email: email,
            id: id
        },
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            }).then((res) => {
                console.log(res)
                setData(res.data)
                updateTemp('test')
            }).catch((err) => {
                console.log(err)
            })
    }

    const test = [1, 2, 3, 4, 5]
    const navigate = useNavigate();
    const navigateToReceipt = (data) => {

        navigate('/receipt', { state: { data: data } });
    }

    return (
        <>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={clearHistory}>Clear History</Button>
        </Box> */}


            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 4, backgroundColor: 'transparent' }}>
                {data[0] && data.slice(0).reverse().map((item) => (
                    <Tilt glareEnable glareColor="#FFFFFF" glarePosition="all" glareMaxOpacity={0.1} tiltMaxAngleY={1} tiltMaxAngleX={1}>
                        <Card sx={{ backgroundColor: theme.palette.black[900] }} className="transactions_card">
                            <Box sx={{ margin: 2, display: 'flex', justifyContent: 'left', flexDirection: 'column', border: '1em' }}>

                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle1">Worker Name:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1">{item.workerName}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle1">Job Description:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1">{item.jobdescription}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle1">Date:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1">{item.dos}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={3}>
                                        <Typography variant="subtitle1">Status:</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body1">{item.status}</Typography>
                                    </Grid>
                                </Grid>

                                {item.rating !== 0 ? <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={3}><Typography variant="h6">Rating: </Typography></Grid>
                                    <Grid item xs={3}>{test.map((num) => {
                                        if (item.rating >= num) {

                                            return (
                                                <Star />
                                            )


                                        } else {
                                            return (
                                                <StarBorderIcon />
                                            )

                                        }
                                    })}</Grid>
                                </Grid> : <></>}

                                <Box sx={{ justifySelf: 'center', justifyContent: 'space-evenly', display: 'flex' }}>
                                    {item.status == 'completed' && item.rating == 0 ?
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Box>
                                                <IconButton onClick={() => { sendRating(1, item.workerID, item._id) }} sx={{ color: 'white' }} className='transactions_hover_color'>1</IconButton>
                                                <IconButton onClick={() => { sendRating(2, item.workerID, item._id) }} sx={{ color: 'white' }} className='transactions_hover_color'>2</IconButton>
                                                <IconButton onClick={() => { sendRating(3, item.workerID, item._id) }} sx={{ color: 'white' }} className='transactions_hover_color'>3</IconButton>
                                                <IconButton onClick={() => { sendRating(4, item.workerID, item._id) }} sx={{ color: 'white' }} className='transactions_hover_color'>4</IconButton>
                                                <IconButton onClick={() => { sendRating(5, item.workerID, item._id) }} sx={{ color: 'white' }} className='transactions_hover_color'>5</IconButton>
                                            </Box>
                                            <Typography sx={{ textAlign: 'center' }}>rate</Typography>
                                        </Box>
                                        :
                                        <></>
                                    }



                                </Box>
                                <Box sx={{ alignSelf: 'center', justifySelf: 'flex-end', display: 'flex', maxHeight: 200, marginTop: 3 }}>
                                    <Button variant="contained" color="warning" onClick={() => navigateToReceipt(item.recieptID)}>View Receipt</Button>
                                </Box>

                            </Box>
                        </Card>
                    </Tilt>
                ))
                }
            </Box >
        </>
    )
}