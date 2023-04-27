import { InputSharp } from "@mui/icons-material";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import theme from "../design/palette";

export default function UpdateReciept() {

    const handleSubmit = () => {

    }
    const [inputs, setInputs] = useState({
        service_cost: "",
        material_cost: "",


    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <form onSubmit={handleSubmit}>
                    <Box display="flex"
                        flexDirection={"column"}
                        maxWidth={400}
                        alignItems="center"
                        justifyContent={"center"}
                        margin="auto"
                        marginTop={4.9}

                        padding={3}
                        borderRadius={4}
                        boxShadow={"0px 0px 10px #00000A"}

                        sx={{
                            backgroundColor: theme.palette.black.main,
                            ":hover": {
                                boxShadow: "0px 0px 20px #000",
                            },
                            //   fontFamily: 'Ubuntu',
                        }}>
                        <Typography variant="h5" marginBottom={3} marginTop={2} textAlign={'center'}>ENTER CHANGE IN COST</Typography>
                        <TextField onChange={handleChange}
                            sx={{
                                width: "300px"
                            }}
                            value={inputs.service_cost}
                            name="service_cost"
                            variant="outlined"
                            placeholder='service_cost'
                            margin='normal'
                        ></TextField>
                        <TextField onChange={handleChange}
                            sx={{
                                width: "300px"
                            }}
                            value={inputs.material_cost}
                            name="material_cost"
                            variant="outlined"
                            placeholder='material_cost'
                            margin='normal'
                        ></TextField>
                        <Button
                            type="submit"
                            sx={{
                                marginTop: 3,
                                borderRadius: 1.4,
                                color: "white",
                                backgroundColor: "black"
                            }}
                            variant="contained"

                        >submit</Button>
                    </Box>
                </form>

            </Box>
        </Box>
    )
}