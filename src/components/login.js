import { Avatar, Grid, Paper, TextField,Button, Typography} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import React, { useState, useRef } from 'react';
import axios from 'axios'
import {useHistory } from 'react-router'

import BasicLayout from  '../dashboard/basiclayout'
import { Spinner } from 'react-bootstrap';

const BasicForm =() =>{
const history = useHistory()
const [phNumber,setphNumber] = useState("");
const [password,setpassword] = useState("");
const [loading, setLoading] = useState(false)
const [user_data, setUser] = useState();
 
 const submitForm = (event) =>{
   event.preventDefault();
   const newEntry = { phNumber:phNumber , password: password };
    localStorage.setItem('phNo',phNumber)
    localStorage.setItem('password',password)
    const values={
      phNumber,
      password
    }
    const addData = async()=>{
      setLoading(true)
    const response = await axios.post("http://localhost:5000/netr/#/Auth/AuthController_login",values);
    console.log(response);
    
        if(response.data.status){
        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("username",JSON.stringify(response.data.user_data.username));
        localStorage.setItem("password",JSON.stringify(response.data.user_data.password));
        localStorage.setItem("userid",JSON.stringify(response.data.user_data.id));
        localStorage.setItem("expiresIn",JSON.stringify(response.data.expiresIn));
        localStorage.setItem("accessToken",JSON.stringify(response.data.accessToken));
        localStorage.setItem("role",JSON.stringify(response.data.user_data.role));
        setLoading(false)
        }
        if (user_data) {
          // window.location.reload();
          return (
            <>
            {loading === false ? (
              <BasicLayout key={1} user={user_data} username={phNumber}/>
            ): (
              <div className="spin">
              <Spinner size="large"/>
              </div>
            )}
            </>
          );
        }
      }
    addData()

    history.push('/dashboard')
  }  
  const onphNumberChangeHandler =(event)=>{
    setphNumber(event.target.value)
  }
  const onpasswordChangeHandler =(event)=>{
    setpassword(event.target.value)
  }
    const paperstyle={padding :20,height:"40vh",width:320,margin:"0 auto"}
    const avatarStyle ={backgroundColor:'red'}
    const btnstyle={margin:'8px 0'}
    return(
      <Grid>
          <Paper style={paperstyle}>
              <Grid align ="center">
              <Avatar style={avatarStyle}><LockIcon /></Avatar>
              <h2>Welcome to netR</h2>
              </Grid>
              
                <TextField  label ="Moblie Number" placeholder="Enter Moblie Number" fullWidth required type="text" 
                // value={phNumber}
                onChange={onphNumberChangeHandler}/>
                <TextField  label ="Pin" placeholder="Enter Pin" type= "password" fullWidth required  
                onChange={onpasswordChangeHandler}/>
               
                  <Button type='submit' color= 'primary'  variant="contained" fullWidth style={btnstyle} onClick={submitForm}>Sign In</Button>
               
              
           <Typography>
           
          </Typography> 
         </Paper>
      </Grid>
    )
    
}
export default BasicForm