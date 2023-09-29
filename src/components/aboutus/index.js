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
// import "./_home.css"
import Services from '../../components/services'
import FirstView from '../../components/firstView'

const AboutUs = ({section2Ref}) => {
    return (
        <Grid container ref={section2Ref} justifyContent="center" alignItems="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }}  maxWidth="100vw" pt={{xs:0,md:0}}  paddingBottom={{xs:5,md:20}}>
                <Box width="80%" height="90%" data-aos="fade-right" sx={{marginTop:"20vh"}}>
                    <Grid container height="80%">
                        <Grid item xs={12} md={6} boxShadow="inset 205px 0px 20px  #d4e5f1;" bgcolor="white" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <img
                                data-aos="fade-right"
                                data-aos-delay="1500"
                                className='bikelogo'
                                src={bikeLogo}
                                alt=''
                                height="60%"
                                width="60%" />
                        </Grid>
                        <Grid item xs={12} md={6} zIndex={0} minHeight="60vh" alignSelf="baseline" p={4} borderRadius="0px 20px 20px 0px" bgcolor="white" >
                            <Stack alignItems="center" spacing={5} textAlign="justify" >
                                <Typography variant="h2" fontFamily="sans-serif" fontWeight="bold" fontSize={{xs:"40px",md:"40px"}}>About Us</Typography>
                                <Typography variant='h6' width={{ xs: "95%", md: "80%" }} >
                                    At Ujjain Darshan Bike Rental Services, we are fervent about
                                    motorcycles and believe that the thrill of the open road should be accessible
                                    to all adventure seekers. Our mission is to make motorcycle rentals easy,
                                    convenient, and an exhilarating experience for riders of all backgrounds.</Typography>
                                <Typography variant='h6' width={{ xs: "95%", md: "80%" }} >
                                    <Typewriter
                                        data-aos="fade-in"
                                        component={'article'}
                                        onInit={(typewriter) => {
                                            typewriter
                                                .typeString(" We appreciate your consideration of our Rental Service for your motorcycle rental needs. We eagerly anticipate the opportunity to be part of your motorcycle adventure, crafting exhilarating memories on the road together.")
                                                .start()
                                        }}
                                    />
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
        </Grid>
    )
}

export default AboutUs
