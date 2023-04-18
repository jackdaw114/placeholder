import { Star } from "@mui/icons-material";
import { Button, Card, IconButton, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt'
import theme from "../design/palette";
import './UserTransactions.css'

export default function UserTransactions() {

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


    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 4, backgroundColor: 'transparent' }}>
            {data[0] && Array.from(data).map((item) => (
                <Tilt glareEnable glareColor="#FFFFFF" glarePosition="all" glareMaxOpacity={0.1} tiltMaxAngleY={1} tiltMaxAngleX={1}>
                    <Card sx={{ backgroundColor: theme.palette.black[900] }} className="transactions_card">
                        <Box sx={{ margin: 2, display: 'flex', justifyContent: 'left', flexDirection: 'column', border: '1em' }}>
                            <Typography variant="h5">Worker Name: {item.workerName}</Typography>
                            <Typography variant="h6">Job: {item.jobdescription}</Typography>
                            <Typography variant="h6">date: {item.dos}</Typography>
                            <Typography variant="h6">status:{item.status}</Typography>
                            <Box sx={{ justifySelf: 'center', justifyContent: 'center', display: 'flex' }}>
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
                        </Box>
                    </Card>
                </Tilt>
            ))
            }
        </Box >
    )
}