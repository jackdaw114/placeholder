import { Height, Opacity } from "@mui/icons-material";
import { Card, CardMedia, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ImageHandler from "./ImageHandler";
import SearchBar from "./SearchBar";
import Services from "./Services";
import './Catagories.css'
import theme from "../design/palette";
import image2 from '../img/hairdresser.jpg'
import { AnimatePresence, motion } from 'framer-motion'


export default function Catagories() {

    const [data, setData] = useState('');
    const childToParent = (info) => {
        setData(info)
    }
    return (
        <Box>
            <SearchBar childToParent={childToParent} />
            <div className="framer-div">

                <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 50 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        type: 'spring'
                    }}

                    exit={{ opacity: 0 }}
                >
                    <Typography variant="h1" className="typography-h1"
                    >Select a service.</Typography>
                </motion.div>
            </div>
            <div className="framer-div">
                <motion.div initial={{ opacity: 0 }}
                    animate={{ x: -50, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        type: 'spring'
                    }}>
                    <Typography className="typography-h1" variant="h4" sx={{ paddingLeft: '30vw' }}>we provide the best</Typography>
                </motion.div>
            </div>

            <Services data={data} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.3, duration: 0.3
                }}
            >
                <Box sx={{ marginTop: '2em', width: '100%', height: "100%", display: 'flex', justifyContent: 'center' }}>
                    <Card className='add_card' sx={{ boxShadow: 'inset 0px 0px 15px black', borderRadius: 3, minWidth: '90vw', maxWidth: '90vw', maxHeight: '40vh', minHeight: 100, backgroundColor: theme.palette.primary.light, display: 'flex', justifyContent: 'right' }}>

                        <Typography variant="h4" className="typoh4" sx={{ textAlign: 'right', display: 'table-cell', verticalAlign: 'middle', maxWidth: '50%', marginRight: 3 }}><h4>discount for so anLorem ipsum dolor sit amet. Ut saepe placeat eum explicabo ullam aut accusantium temporibus. Est nesciuntd so lorem ipos</h4></Typography>
                        <CardMedia ><img src={image2} className="add_image" /></CardMedia>
                    </Card>
                </Box>
            </motion.div>

        </Box >
    )
}