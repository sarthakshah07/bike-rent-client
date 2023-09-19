import { Box, CardMedia, Grid, MenuItem, Stack, Typography } from '@mui/material'
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

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)
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
      <Grid container justifyContent="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }} maxWidth="100%">
        {isLoading ?
          <Box width="100%" height="100vh" bgcolor="none" display="flex" alignItems="center">
            <motion.div
              initial={{ x: "-100vw", opacity: 0, transition: { duration: 2.5, ease: easeInOut } }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } }}
              exit={{ x: "-100vw", opacity: 0, transition: { duration: .5, ease: easeInOut } }}
              transition={2}
              style={{ backgroundColor: "white", height: "40%", width: "90%", display: "flex", justifyContent: "center", alignItems: "center" }} className='loaderContainer'>
              <Loader />
            </motion.div>

          </Box>
          : <>
            {/* <div  data-aos="fade-right" style={{ display: "flex" }}
              // initial={{ opacity: 0, transition: { duration: 0.5, ease: easeInOut } }}
              // animate={{ opacity: 1, transition: { duration: 2, ease: easeInOut } }}
              // exit={{ opacity: 0, transition: { duration: .5, ease: easeInOut } }} 
              > */}
            <Grid item xs={12} boxShadow={5} minHeight="100vh" maxHeight="100vh" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" className='headerContainer'>
              {/* <motion.div style={{ width: "80%", position: "fixed" }}
                  initial={{ y: "-100vw", opacity: 0, transition: { duration: 2.5, ease: easeInOut } }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 1.5, ease: easeInOut } }}
                  exit={{ y: "-100vw", opacity: 0, transition: { duration: .5, ease: easeInOut } }}
                > */}
              <Header color="lightyellow" data-aos="fade-down" />
              {/* </motion.div> */}


              <Grid container height="100%" sx={{ opacity: .8 }}>
                <Grid item xs={12} height="40%" display={"flex"} justifyContent="center" alignItems="flex-end" >
                  <motion.text
                    initial={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    whileInView={{ y: 0, x: 0, opacity: 1 }}
                    exit={{ y: "+100vw", opacity: 0 }}
                    transition={{ duration: 1 }}
                  >

                    <Typography variant='h3' fontFamily="cursive" fontWeight="bolder" fontStyle="oblique"
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

                  {/* <motion.img
                      initial="hidden"
                      whileInView="visible"
                      src={Activa}
                      height="70%"
                      width="50%" ></motion.img> */}
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
            <Grid item xs={12} height="100vh" display="flex" justifyContent="center" alignItems="center">
              <Box width="80%" height="90%"  data-aos="fade-left">
                <Grid container height="100%">
                  <Grid item xs={6} zIndex={10} boxShadow="inset 250px 0px 100px #d4e5f1;" bgcolor="white" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                      <img
                      data-aos="fade-right"
                      data-aos-delay="1500"
                      className='bikelogo'
                      src={bikeLogo}
                      alt=''
                      height="60%"
                      width="60%"/>
                  </Grid>
                  <Grid item xs={6} zIndex={0} minHeight="100%" alignSelf="baseline" p={4} borderRadius="0px 20px 20px 0px" bgcolor="white">
                    <Stack alignItems="center" spacing={5} textAlign="justify" >
                      <Typography variant='h2' fontFamily="sans-serif" fontWeight="bold">About Us</Typography>
                      <Typography variant='body1' width="80%" >
                        At Ujjain Darshan Bike Rental Services, we are fervent about
                        motorcycles and believe that the thrill of the open road should be accessible
                        to all adventure seekers. Our mission is to make motorcycle rentals easy,
                        convenient, and an exhilarating experience for riders of all backgrounds.</Typography>
                      <Typography variant='body1' width="80%" >
                      <Typewriter
                        data-aos="fade-in"
                        component={'animateMotion'}
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
            <Grid item xs={12} height="100vh" display="flex" justifyContent="center" alignItems="center" >
            <Typography data-aos="zoom-in-right" tra> sdfbsdkhbsd</Typography>
            </Grid>
          </>}

      </Grid>
    </AnimatePresence>
  )
}

export default Home
