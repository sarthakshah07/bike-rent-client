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

const FirstView = ({section1Ref, section2Ref, sectionBikeDisplayRef, sectionServicesRef, sectionPlacesRef, sectionContactUsRef }) => {
    return (
        <Grid container ref={section1Ref} justifyContent="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }} maxWidth="100vw" p={0} m={0}>
            <Grid item xs={12} boxShadow={5} minHeight={{ xs: "30vh", md: "100vh" }} maxHeight="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" className='headerContainer'>

                <Grid container height="100%" sx={{ opacity: .8 }}>
                    <Grid item xs={10}>
                        <Header color="lightyellow" data-aos="fade-down" section2Ref={section2Ref}
                            sectionBikeDisplayRef={sectionBikeDisplayRef}
                            sectionServicesRef={sectionServicesRef}
                            sectionPlacesRef={sectionPlacesRef}
                            sectionContactUsRef={sectionContactUsRef}
                        />
                    </Grid>

                    <Grid item xs={10} md={12} height="40%" display={"flex"} justifyContent="center" alignItems="flex-end" >
                        <motion.text
                            initial={{ opacity: -10, }}
                            animate={{ opacity: 1 }}
                            whileInView={{ y: 0, x: 0, opacity: 1 }}
                            exit={{ y: "+100vw", opacity: 0 }}
                            transition={{ duration: 1 }}
                        >

                            <Typography variant="h3" fontSize={{ xs: "24px", md: "40px" }} fontFamily="cursive" fontWeight="bolder" fontStyle="oblique"
                                color="white">
                                <Typewriter
                                    data-aos="fade-in"
                                    component={'animateMotion'}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("We Offer : ")
                                            .pauseFor(1000)
                                            .typeString("Activa")
                                            .pauseFor(1000)
                                            .deleteChars(6)
                                            .typeString("Bike")
                                            .pauseFor(1000)
                                            .deleteChars(4)
                                            .typeString("Road Asistance")
                                            .pauseFor(1000)
                                            .deleteChars(15)
                                            .typeString("Rent for an Hour")
                                            .pauseFor(1000)
                                            .deleteChars(16)

                                            .deleteAll()
                                            .typeString("All Two Wheeler Vehicles Available On Rent")
                                            .pauseFor(500)
                                            .deleteAll().changeDeleteSpeed(100)
                                            .typeString("Free pickup & delivery")
                                            .pauseFor(1000)
                                            .deleteAll().changeDeleteSpeed(100)
                                            .typeString("Let's Ride").pasteString("...")
                                            .start()
                                    }}

                                />
                            </Typography>
                        </motion.text>
                    </Grid>
                    <Grid item xs={5.5} display={{ xs: "none", md: "flex" }} justifyContent="left" alignItems="end">

                        <img
                            data-aos="slide-right"
                            data-aos-delay="1500"
                            src={Activa}
                            height="70%"
                            width="50%" />

                    </Grid>
                    <Grid item xs={1} alignSelf="end" display={{ xs: "none", md: "flex" }} justifyContent="center" alignItems="center" flexDirection="column">

                        <KeyboardDoubleArrowDownIcon className='scrollDown' sx={{ fontSize: "10vh", color: "silver" }}  onClick={() => section2Ref.current?.scrollIntoView({ behavior: 'smooth' })} />
                        <Typography color="silver" className='scrollDown'>Scroll Down</Typography>
                    </Grid>
                    <Grid item xs={5} display={{ xs: "none", md: "flex" }} justifyContent="right" alignItems="end" data-aos="slide-left"
                        data-aos-delay="1500">
                        <img
                            src={Ktm}
                            height="70%"
                            width="50%" />

                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default FirstView
