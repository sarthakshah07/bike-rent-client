import * as React from 'react';
import "../../App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header=({color,section1Ref,section2Ref,section3Ref,})=> {
  return (
    // <Box width="80%" data-aos="fade-down" data-aos-duration="1500"  position="fixed" top={0} >
      <AppBar  sx={{boxShadow:0,backgroundColor:"transparent",position:"fixed",width:"100%",display:"flex",alignItems:"center"}} >
        <Toolbar sx={{color:color,width:"80%",display:{xs:"flex",md:""},flexDirection:{xs:"column",md:"row"}}}>
          <Typography variant="h5"  component="div" sx={{fontSize:{md:"24px",xs:"18px"}, flexGrow: 1,fontWeight:"bolder",fontFamily:"serif" }}>
            Ujjain Darshan Bike Rental Services
          </Typography>
          <div style={{display:"flex"}}>
          <Button color="inherit" sx={{borderRight:.4,fontSize:{xs:"8px",md:""},cursor:"pointer"}} onClick={()=>section2Ref.current?.scrollIntoView({behavior: 'smooth'})}>About Us</Button>
          <Button color="inherit" sx={{borderRight:.4,fontSize:{xs:"8px",md:""},cursor:"pointer"}} onClick={()=>section3Ref.current?.scrollIntoView({behavior: 'smooth'})}>Services</Button>
          <Button color="inherit" sx={{borderRight:.4,fontSize:{xs:"8px",md:""}}}>Rental Bikes</Button>
          <Button color="inherit" sx={{borderRight:.4,fontSize:{xs:"8px",md:""}}}>Places</Button>
          <Button color="inherit" sx={{fontSize:{xs:"8px",md:""}}}>Contact Us</Button>
          </div>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
export default Header