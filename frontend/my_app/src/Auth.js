import React , { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import  LoginIcon  from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
// import { JavascriptTwoTone } from '@mui/icons-material';
// import { bgcolor } from '@mui/system';
const Auth = () => {
    // let companyName = ""
    // let username = ""
    // let phoneNo = ""
    // let email = ""
    // let password = ""
    
    const [isSignup, setIsSignup] = useState(false);
    const [isCompany, setIsCompany] = useState(false);
    const [isWorker, setIsWorker] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [inputs, setInputs] = useState({
        companyName:"",
        username: "",
        phoneNo:"",
        email:"",
        password: ""
        
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
                // companyName =inputs.companyName,
                // username = inputs.username,
                // phoneNo= inputs.phoneNo,
                // email=inputs.email,
                // password=inputs.password,

        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        fetch("http://localhost:3010/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                inputs
            }),

        }).then((res) => res.json()).then((data) => {
            console.log(data,"UserDetails")
        })
        

    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({ companyName: '', username: '', phoneNo: '', email: '', password: '' });
    }
    console.log(isSignup);
    console.log(isCompany);
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
                  boxShadow={"6px 6px 10px #ccc"}
              
                  sx={{
                      ":hover": {
                          boxShadow: "10px 10px 20px #ccc",
                        //   backgroundColor: "grey"
                      },
                    //   fontFamily: 'Ubuntu',
              }}>
                  <Typography
                      variant="h2"
                      padding={3}
                      
                      textAlign="center">{isSignup ? "Sign Up" : "Login"}</Typography>
                  
                  <Box
                      display="flex"
                      paddingLeft={1}
                  >
                      <Button
                          onClick={() => {
                            setIsUser(!isUser);
                            setIsWorker(false);
                            setIsCompany(false);

                            if (isCompany && isWorker === false) {
                                setIsUser(true);
                            }
                        }}
                          endIcon={<AccountCircleIcon />}
                          sx = {{padding:"20px",width:"auto"}} >User</Button>
                      <Button
                          onClick={() => {
                            setIsWorker(!isWorker);
                            setIsCompany(false);
                            setIsUser(false);

                            if (isCompany && isWorker === false) {
                                setIsUser(true);
                            }
                        }}
                          endIcon={<EngineeringIcon/>}
                          sx = {{padding:"20px",width:"auto"}}>Worker</Button>
                      <Button
                          endIcon={<ApartmentIcon/>}
                          sx={{ padding: "20px", width: "auto" }}
                          onClick={() => {
                              setIsCompany(!isCompany);
                              setIsWorker(false);
                              setIsUser(true);

                              if (isCompany && isWorker === false) {
                                  setIsUser(true);
                              }
                          }}>Company</Button>
                  </Box>

                  { isCompany && isSignup &&
                      <TextField
                        onChange={handleChange}
                        sx={{
                            width:"300px"
                        }}
                      value={inputs.companyName }
                      name="companyName"
                      variant="outlined"
                      placeholder='company name'
                      margin="normal" />
                  }

                  { 
                      <TextField
                            onChange={handleChange}
                            sx={{
                                width:"300px"
                            }}
                          value={inputs.username }
                          name="username"
                          variant="outlined"
                          placeholder='username'
                          margin="normal" />
                        }
                  {isSignup && 
                      <TextField
                        onChange={handleChange}
                        sx={{
                            width:"300px"
                        }}
                          value={inputs.phoneNo }
                          name="phoneNo"
                          variant="outlined"
                          placeholder='phone no.'
                          margin="normal" />
                        }
                  
                  {isSignup &&
                      <TextField
                        onChange={handleChange}
                        sx={{
                            width:"300px"
                        }}
                      value={inputs.email }
                      name="email"
                      type={'email'}
                      variant="outlined"
                      placeholder='email' 
                      margin = "normal"/>
                      
                    }
                  
                  <TextField
                        onChange={handleChange}
                        sx={{
                            width:"300px"
                        }}
                    value={inputs.password }
                      name="password"
                      type={'password'}
                      variant="outlined"
                      placeholder='password' 
                      margin = "normal"/>
                  
                  <Button
                    endIcon={isSignup?<AppRegistrationIcon/> :<LoginIcon/>}
                      type="submit"
                      sx={{
                          marginTop: 3,
                          borderRadius: 1.4,
                          color: "white",
                          backgroundColor:"black"
                      }}
                      variant="contained"
                      
                  >{isSignup ? "Sign Up" : "Login"}</Button>
                  <Button
                        endIcon={isSignup?<LoginIcon/>:<AppRegistrationIcon/> }
                      onClick={resetState}
                      sx={{
                        //   ":hover":{
                        //     backgroundColor:"blanchedalmond",
                        //   }
                          marginTop: 3,
                          borderRadius: 1.4
                      }}
                      
                  >
                      {isSignup ? "Login" : "New Here? Signup instead"}
                  </Button>
              </Box>
          </form>
    </div>
  )
}

export default Auth