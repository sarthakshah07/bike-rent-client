import * as React from 'react';
import "../../App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header=({color})=> {
  return (
    <Box width="80%" data-aos="fade-down" data-aos-duration="1500"  position="fixed" top="0">
      <AppBar position="relative" sx={{boxShadow:0,backgroundColor:"transparent"}} >
        <Toolbar sx={{color:color}}>
          <Typography variant="h5" zIndex={10} component="div" sx={{ flexGrow: 1,fontWeight:"bolder",fontFamily:"serif" }}>
            Ujjain Darshan Bike Rental Services
          </Typography>
          <Button color="inherit" sx={{borderRight:.4}}>About Us</Button>
          <Button color="inherit" sx={{borderRight:.4}}>Services</Button>
          <Button color="inherit" sx={{borderRight:.4}}>Rental Bikes</Button>
          <Button color="inherit" sx={{borderRight:.4}}>Places</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header