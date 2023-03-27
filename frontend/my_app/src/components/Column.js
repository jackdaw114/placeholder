import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './Workers.css'

export default function Column(props) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%', width: `${props.size}%`, textAlign: 'center  ' }}>

            <Typography className='work-typo' variant="h6">{props.name}</Typography>
            <Divider />
            <Box sx={{ textAlign: 'left' }}>
                {props.data.map((item, index) => (
                    <div>
                        <Typography fontFamily={['Ariel', 'sans-serif']} className='work-typo' sx={{ paddingLeft: 2 }} variant="h6">{item[Object.keys(item).at(0)]}</Typography>
                        <Divider />
                    </div>
                ))}
            </Box>
        </Box>
    )
}