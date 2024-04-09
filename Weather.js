import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from  'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import background from "./weather.jpg"



export default function Weather() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const[data,setdata]=React.useState()
  const[text,setText]=React.useState('')
  const[Isloading,setIsloading]=React.useState(false)
  
  const handleClick=()=>{
    console.log('Text',text)
    let apiKey='bcf71a78f2714a1c84e85029242402'
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${text}&aqi=no`)
        .then((res)=>{
          console.log(res.data.location.name)
            setdata({
              name:res.data.location.name
            })
        })
        .catch((err)=>{
            console.log('Error',err)
        })
 
}


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTextChange=(e)=>{
    setText(e.target.value);
} ;

console.log('data',data)

const myStyle = {
  backgroundImage: `url(${background})`,
  height: "100vh",
  marginTop: "-100px",
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

  return (
    <div style={myStyle}>
      <CircularProgress disableShrink />;
      
     <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WeatherAppBy Shruti
          </Typography>
          {auth && (
            <div>
            </div>
          )}
        </Toolbar>
      </AppBar>
      
    </Box>
    <center><TextField  onChange={(e)=>{handleTextChange(e)}}id="filled-basic" label="Location" variant="filled" /> <br></br>
    <Button onClick={()=>{handleClick()}}variant="text">Submit</Button></center>

    <br></br>
   

    <center><Card sx={{ maxWidth: 345 }}>
      
      <CardContent>

    {/* {data && data.length>0 && data.map((data)=>(
     
      {data.location.country}<br>
      {data.location.name}<br>
      {data.location.region}<br>
      {data.current.humidity}<br>
      {data.current.temp_f}
    ))} */}
    <b>Name</b>
{ data && data.name}    
      </CardContent>
    
    </Card></center>
    
    
    
   
    
    </div>
  );

}  