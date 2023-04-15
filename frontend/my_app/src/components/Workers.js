import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SearchBar from "./SearchBar";
import './Workers.css'
import axios from 'axios'
import theme from "../design/palette";
import Row from './Row'
import Tilt from 'react-parallax-tilt'
import Workercard from "./Workercard";
import { motion } from 'framer-motion'

const url = "/worker/getworkers";
export default function Worker() {

    const [page, setPage] = useState('')
    const [data, setData] = useState([])
    const location = useLocation();
    useEffect(() => {
        console.log(url)
        if (location.state != null) {
            setPage(location.state.reqpage)
            axios.get(url, {
                params: {
                    job: location.state.reqpage,
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

                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])
    return (
        <Box >
            <SearchBar />
            <Box className="flexdiv">

                <Box className="flexdiv2" >

                    <Box sx={{ height: '100%', width: '100%', textAlign: 'center', boxShadow: 'inset 0px 0px 5px 1px black' }}>

                        <Typography className='work-typo-grad' variant="h3">{page.toUpperCase()}</Typography>

                    </Box>

                    <div className="worker-div-card">
                        {data.map((item, index) => (

                            <Workercard email={item.email} name={item.firstname + " " + item.lastname} rating={item.rating} jobs={item.jobs} location={item.location} phone={ item.phone} />

                        ))}
                    </div>
                </Box>

            </Box>
        </Box >
    )
}