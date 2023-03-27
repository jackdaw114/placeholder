import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from 'framer-motion'
import theme from "../design/palette";
import './Row.css'

export default function Row(props) {
    return (
        <Box className="row-shadow" sx={{ display: 'flex', width: '100%', marginTop: 2, backgroundColor: theme.palette.primary.paper }} >

            <Box sx={{ width: '30%' }} >
                <div className="row-box">
                    <Typography variant='h5' className="row-typo" fontFamily={['Ariel', 'sans-serif']} >
                        {props.col1}
                    </Typography>
                </div>
            </Box>
            <Box sx={{ width: '20%' }}>
                <div className="row-box">
                    <Typography variant="h5" className='row-typo' fontFamily={['Ariel', 'sans-serif']}  >
                        {props.col2}
                    </Typography>
                </div>

            </Box>
            <Box sx={{ width: '50%' }}>
                <div className="row-box">
                    <Typography variant="h5" className='row-typo' fontFamily={['Ariel', 'sans-serif']}  >
                        {props.col2}
                    </Typography>
                </div>

            </Box>
        </ Box>

    )
}