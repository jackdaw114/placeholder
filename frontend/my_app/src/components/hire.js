import { Typography,Box, TextareaAutosize , Grid} from "@mui/material";

export default function Hire() {
    const form_description = [
        {
            placeholder:'Job Description'
        },
        {
            placeholder:'Address'
        },
        {
            placeholder:'Date of Service'
        },
        {
            placeholder:'Comments'
        },
        
    ]
    return (
        <>
            <Box className='body-box'>
                <Typography variant="h5" textAlign={'center'}>
                    Enter the service requirements below:
                </Typography>
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '50vh' }}
>
                    {
                        form_description.map((item) => {
                            
                        return( <Grid item xs={3}>
                            <TextareaAutosize
                                minRows={3}
                aria-label="empty textarea"
                placeholder={item.placeholder}
                style={{ minWidth: 400 }}
                />
                        </Grid>      
                         ) })
                        
   
                
            }
   
</Grid> 
                    
                
                
                
            </Box>
            
        </>
    )
}