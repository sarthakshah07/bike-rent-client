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
import "./_home.css"
import Services from '../../components/services'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  // const container = useRef(null)
  // const ref = useRef(null)
  // const isInView = useInView({ root: container })
  useEffect(() => {

    // setIsLoading(true)
    // setTimeout(() => {
    Aos.init({
      duration: 1200,
    })
    //   setIsLoading(false)
    // }, 3500);

  }, [])
  //   useEffect(()=>{
  // console.log("entering",isInView);
  //   },[isInView])
  return (
    <AnimatePresence>
      <Box>
        <Grid container justifyContent="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }} maxHeight="100vh" maxWidth="100vw" p={0} m={0}>

          {isLoading ?
            <Grid item xs={12} maxWidth="100%" height={{ md: "100vh", xs: "90vh" }} bgcolor="none" display="flex" alignItems="center" m={0} p={0}>
              <motion.div
                initial={{ x: "-100vw", opacity: 0, transition: { duration: 2.5, ease: easeInOut } }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
                exit={{ x: "-100vw", opacity: 0, transition: { duration: .5, ease: easeInOut } }}
                transition={2}
                style={{ backgroundColor: "white", height: "40%", width: "90%", display: "flex", justifyContent: "center", alignItems: "center" }} className='loaderContainer'>
                <Loader />
              </motion.div>
            </Grid >
            : <>
              
              <Grid item xs={12} ref={section1Ref} boxShadow={5} minHeight={{xs:"70vh",md:"100vh"}} maxHeight="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" className='headerContainer'>
               
                <Grid container height="100%" sx={{ opacity: .8 }}>
                  <Grid item xs={10} >
                  <Header color="lightyellow" data-aos="fade-down"  section1Ref={section1Ref} section2Ref={section2Ref} section3Ref={section3Ref}/>
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
                  <Grid item xs={5.5} display="flex" justifyContent="left" alignItems="end">

                    <img
                      data-aos="slide-right"
                      data-aos-delay="1500"
                      src={Activa}
                      height="70%"
                      width="50%" />

                  </Grid>
                  <Grid item xs={1} alignSelf="end" display="flex" justifyContent="center" alignItems="center" flexDirection="column">

                    <KeyboardDoubleArrowDownIcon className='scrollDown' sx={{ fontSize: "10vh", color: "silver" }} />
                    <Typography color="silver" className='scrollDown'>Scroll Down</Typography>
                  </Grid>
                  <Grid item xs={5} display="flex" justifyContent="right" alignItems="end" data-aos="slide-left"
                    data-aos-delay="1500">
                    <img
                      src={Ktm}
                      height="70%"
                      width="50%" />

                  </Grid>
                </Grid>

              </Grid>
              {/* </div> */}


              {/* about us section */}
              <Grid item xs={12} ref={section2Ref} height="100vh" display="flex" justifyContent="center" alignItems="end">
                <Box width="80%" height="90%" data-aos="fade-left">
                  <Grid container height="80%">
                    <Grid item xs={12} md={6} boxShadow="inset 250px 0px 100px #d4e5f1;" bgcolor="white" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                      <img
                        data-aos="fade-right"
                        data-aos-delay="1500"
                        className='bikelogo'
                        src={bikeLogo}
                        alt=''
                        height="60%"
                        width="60%" />
                    </Grid>
                    <Grid item xs={12} md={6} zIndex={0} minHeight="100%" alignSelf="baseline" p={4} borderRadius="0px 20px 20px 0px" bgcolor="white">
                      <Stack alignItems="center" spacing={5} textAlign="justify" >
                        <Typography variant={{ xs: 'h4', md: "h2" }} fontFamily="sans-serif" fontWeight="bold">About Us</Typography>
                        <Typography variant='body1' width={{ xs: "95%", md: "80%" }} >
                          At Ujjain Darshan Bike Rental Services, we are fervent about
                          motorcycles and believe that the thrill of the open road should be accessible
                          to all adventure seekers. Our mission is to make motorcycle rentals easy,
                          convenient, and an exhilarating experience for riders of all backgrounds.</Typography>
                        <Typography variant='body1' width={{ xs: "95%", md: "80%" }} >
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


              {/* services section */}
              <Grid item xs={12} ref={section3Ref} height="100vh" display="flex" justifyContent="center" alignItems="end" >
                
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                {/* </svg> */}
                <defs>
                  <linearGradient id="gradient" x1="10%" y1="50%" x2="100%" y2="50%">
                    <stop offset="55%" stop-color="#fff"></stop>
                    <stop offset="95%" stop-color="#fff"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0,700 C 0,700 0,233 0,233 C 61.333333333333314,263.92051282051284 122.66666666666663,294.8410256410257 214,271 C 305.33333333333337,247.15897435897435 426.66666666666674,168.55641025641023 511,162 C 595.3333333333333,155.44358974358977 642.6666666666666,220.93333333333337 704,232 C 765.3333333333334,243.06666666666663 840.6666666666665,199.7102564102564 918,178 C 995.3333333333335,156.2897435897436 1074.6666666666667,156.22564102564104 1162,169 C 1249.3333333333333,181.77435897435896 1344.6666666666665,207.38717948717948 1440,233 C 1440,233 1440,700 1440,700 Z"
                  stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53"
                  className="path-0"></path>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="5%" stop-color="#fff"></stop>
                    <stop offset="95%" stop-color="#fff"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0,700 C 0,700 0,466 0,466 C 95.67692307692306,480.9102564102564 191.35384615384612,495.8205128205128 270,479 C 348.6461538461539,462.1794871794872 410.2615384615385,413.6282051282052 487,395 C 563.7384615384615,376.3717948717948 655.6,387.66666666666663 742,405 C 828.4,422.33333333333337 909.3384615384614,445.70512820512823 981,462 C 1052.6615384615386,478.29487179487177 1115.0461538461539,487.51282051282055 1190,487 C 1264.9538461538461,486.48717948717945 1352.476923076923,476.2435897435897 1440,466 C 1440,466 1440,700 1440,700 Z"
                  stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1"
                  className="path-1"></path>
                  </svg>
                <Services/>
              </Grid>
            </>}
        </Grid>
      </Box>
    </AnimatePresence>
  )
}

export default Home
