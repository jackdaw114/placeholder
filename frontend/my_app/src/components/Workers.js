import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useLocation } from "react-router";
import SearchBar from "./SearchBar";
import './Workers.css'
import axios from 'axios'

const url = "http://localhost:8000/worker";

export default function Worker() {

    const location = useLocation();
    useEffect(() => {
        if (location.state.reqpage) {
            axios.get(url, {
                params: {
                    page: location.state.reqpage,
                }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }

        else {
            axios.get(url).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    })
    return (
        <Box >
            <SearchBar />
            <Box className="flexdiv">

                <Box className="flexdiv2" sx={{ maxWidth: '90vw', minWidth: '90vw', backgroundColor: 'grey', height: '100%', borderRadius: 2 }}>
                    <Box sx={{ height: '100%', width: '100%', textAlign: 'center' }}>
                        <Typography variant="h4">{location.state.reqpage}</Typography>
                    </Box>
                    <Box sx={{ minHeight: '100%', minWidth: '50%', maxWidth: '50%', textAlign: 'center  ' }}>
                        <Typography>name</Typography>
                    </Box>
                    <Box sx={{ maxWidth: '50%', minWidth: '50%', height: '100%' }}>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}