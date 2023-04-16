import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import theme from "../design/palette";
import './WorkerProfile.css';
import image2 from '../img/MODI.jpeg';
import { useLocation, useNavigate } from "react-router";


export default function WorkerProfile() {
	const navigate = useNavigate();
	const location = useLocation();
	const profile_data = [
		{
			label: "Name : ",
			value: location.state.props.name
		},
		{
			label: "Profession(s) : ",
			value: location.state.props.jobs[0]
		},
		{
			label: "Area of Operations : ",
			value: location.state.props.location
		},
		{
			label: "Available hours : ",
			value: "8am-6pm"
		}
	]
	const contact_details = [
		{
			label: "Phone no. : ",
			value: location.state.props.phone
		},
		{
			label: "Email :",
			value: location.state.props.email
		}
	]
	return (
		<><Box className="main-profile-box">
			<Box className="left-profile-box">

			<Box className='profile-name-and-pfp-box'>
				
			<Typography className="typography-h1" variant="h3" gutterBottom>
				Profile
			</Typography>
			</Box>
			<Divider sx={{ background: theme.palette.black.main }} className="divider"/>
			<Box className="profile-fields">
				{
					profile_data.map((field) => {
						return (
							<><Typography  variant='h5' gutterBottom>
								{field.label+field.value}
							</Typography>
							</>	
							)
						})
					}
				</Box>
				
			<Divider sx={{ background: theme.palette.black.main}} className="divider"/>
			<Box className="profile-fields">
				{
					contact_details.map((field) => {
						return (
							<><Typography  variant='h5' gutterBottom>
								{field.label+field.value}
							</Typography>
							</>	
							)
						})
					}
			</Box>
			</Box>
			<Box className="right-profile-box">
				<Avatar className="pfp" alt="Remy Sharp" src={image2} sx={{ width: 300, height: 300  }}/>
			</Box>

		</Box>
			<Box classname="button-box" alignItems={'center'} onClick={() => {
				navigate('/hire',{state:{
					workerID:location.state.props.email,
					userID: localStorage.getItem("username")
				}})
			}}>
			<Box sx={{display:'flex', justifyContent:'center'}}>
			<Button variant='contained'  sx={{backgroundColor:'red' ,alignItems:'center'}}>HIRE</Button>	
				</Box>
		</Box>
			
		</>
	)
}