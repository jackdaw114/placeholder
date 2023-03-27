import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Row(props) {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ width: '30%' }}>
                <Typography fontFamily={['Ariel', 'sans-serif']} className='work-typo' sx={{ paddingLeft: 2 }} variant="h6">
                    {props.data}
                </Typography>
            </Box>
            <Divider orientation="vertical" />
            <Box sx={{ width: '20%' }}>
                <Typography fontFamily={['Ariel', 'sans-serif']} className='work-typo' sx={{ paddingLeft: 2 }} variant="h6">
                    {props.data}
                </Typography>

            </Box>

        </Box>
    )
}