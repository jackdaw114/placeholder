import { Card, CardContent, Typography, CardMedia, TextField, Icon, Paper, createSvgIcon, SvgIcon } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider } from '@emotion/react'
import theme from '../design/palette'
import './Services.css'
import img from '../img/plumbing.jpg'
import data from './Services.json'
import img2 from '../img/hairdresser.jpg'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { ContentCut, ElectricBolt, FormatPaint, Handyman, Plumbing, SportsRugbySharp } from '@mui/icons-material'
import { createElement, useRef } from 'react'
import HTMLstring from 'react-html-string';



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


export default function Services() {
    function Test(item, props) {
        // const TestIcon = createSvgIcon(
        //     <path d={item} />,
        //     'testicon'
        // )
        // return (<TestIcon />)
        return (<SvgIcon {...props} >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>)
    }
    return (
        <ThemeProvider theme={theme} >
            <Paper sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', border: 0, boxShadow: 0 }}>
                <Box className="home_row" sx={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>

                    {data.service.map((item, index) => (

                        <Card className='card' elevation={10} sx={{ borderRadius: 10, maxWidth: 200, minWidth: 200, minHeight: 100, maxHeight: 100, justifyContent: 'space-between', textAlign: 'center' }}>
                            <CardContent >
                                <Typography variant='h6'>{item.name}</Typography>
                                <Icon sx={{ margin: 1, color: '#52FFB8' }}>{Test(item.icon)}</Icon>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Paper>
        </ThemeProvider>

    )
}