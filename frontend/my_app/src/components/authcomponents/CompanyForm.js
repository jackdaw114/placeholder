import { Input, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function CompanyForm(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }
        }>

            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.companyname}
                name="companyname"
                variant="outlined"
                placeholder='companyname'
                margin="normal" />
            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.email}
                name="email"
                variant="outlined"
                placeholder='email'
                margin="normal" />
            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.password}
                name="password"
                variant="outlined"
                placeholder='password'
                type='password'
                margin="normal" />
            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.company_category}
                name="company_category"
                variant="outlined"
                placeholder='company category'

                margin="normal" />



        </Box >
    )
}