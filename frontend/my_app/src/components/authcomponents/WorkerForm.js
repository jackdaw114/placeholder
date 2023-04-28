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
                placeholder="job"
                label='job'
                sx={{ color: 'white' }}
            >
                <MenuItem value="Salon">Salon</MenuItem>
                <MenuItem value="Plumbing">Plumbing</MenuItem>
                <MenuItem value="Carpenter">Carpenter</MenuItem>
                <MenuItem value="Electrician">Electrician</MenuItem>
                <MenuItem value="Dry Cleaning">Dry Cleaning</MenuItem>
                <MenuItem value="Repair">Repair</MenuItem>
                <MenuItem value="Painting">Painting</MenuItem>
                <MenuItem value="Babysitting">Babysitting</MenuItem>
                <MenuItem value="Cooking/Catering">Cooking/Catering</MenuItem>
                <MenuItem value="Gardening">Gardening</MenuItem>
                <MenuItem value="Personal Trainer">Personal Trainer</MenuItem>
                <MenuItem value="Photography">Photography</MenuItem>
                <MenuItem value="Interior Designing">Interior Designing</MenuItem>
                <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
                <MenuItem value="Electronic Repair">Electronic Repair</MenuItem>
                <MenuItem value="Massage Therapy">Massage Therapy</MenuItem>
                <MenuItem value="Home Security">Home Security</MenuItem>
                <MenuItem value="Fashion Consultant">Fashion Consultant</MenuItem>
                <MenuItem value="Car Washing">Car Washing</MenuItem>
                <MenuItem value="Pest Control">Pest Control</MenuItem>
                <MenuItem value="Furniture Repair">Furniture Repair</MenuItem>
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