import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SearchBar from "./SearchBar";
import './Workers.css'
import axios from 'axios'
import theme from "../design/palette";
import Column from './Column'

import Row from './Row'

const url = "http://localhost:8000/worker";
export default function Worker() {

    const [page, setPage] = useState('')
    const [data, setData] = useState([])
    const location = useLocation();
    useEffect(() => {
        if (location.state != null) {
            setPage(location.state.reqpage)
            axios.get(url, {
                params: {
                    page: location.state.reqpage,
                }
            }).then((res) => {
                console.log(res)
                setData(res.data)
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
    }, [])
    return (
        <Box >
            <SearchBar />
            <Box className="flexdiv">

                <Box className="flexdiv2" sx={{ maxWidth: '90vw', minWidth: '90vw', backgroundColor: theme.palette.primary.paper, height: '100%', borderRadius: 2 }}>
                    <Box sx={{ height: '100%', width: '100%', textAlign: 'center' }}>

                        <Typography fontFamily={['Ariel', 'sans-serif']} className='work-typo' variant="h4">{page.toUpperCase()}</Typography>

                        <Divider />
                    </Box>
                    {data.map((item, index) => (
                        <Row data={item.name}></Row>
                    ))}

                </Box>
            </Box>
        </Box >
    )
}