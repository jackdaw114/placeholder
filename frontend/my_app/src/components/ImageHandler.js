import { ImageList, ImageListItem, Paper } from "@mui/material";
import Image1 from '../img/salon.jpg';
import Image2 from '../img/tools.jpg';
import Image3 from '../img/pipes.jpg';
import zIndex from "@mui/material/styles/zIndex";
import './ImageHandler.css'
import theme from "../design/palette";
import image from '../img/png4.png'

export default function ImageHandler() {
    return (
        <div sx={{ position: "absolute", width: '100vw', zIndex: -1 }}>


            <ImageList className='opacity' cols={1} sx={{ position: "absolute", width: '100vw', zIndex: -1 }} gap={0}>

                <ImageListItem key={image}><img src={image} loading="lazy" /></ImageListItem>
            </ImageList>
        </div >
    )
}