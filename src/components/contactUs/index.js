
import { Box, CardMedia, Grid, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/header'
import Activa from "../../assets/images/activa.png"
import Ktm from "../../assets/images/ktm.png"
import bikeLogo from "../../assets/images/bikelogo.png"
import Typewriter from "typewriter-effect";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Loader from '../../components/loader'
import { motion, AnimatePresence, easeInOut, useInView } from "framer-motion"
import Aos from 'aos'
import 'aos/dist/aos.css'
import ContactForm from './contactForm'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ContactUs = ({sectionContactUsRef,toast}) => {
  const contactData = {
    address: "20/7, Ujjain - Indore Rd, opposite railway station,Dudh Talai, Subhash Nagar," + "/n" + "Ujjain, Madhya Pradesh 456001",
    phone: "+91 9827656500",
    email: "shubham.nagota@gmail.com"
  }
  console.log("toast",toast);
  return (
    <Grid container   ref={sectionContactUsRef} data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }} maxWidth="100vw" pt={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5, md: 8 }} justifyContent="center" >
      <Box width="100%" height="100%" data-aos="fade-right" sx={{ marginTop: "0vh" }} position={"relative"} marginBottom={10} >
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2973834210793!2d75.77915974525925!3d23.19583055096738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637542d4fe535f%3A0xd75c638a35ee383f!2sUjjain%20darshan%20rental%20service!5e0!3m2!1sen!2sin!4v1695608950985!5m2!1sen!2sin"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "60vh", border: 0 ,paddingTop:"50px"}}></iframe>
        <Paper elevation={15}  sx={{ backgroundColor: "whitesmoke", position: { xs: "relative", lg: "absolute" }, bottom: "-50%", right: { xs: "0px", md: "10%" }, width: { xs: "90%", lg: "25%" }, maxHeight: "120%", borderRadius: "20px", marginBottom: { xs: "10px", lg: "20px" },zIndex:10 }} >
          <Typography variant='h3' textAlign="center" p={2}>Contact Us</Typography>
          <ContactForm sectionContactUsRef={sectionContactUsRef} toast={toast} />
        </Paper>
      </Box>
      <Grid item xs={12} >
        <Paper elevation={5} sx={{ backgroundColor: "whitesmoke", width: "75%", height: "100%", borderRadius: "20px", marginLeft: "10%" }}>
          <Typography variant='h4' textAlign="left" p={2}>Contact Details</Typography>
          <hr style={{ width: "65%" }}></hr>
          <Stack >
            <MenuItem sx={{ cursor: "initial",width:"80%" }}><Typography variant='h6'>Phone : <span style={{ fontWeight: "bold" }}>{contactData.phone}</span></Typography></MenuItem>
            <MenuItem sx={{ cursor: "initial" }}><Typography variant='h6'>Email : <span style={{ fontWeight: "bold" }}>{contactData.email}</span></Typography></MenuItem>
            <MenuItem sx={{ cursor: "initial" }}><Typography variant='h6' width="100%"> Address : <br /> <span style={{ whiteSpace: "break-spaces", fontWeight: "bold" }}>{contactData.address}</span></Typography></MenuItem>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ContactUs
