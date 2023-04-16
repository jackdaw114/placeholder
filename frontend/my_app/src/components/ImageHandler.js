import { ImageList, ImageListItem, Paper } from "@mui/material";
import Image1 from '../img/salon.jpg';
import Image2 from '../img/tools.jpg';
import Image3 from '../img/pipes.jpg';
import zIndex from "@mui/material/styles/zIndex";
import './ImageHandler.css'
import theme from "../design/palette";
import image from '../img/png4.png'
import { Box } from "@mui/system";

export default function ImageHandler() {
    return (
        <Box sx={{ zIndex: -1, position: 'absolute', width: '100vw', height: '100vw', background: 'radial-gradient(circle at right 40%,rgba(166, 52, 70, 0.2),transparent 50% )' }}>
            <ImageList className='opacity' cols={1} sx={{ position: "absolute", width: '100vw', zIndex: -1, transform: 'translate(-50vw,0)' }} gap={0}>

            </ImageList>
        </Box>
    )
}