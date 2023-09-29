import React from 'react'
import { Box, Card, CardContent, CardMedia, Divider, Grid, ListItem, Paper, Stack, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';

const Services = () => {
    const iconScale = "3"
    const iconColor = "#86c5da"
    const servicesData = [
        {
            id: 1,
            icon: <AccessTimeFilledIcon sx={{ scale: iconScale, color: iconColor }} />,
            title: "24/7 Bike Rental Services ujjain"
        },
        {
            id: 2,
            icon: <> <TempleBuddhistIcon sx={{ scale: iconScale, color: iconColor, marginRight: 6 }} /><ArrowRightAltIcon sx={{ scale: iconScale, color: iconColor, marginRight: 6 ,display:{xs:"none",md:"block"}}} /><TempleHinduIcon sx={{ scale: iconScale, color: iconColor,display:{xs:"none",md:"block"} }} /></>,
            title: "Bike Rider Ujjain to Omkareswar"
        },
        {
            id: 3,
            icon: <HourglassTopIcon sx={{ scale: iconScale, color: iconColor }} />,
            title: "1 hours bike rent ujjain available too"
        },
        {
            id: 4,
            icon: <CalendarMonthIcon sx={{ scale: iconScale, color: iconColor }} />,
            title: "Longest Opening Hour (weekly/Monthly Bike rental )"
        },
        {
            id: 5,
            icon: <ElectricBikeIcon sx={{ scale: iconScale, color: iconColor }} />,
            title: "Bike rent for Out of ujjain"
        },
        {
            id: 6,
            icon: <SportsMotorsportsIcon sx={{ scale: iconScale, color: iconColor }} />,
            title: "Free pickup & Drop Services"
        },
    ]
    return (
        <Paper elevation={1}   sx={{ width: "100%", height: "100%", bgcolor: "transparent", position: "absolute" }}>
            <Grid container justifyContent="center" height={{xs:"",md:"100%"}} >
                <Grid item xs={12} md={10} textAlign="center">
                    <Typography variant="h3" mb={{xs:4,md:0}} mt={{xs:4,md:2}} sx={{fontSize:{xs:"32px",md:"30px"}, fontFamily: "sans-serif", fontWeight: "bolder", textDecorationLine: "underline",
                     textDecorationThickness: "3px", textUnderlineOffset: "10px",
                      textUnderlinePosition: "from-font",textDecorationColor:"red" }}>Why Choose Us ?</Typography>
                </Grid>
                <Grid item xs={10} md={10}>
                    <Box maxHeight="100%" maxWidth="100%">
                        <Grid container spacing={2} justifyContent="center" alignItems="center"  >
                            {servicesData?.map((item,index) => (
                                <Grid item xs={6} md={4} key={item.id} data-aos="fade-down" data-aos-delay={`${index*300}`}>
                                    <Card sx={{
                                        maxWidth: "100%", minHeight: {xs:"25vh",md:"30vh"},maxHeight:{xs:"40vh",md:"30vh"}, borderRadius: 5, display: "flex"
                                        , flexDirection: "column", alignItems: "center", backgroundColor: "lightcyan", boxShadow: "inset 0 0 0 0 #80C9FA"
                                        ,
                                        "&:hover": {
                                            // background: "#d4e5f1",
                                            boxShadow: "inset 400px 0 0 0 #d4e5f1",
                                            transitionDuration: ".8s",
                                            scale: "1.01",
                                            outline:".1px solid gray",
                                            
                                        },
                                    }}>
                                        <CardMedia
                                            // image={item?.icon}
                                            image={<></>}
                                            sx={{ height: "15vh", display: "flex", alignItems: "center", justifyContent: "center" }}>{item?.icon}</CardMedia>
                                        <Divider width="80%" />
                                        <CardContent>
                                            <Typography variant='h6'>{item?.title}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Services
