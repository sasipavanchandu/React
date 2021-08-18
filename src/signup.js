import { Avatar, Grid, Paper, TextField,Button, Checkbox, FormControlLabel} from '@material-ui/core'
import setState from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// const handleChange1 = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

const Signup=()=>{
    
    const paperstyle={padding :'20px',height:"50vh",width:320,margin:"0 auto"}
    const avatarStyle ={backgroundColor:'red'}
    const btnstyle={margin:'8px 0'}
    return(
      <Grid>
          <Paper style={paperstyle}>
              <Grid align ="center">
              <Avatar style={avatarStyle}><ExitToAppIcon /></Avatar>
              <h2>Sign In</h2>
              </Grid>
              <TextField  label ="Full Name" placeholder="Enter Full Name" fullWidth required/>
              <TextField  label ="Phone Number" placeholder="Enter Phone Number" type= "password" fullWidth required/>
           <Button type='submit' color= 'primary'  variant="contained" fullWidth style={btnstyle}>Send OTP</Button>
         
           <FormControlLabel control={<Checkbox name="checkedC" />} label="Terms & Conditions" />
     
        
            </Paper>
      </Grid>
    )
}

export default Signup