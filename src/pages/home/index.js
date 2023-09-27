import { Avatar, Box, CardMedia, Divider, Grid, IconButton, MenuItem, Paper, Stack, Tooltip, Typography } from '@mui/material'
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
import FirstView from '../../components/firstView'
import AboutUs from '../../components/aboutus'
import ServicesContainer from '../../components/servicesContainer'
import VehicleDisplay from '../../components/vehilcleDisplay'
import PlacesContainer from '../../components/placesContainer'
import ContactUs from '../../components/contactUs/index'
import DownContainer from '../../components/downContainer'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import FooterContainer from '../../components/footerContainer/index'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  // const scrollRef = useRef(null)
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const sectionBikeDisplayRef = useRef(null)
  const sectionServicesRef = useRef(null)
  const sectionPlacesRef = useRef(null)
  const sectionContactUsRef = useRef(null)
  // const container = useRef(null)
  // const ref = useRef(null)
  // const isInView = useInView({ root: container })
  useEffect(() => {

    setIsLoading(true)

    Aos.init({
      duration: 1200,
    })
    setTimeout(() => {
      setIsLoading(false)
    }, 3500);

  }, [])
  //   useEffect(()=>{
  // console.log("entering",isInView);
  //   },[isInView])
  return (
    <AnimatePresence>
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
          <FirstView 
          section1Ref={section1Ref}
          section2Ref={section2Ref} 
          sectionBikeDisplayRef={sectionBikeDisplayRef} 
          sectionServicesRef={sectionServicesRef} 
          sectionPlacesRef={sectionPlacesRef}
          sectionContactUsRef={sectionContactUsRef}
          />
          <Divider />
          <AboutUs section2Ref={section2Ref} />
          <Divider />
          <VehicleDisplay sectionBikeDisplayRef={sectionBikeDisplayRef}/>
          <Divider/>
          <ServicesContainer sectionServicesRef={sectionServicesRef} />
          <PlacesContainer sectionPlacesRef={sectionPlacesRef}/>
          <ContactUs sectionContactUsRef={sectionContactUsRef} toast={toast}/>
          <DownContainer/>
          
          <Box sx={{ height: "10vh", width: "10vh", position: "fixed", top: "80%", right: "2%" }}>
            <IconButton onClick={()=>section1Ref.current?.scrollIntoView({behavior: 'smooth'})}>
                <Tooltip title="Back To Top">
                    <Avatar sx={{ backgroundColor: "lightblue" }}>
                        <KeyboardDoubleArrowUpIcon />
                    </Avatar>
                </Tooltip>
            </IconButton>
        </Box>
        </>
      }
      <ToastContainer />
    </AnimatePresence>
  )
}

export default Home
