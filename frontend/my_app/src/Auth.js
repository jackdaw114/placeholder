import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import theme from './design/palette';
import { Route, Router, Routes, useLocation, useNavigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import UserForm from './components/authcomponents/UserForm'
import CompanyForm from './components/authcomponents/CompanyForm';
import WorkerForm from './components/authcomponents/WorkerForm';
import LoginForm from './components/authcomponents/LoginForm'
import axios from 'axios';
import './Auth.css';

// import { JavascriptTwoTone } from '@mui/icons-material';
// import { bgcolor } from '@mui/system';
const Auth = () => {
    // let companyName = ""
    // let username = ""
    // let phoneNo = ""
    // let email = ""
    // let password = ""
    const navigate = useNavigate()
    const [isSignup, setIsSignup] = useState(false);
    const [isCompany, setIsCompany] = useState(false);
    const [isWorker, setIsWorker] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [inputs, setInputs] = useState({
        companyName: "",
        username: "",
        phoneNo: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        job: "",
        location: "",
        visiting_charge: '',

    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        let url;
        if (isUser) {
            url = '/user'
        }
        else if (isWorker) {
            url = '/worker'
        }
        else {
            url = '/company'
        }

        if (isSignup) {
            url = url + '/register'
        }
        else {
            url = url + '/login'
        }
        console.log(url)
        axios.post(url, inputs, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).then(res => {
            localStorage.clear();
            localStorage.setItem('username', res.data.username)
            localStorage.setItem('phoneNo', res.data.phoneNo)
            localStorage.setItem('email', res.data.email)
            if (res.data.password !== undefined) {

                localStorage.setItem('loggedIn', true);
                if (isWorker) {
                    localStorage.setItem('isWorker', true);
                }
                else if (isUser) {
                    localStorage.setItem('isUser', true);
                }
                else {
                    localStorage.setItem('isCompany', true);
                }
            }

            console.log(res.data)
            if (res.data._id) {
                if (isWorker)
                    navigate('/workerHome')
                else
                    navigate('/')
            }
        })


    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({ companyname: '', username: '', phoneNo: '', email: '', password: '' });
    }




    const CustForm = () => {
        if (!isSignup)
            return (<LoginForm func={handleChange} inputs={inputs} />)
        if (isSignup && isWorker)
            return (<WorkerForm func={handleChange} inputs={inputs} />)
        // else if (isSignup && isCompany)
        //     return (<CompanyForm func={handleChange} inputs={inputs} />)
        else {
            return (
                <UserForm func={handleChange} inputs={inputs} />
            )
        }
    }




    return (
        <div>
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
                    <Typography
                        variant="h2"
                        padding={3}
                        color={theme.palette.secondary.main}
                        textAlign="center">{isSignup ? "Sign Up" : "Login"}</Typography>

                    <Box
                        display="flex"
                        paddingLeft={1}
                    >
                        <Button
                            className='category-button'
                            onClick={() => {

                                setIsWorker(false);
                                setIsCompany(false);

                                setIsUser(true);

                            }}
                            endIcon={<AccountCircleIcon />}
                            sx={{ padding: "20px", width: "auto", color: 'white' }} >User</Button>
                        <Button
                            className='category-button'
                            onClick={() => {
                                setIsCompany(false);
                                setIsUser(false);

                                setIsWorker(true);

                            }}
                            endIcon={<EngineeringIcon />}
                            sx={{ padding: "20px", width: "auto", color: 'white' }}>Worker</Button>
                        
                        {/* <Button
                            className='category-button'
                            endIcon={<ApartmentIcon />}
                            sx={{ padding: "20px", width: "auto", color: 'white' }}
                            onClick={() => {

                                setIsCompany(true);
                                setIsUser(false);
                                setIsWorker(false);
                            }}>Company</Button> */}
                    </Box>

                    {CustForm()}

                    <Button
                        endIcon={isSignup ? <AppRegistrationIcon /> : <LoginIcon />}
                        type="submit"
                        sx={{
                            marginTop: 3,
                            borderRadius: 1.4,
                            color: "white",
                            backgroundColor: "black"
                        }}
                        variant="contained"

                    >{isSignup ? "Sign Up" : "Login"}</Button>
                    <Button

                        endIcon={isSignup ? <LoginIcon /> : <AppRegistrationIcon />}
                        onClick={resetState}
                        sx={{
                            //   ":hover":{
                            //     backgroundColor:"blanchedalmond",
                            //   }
                            marginTop: 3,
                            borderRadius: 1.4,
                            color: 'white'
                        }}

                    >
                        <Typography color={'white'}>
                            {isSignup ? "Login" : "New Here? Signup instead"}
                        </Typography>
                    </Button>
                    <Button onClick={() => {
                        console.log(inputs)
                    }} sx={{ width: 100, height: 100 }}></Button>
                </Box>
            </form>
        </div>
    )
}

export default Auth