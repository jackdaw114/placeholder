import { Card, CardContent, Typography } from '@mui/material'
import { Box, ThemeProvider } from '@mui/system'
import { useState } from 'react'
import theme from '../design/palette'
import './Services.css'
import data from './Services.json'
import Image from '../img/bgtest3.jpg'



export default function Services() {
    return (
        <ThemeProvider theme={theme}>


            <img className="home_image" src={Image}></img>
            <Box className="home_row">

                {Object.keys(data.service).map((service) => (
                    <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 200 }}>

                        <CardContent><Typography>service: {service.service_name}</Typography></CardContent>
                    </Card>
                ))}
            </Box>
        </ThemeProvider>
    )
}