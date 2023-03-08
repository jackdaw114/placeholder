import { Card, CardContent, Typography, CardMedia, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider } from '@emotion/react'
import theme from '../design/palette'
import './Services.css'
import img from '../img/plumbing.jpg'

import img2 from '../img/hairdresser.jpg'

export default function Services() {
    return (
        <ThemeProvider theme={theme}>
            <Box className="home_row">

                <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 200 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        sx={{ marginTop: 0 }}
                        image={img}
                        alt="Image"
                    />
                    <CardContent><Typography>service</Typography></CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 200 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        sx={{ marginTop: 0 }}
                        image={img2}
                        alt="Image"
                    />
                    <CardContent><Typography>service</Typography></CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 200 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        sx={{ marginTop: 0 }}
                        image={img}
                        alt="Image"
                    />
                    <CardContent><Typography>service</Typography></CardContent>
                </Card>
            </Box>
        </ThemeProvider>

    )
}