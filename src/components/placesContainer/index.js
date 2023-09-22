import React from 'react'
import { Box, Card, CardContent, CardMedia, Divider, Grid, ListItem, Paper, Stack, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContainer from '../slider';

const PlacesContainer = () => {
    
    return (
        <Paper elevation={1} sx={{ width: "100%", height: "100%", bgcolor: "transparent", position: "absolute" }}>
            <Grid container justifyContent="center"  >
                <Grid item xs={12} md={10} textAlign="center">
                    <Typography variant="h3" mb={{ xs: 4, md: 0 }} mt={{ xs: 4, md: 2 }} sx={{
                        fontSize: { xs: "32px", md: "30px" }, fontFamily: "sans-serif", fontWeight: "bolder", textDecorationLine: "underline",
                        textDecorationThickness: "3px", textUnderlineOffset: "10px",
                        textUnderlinePosition: "from-font", textDecorationColor: "red"
                    }}>Ujjain Tourist Places</Typography>
                </Grid>
                <Grid item xs={12} md={12} mt={2}>
                    {/* <Box maxHeight="10%" maxWidth="1%"> */}
                        <Grid container spacing={2}  border={1} justifyContent="center" alignItems="center"  >
                            <SliderContainer/>
                        </Grid>
                    {/* </Box> */}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PlacesContainer
