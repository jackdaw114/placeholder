import { TextField } from "@mui/material";
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

            <TextField
                onChange={props.func}
                sx={{
                    width: "300px"
                }}
                value={props.inputs.job}
                name="job"
                variant="outlined"
                placeholder='job'
                margin="normal" />

        </Box >
    )
}