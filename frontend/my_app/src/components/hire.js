import { Typography,Box, TextareaAutosize , Grid} from "@mui/material";
import axios from 'axios';
import {useState} from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

import { useLocation } from "react-router";

export default function Hire() {
    const location = useLocation();
    const form_description = [
        {
            placeholder:'Job Description',
            name:'jobdescription'
        },
        {
            placeholder:'Address',
            name:'address'
        },
        {
            placeholder:'Date of Service',
            name:'dos'
        },
        {
            placeholder:'Comments',
            name:'comments'
        },
        
    ]

       const [inputs, setInputs] = useState({
        workerID: location.state.workerID,
        address: "",
        dos: "",
        jobdescription: "",
        comments: "",
        userID:location.state.userID
    })
       const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    const navigate=useNavigate();
    const onSubmit = () =>{
        navigate('/transactions')
    }
    
    function sendForm(){
        axios.post("/user/maketransaction",inputs,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then (
            onSubmit()
        ).catch((err)=>{
            console.log(err)
        })
    }

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
                style={{ minHeight: '50vh' }}>
                {
                        form_description.map((item,index) => {
                            
                        return( <Grid item xs={3}>
                            <TextareaAutosize
                            onChange={handleChange}
                                minRows={3}
                aria-label="empty textarea"
                value={inputs[item.name]}
                name={item.name}
                placeholder={item.name}
                style={{ minWidth: 400 }}
                />
                        </Grid>      
                         ) })
                        
   
                
            }
                 
            <Button sx={{backgroundColor:"#A63446"}} variant="contaned" onClick={sendForm} >
                submit
                </Button>
   
</Grid> 
                    
           
                
            </Box>
            
        </>
    )
}