import { Card, CardContent, Typography, CardMedia, TextField, Icon } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider } from '@emotion/react'
import theme from '../design/palette'
import './Services.css'
import img from '../img/plumbing.jpg'

import img2 from '../img/hairdresser.jpg'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import { ContentCut, ElectricBolt, FormatPaint, Handyman, Plumbing } from '@mui/icons-material'

const data = [
    {
        name: "Hairdresser",
        icon: <ContentCut />,
    },
    { name: "plumbing", icon: <Plumbing /> },
    { name: "electrician", icon: <ElectricBolt /> },
    { name: "dry cleaning", icon: <DryCleaningIcon /> },
    { name: "repair", icon: <Handyman /> },
    { name: "painting", icon: <FormatPaint /> },
];


export default function Services() {
    return (
        <ThemeProvider theme={theme}>
            <Box className="home_row">

                {data.map((item, index) => (

                    <Card className='card' sx={{ boxShadow: 2, borderRadius: 10, maxWidth: 200, minWidth: 200, minHeight: 100, maxHeight: 100, justifyContent: 'space-between', textAlign: 'center' }}>
                        <CardContent >
                            <Typography variant='h6'>{item.name}</Typography>
                            <Icon sx={{ margin: 1, color: '#52FFB8' }}>{item.icon}</Icon>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </ThemeProvider>

    )
}