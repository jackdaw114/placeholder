import { Card, CardContent, Typography, CardMedia, TextField, Icon, Paper, createSvgIcon, SvgIcon } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider } from '@emotion/react'
import theme from '../design/palette'
import './Services.css'
import img from '../img/plumbing.jpg'
import data from './Services.json'
import img2 from '../img/hairdresser.jpg'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { ContentCut, ElectricBolt, FormatPaint, Handyman, MotionPhotosAuto, Plumbing, SportsRugbySharp } from '@mui/icons-material'
import { createElement, useRef } from 'react'
import HTMLstring from 'react-html-string';
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
// const data = [
//     {
//         name: "Hairdresser",
//         icon: <ContentCut />,
//     },
//     { name: "plumbing", icon: <Plumbing /> },
//     { name: "electrician", icon: <ElectricBolt /> },
//     { name: "dry cleaning", icon: <DryCleaningIcon /> },
//     { name: "repair", icon: <Handyman /> },
//     { name: "painting", icon: <FormatPaint /> },
// ];

const service_info = [
    {
        name: "Hairdresser",
        icon: <ContentCut />,
    },
    { name: "plumbing", icon: <Plumbing /> },
    { name: "electrician", icon: <ElectricBolt /> },
    { name: "dry cleaning", icon: <DryCleaningIcon /> },
    { name: "repair", icon: <Handyman /> },
    { name: "painting", icon: <FormatPaint /> },

]

export default function Services(props) {
    if (props.data.length > 0) {
        service_info.filter((service) => {

            return service.name.match(props.data)
        })
    }
    return (
        <ThemeProvider theme={theme} >
            <Paper sx={{ marginTop: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'transparent', border: 0, boxShadow: 0 }}>


                {service_info.filter(service => service.name.toLowerCase().match(props.data.toLowerCase())).map((item, index) => (
                    <Tilt className='motion' tiltReverse={true}>
                        <motion.div className='motion' whileHover={{ scale: [null, 1.2, 1.2] }} transition={{ duration: 0.3, type: "spring" }} >
                            <Card options={{ max: 45, scale: 1, speed: 450, }} className='card' elevation={10} sx={{
                                marginRight: 2.5, marginLeft: 2.5, marginTop: 5, borderRadius: 5,
                                maxWidth: 200, minWidth: 200, minHeight: 150, maxHeight: 100, justifyContent: 'center', textAlign: 'center', boxShadow: 'theme.shadow.md'
                            }}>
                                <CardContent >

                                    <Icon sx={{ margin: 2, color: '#e8f6f4' }} className='svg_icon'>{item.icon}</Icon>
                                    <Typography variant='h6' sx={{ marginTop: 2 }}>{item.name}</Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Tilt>
                ))}

            </Paper>
        </ThemeProvider >

    )
}