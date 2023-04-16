import { Card, Divider, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";
import './Workercard.css'
import Tilt from 'react-parallax-tilt'
import image from '../img/de.png'
import theme from "../design/palette";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Star from "@mui/icons-material/Star";


const WorkerRating = ({ val }) => {
    if (val === 0) {
        return (
            <StarBorderIcon />
        )
    }
    else if (val === 1) {
        return (
            <Star />
        )
    }
    else {
        return (
            <StarHalfIcon />
        )
    }
}

export default function Workercard(props) {
    const navigate = useNavigate();
    // const loc = props.location
    const length = props.jobs.length - 1
    console.log(length)
    let iter = [];
    let i = 0;
    while (i++ < 5) {
        if (Math.floor(props.rating) >= i) { iter.push(1); }
        else if (Math.ceil(props.rating) >= i) {
            iter.push(2);
        } else {
            iter.push(0)
        }
    }



    return (<Box className="workercard-main" onClick={() => {
        navigate('/workerProfile',{state: {props}})
    }}>
        <Tilt className="workercard-component" glareEnable glareBorderRadius="1em" tiltMaxAngleY={10} tiltMaxAngleX={10} >
            <Box className="workercard-div" sx={{ marginTop: 2, height: 2, }} />
            <div className="workercard-div"><img className="workercard-img" src={image} /> </div>

            <Box className="workercard-div" sx={{ height: 2, marginTop: 2, marginBottom: 2, backgroundColor: theme.palette.black.main }} />
            <div className="workercard-div">{props.name}</div>

            <Box className="workercard-div" sx={{ height: 18 }} />
            <div className="workercard-row">
                {props.jobs.map((item, index) => {
                    return (

                        <div className="workercard-div">{item}{(index === length) ? "" : ",\xa0"}</div>
                    )
                })}
            </div>

            <Box className="workercard-div" sx={{ height: 10 }} />

            <div className="workercard-div" >

                {iter.map((item, index) =>
                    <WorkerRating val={item} />
                )}
            </div>
            <div className="workercard-div">{props.rating ? props.rating : 0}/5</div>

            <Box className="workercard-div" sx={{ height: 15 }} />
        </Tilt>
    </Box>)
}