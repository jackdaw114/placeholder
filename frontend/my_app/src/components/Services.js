import { Card, CardContent, Typography, CardMedia, TextField, Icon, Paper, createSvgIcon, SvgIcon } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider } from '@emotion/react'
import theme from '../design/palette'
import './Services.css'
import img from '../img/plumbing.jpg'
import data from './Services.json'
import img2 from '../img/hairdresser.jpg'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { AssistantPhoto, AutoAwesome, ContentCut, ElectricBolt, FormatPaint, Handyman, MotionPhotosAuto, NotStarted, Plumbing, SportsRugbySharp, Star, Verified } from '@mui/icons-material'
import { createElement, useRef, useState } from 'react'
import HTMLstring from 'react-html-string';
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import image1 from '../img/png1.png'
import { useLocation, useNavigate } from 'react-router'
import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import ChairIcon from '@mui/icons-material/Chair';
import TagIcon from '@mui/icons-material/Tag';
import PestControlIcon from '@mui/icons-material/PestControl';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpaIcon from '@mui/icons-material/Spa';
import PowerIcon from '@mui/icons-material/Power';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LightIcon from '@mui/icons-material/Light';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import YardIcon from '@mui/icons-material/Yard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import LockIcon from '@mui/icons-material/Lock';
import CarpenterIcon from '@mui/icons-material/Carpenter';

const service_info = [
    {name: "Salon", icon: <ContentCut />},
    { name: "Plumbing", icon: <Plumbing /> },
    { name: "Carpenter", icon: <CarpenterIcon />},
    { name: "Electrician", icon: <ElectricBolt /> },
    { name: "Dry Cleaning", icon: <DryCleaningIcon /> },
    { name: "Repair", icon: <Handyman /> },
    { name: "Painting", icon: <FormatPaint /> },
    { name: 'Babysitting', icon: <ChildFriendlyIcon /> },
    { name: 'Cooking/Catering', icon: <RestaurantIcon /> },
    { name: 'Gardening', icon: <YardIcon /> },
    { name: 'Personal Trainer', icon: <FitnessCenterIcon /> },
    { name: 'Photography', icon: <CameraAltIcon /> },
    { name: 'Interior Designing', icon: <LightIcon /> },
    { name: 'Graphic Designing', icon: <DesignServicesIcon /> },
    { name: 'Electronic Repair', icon: <PowerIcon /> },
    { name: 'Massage Therapy', icon: <SpaIcon /> },
    { name: 'Home Security',icon: <LockIcon />},
    { name: 'Fashion Consultant', icon: <DiamondIcon /> },
    { name: 'Car Washing', icon: <LocalCarWashIcon /> },
    { name: 'Pest Control', icon: <PestControlIcon /> },
    { name: 'Furniture Repair', icon: <ChairIcon /> },
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

    return (
        <ThemeProvider theme={theme}  >
            <Paper sx={{ marginTop: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'transparent', border: 0, boxShadow: 0 }}>


                {service_info.filter(service => service.name.toLowerCase().match(props.data.toLowerCase())).map((item, index) => (

                    <motion.div

                        className='motion' whileHover={{
                            scale: [null, 1.1, 1.1],
                            zIndex: 1
                        }} transition={{ duration: 0.5, type: "spring" }}
                    >
                        <Tilt tiltReverse={true} tiltMaxAngleY={10} glareColor={theme.palette.secondary.main} glareEnable={true} glareBorderRadius={'15px'} glarePosition='all' >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: index / 50, duration: 0.3
                                }}
                            >
                                <Card onClick={() => routeChange(item.name.toLowerCase())} options={{ max: 45, scale: 1, speed: 450, }} className='card' sx={{
                                    marginTop: 5, borderRadius: 5, filter: `contrast(1)`,
                                    maxWidth: '100vw', minWidth: `${10 * (item.main ? item.main : 1)}vw`, minHeight: '8vw', boxShadow: 'theme.shadow.md', textAlign: 'center',
                                }}>
                                    <CardContent sx={{
                                        padding: 0,
                                    }} >
                                        <Typography textAlign='right' className='desc' sx={{ position: 'absolute' }}>{item.desc}</Typography>
                                        <Icon sx={{ margin: 5, marginTop: 4, color: '#e8f6f4' }} className='svg_icon'>{item.icon}</Icon>
                                        <Typography variant='h6' sx={{ bottom: 2, width: '100%', position: 'relative', padding: '0' }}>{item.name}</Typography>

                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Tilt>
                    </motion.div>
                ))}

            </Paper>
        </ThemeProvider >

    )
}