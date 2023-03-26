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
import image1 from '../img/png1.png'
import { useLocation, useNavigate } from 'react-router'
import React from 'react'
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
    { name: 'test' }, { name: 'test' },
    { name: 'test' },
    { name: 'test', main: 3 },
    { name: 'test', main: 5, desc: 'this is a test service asdasdfhaksjdflhjasfdlkdfa' },

]

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
        x: null,
        y: null,
    });
    React.useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return mousePosition;
};

export default function Services(props) {
    if (props.data.length > 0) {
        service_info.filter((service) => {

            return service.name.match(props.data)
        })
    }
    const randomfunc = () => {
        return Math.random();
    }
    let navigate = useNavigate();
    const routeChange = (page) => {
        navigate('/worker', { state: { reqpage: page, } });

    }

    const mousePosition = useMousePosition();
    return (
        <ThemeProvider theme={theme}  >
            <Paper sx={{ marginTop: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'transparent', border: 0, boxShadow: 0 }}>


                {service_info.filter(service => service.name.toLowerCase().match(props.data.toLowerCase())).map((item, index) => (

                    <motion.div className='motion' whileHover={{
                        scale: [null, 1.05, 1.05],
                    }} transition={{ duration: 0.3, type: "spring" }}
                    >
                        <Tilt tiltReverse={true} tiltMaxAngleY={5} glareColor={theme.palette.secondary.main} glareEnable={true} glareBorderRadius={'15px'} glarePosition='all' >
                            <Card onClick={() => routeChange(item.name.toLowerCase())} options={{ max: 45, scale: 1, speed: 450, }} className='card' sx={{
                                marginTop: 5, borderRadius: 5, filter: `contrast(1)`,
                                maxWidth: '100vw', minWidth: `${10 * (item.main ? item.main : 1)}vw`, minHeight: '8vw', boxShadow: 'theme.shadow.md', textAlign: 'center',
                            }}>

                                <CardContent sx={{
                                    padding: 0,
                                }} >

                                    <Typography textAlign='right' className='desc' sx={{ position: 'absolute' }}>{item.desc}</Typography>
                                    <Icon sx={{ margin: 5, marginTop: 4, color: '#e8f6f4' }} className='svg_icon'>{item.icon}</Icon>
                                    <Typography variant='h6' sx={{ bottom: 0, width: '100%', position: 'absolute', padding: '1em 0' }}>{item.name}</Typography>

                                </CardContent>
                            </Card>

                        </Tilt>
                    </motion.div>
                ))}

            </Paper>
        </ThemeProvider >

    )
}