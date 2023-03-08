import { ImageList, ImageListItem } from "@mui/material";
import Image1 from '../img/salon.jpg';
import Image2 from '../img/tools.jpg';
import Image3 from '../img/pipes.jpg';
import zIndex from "@mui/material/styles/zIndex";
import './ImageHandler.css'

export default function ImageHandler() {
    return (
        <div>
            <ImageList className="image-list" sx={{ position: "absolute", width: '100vw', zIndex: -1 }} cols={3}>
                <ImageListItem className="crop" key={Image1}><img src={Image1} loading="lazy" /></ImageListItem>

                <ImageListItem key={Image1}><img src={Image2} loading="lazy" /></ImageListItem>
                <ImageListItem key={Image1}><img src={Image3} loading="lazy" /></ImageListItem>
            </ImageList>
        </div>
    )
}