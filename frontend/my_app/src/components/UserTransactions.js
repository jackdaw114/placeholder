import { Button, Card, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt'
import theme from "../design/palette";
import './UserTransactions.css'
export default function UserTransactions() {

    const [data, setData] = useState([])

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
    }, [])

    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: 4, backgroundColor: 'transparent' }}>
            {data[0] && data.map((item) => (
                <Tilt glareEnable glareColor="#FFFFFF" glarePosition="all" glareMaxOpacity={0.1} tiltMaxAngleY={1} tiltMaxAngleX={1}>
                    <Card sx={{ backgroundColor: theme.palette.black[900] }} className="transactions_card">
                        <Box sx={{ margin: 2, display: 'flex', justifyContent: 'left', flexDirection: 'column', border: '1em' }}>
                            <Typography variant="h5">Worker Name:{item.workerID}</Typography>
                            <Typography variant="h6">Job: {item.jobdescription}</Typography>
                            <Typography variant="h6">date: {item.dos}</Typography>
                            <Box sx={{ justifySelf: 'center', justifyContent: 'center', display: 'flex' }}>
                                <Button sx={{ height: 'auto', width: 'auto', backgroundColor: theme.palette.secondary.main }}>rate</Button>
                            </Box>
                        </Box>
                    </Card>
                </Tilt>
            ))}
        </Box>
    )
}