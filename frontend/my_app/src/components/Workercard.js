import { Card, Divider, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import './Workercard.css'
import Tilt from 'react-parallax-tilt'
import image from '../img/png3.png'
import theme from "../design/palette";

export default function Workerccard() {
    return (<Box className="workercard-main">
        <Tilt className="workercard-component" glareEnable glareBorderRadius="1em" tiltMaxAngleY={10} tiltMaxAngleX={10} >
            <Box className="workercard-div" sx={{ marginTop: 2, height: 2, }} />
            <div className="workercard-div"><img className="workercard-img" src={image} /> </div>

            <Box className="workercard-div" sx={{ height: 2, marginTop: 2, marginBottom: 2, backgroundColor: theme.palette.black.main }} />
            <div className="workercard-div">teslasfj;</div>

            <Box className="workercard-div" sx={{ height: 2 }} />
            <div className="workercard-div" >
                rating here
            </div>

            <Box className="workercard-div" sx={{ height: 10 }} />
        </Tilt>
    </Box>)
}