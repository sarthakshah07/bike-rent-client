import React from 'react'
import {Grid,Typography } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContainer from '../slider';

const PlacesContainer = ({sectionPlacesRef}) => {
    
    return (
        <Grid container justifyContent="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }}  maxWidth="100vw" p={0} m={0} paddingBottom={{xs:5,md:0}}>
                <Grid item ref={sectionPlacesRef} xs={12} md={10} textAlign="center" >
                    <Typography variant="h3" mb={{ xs: 4, md: 0 }} mt={{ xs: 4, md: 2 }} sx={{
                        fontSize: { xs: "32px", md: "30px" }, fontFamily: "sans-serif", fontWeight: "bolder", textDecorationLine: "underline",
                        textDecorationThickness: "3px", textUnderlineOffset: "10px",
                        textUnderlinePosition: "from-font", textDecorationColor: "red"
                    }}>Ujjain Tourist Places</Typography>
                </Grid>
                <Grid item xs={12} md={12} mt={2}>
                        <Grid container spacing={2}  justifyContent="center" alignItems="center"  mt={2}  >
                            <SliderContainer/>
                        </Grid>
                </Grid>
        </Grid>
    )
}

export default PlacesContainer
