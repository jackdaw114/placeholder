import { MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function WorkerForm(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }
        }>

            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.username}
                name="username"
                variant="outlined"
                placeholder='username'
                margin="normal" />

            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.firstname}
                name="firstname"
                variant="outlined"
                placeholder='firstname'
                margin="normal" />

            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.lastname}
                name="lastname"
                variant="outlined"
                placeholder='lastname'
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
                value={props.inputs.phoneNo}
                name="phoneNo"
                variant="outlined"
                placeholder='phoneNo'
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
                value={props.inputs.location}
                name="location"
                variant="outlined"
                placeholder='location'
                margin="normal" />

            <Select onChange={props.func}
                name="job"
                value={props.inputs.job}
                label='job'
                sx={{ color: 'white' }}
            >
                <MenuItem value="plumbing">Plumber</MenuItem>
                <MenuItem value="">electrition</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.visiting_charge}
                name="visiting_charge"
                variant="outlined"
                placeholder='Visiting Charge'
                margin="normal" />

        </Box >
    )
}