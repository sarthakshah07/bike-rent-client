import { BikeScooter } from '@mui/icons-material'
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import backImage from "../../assets/images/footerback.avif"
import "./_downContainer.css"

const DownContainer = () => {

    const tourData = [
        {
            name: "Bike rent nanakheda"
        },
        {
            name: "Bike rent mahakal temple"
        },
        {
            name: "Bike rent Avntika"
        },
        {
            name: "Bike rent Omkareshwar"
        },
        // {
        //     name: "Bike rent Indore"
        // },
        {
            name: "Bike rent nanakheda"
        },
    ]
    return (
        <Grid container width="100%" justifyContent="center" className='cont' position="relative" p={0} m={0} sx={{ backgroundImage: `url(${backImage})`, backgroundSize: "cover", backgroundPosition: "left", backgroundRepeat: "no-repeat" }}>
            <Grid item xs={12} zIndex={10}>
                <Typography variant='h2' textAlign={'center'} p={2}>Ujjain Darshan Bike Rental Services</Typography>
            </Grid>
            <Grid item xs={12} >
                <Box width="100%" height="100%" >
                    <Grid container width="100%" justifyContent="center" >
                        <Stack spacing={{xs:-2.5,md:0}} direction={{ xs: "column", md: "row" }} width="100%" display="flex" justifyContent="center" alignItems="center">
                            {tourData?.map((item, index) => (
                                <Grid item xs={12} md={2} >
                                    <MenuItem sx={{ borderRight: { xs: "", md: index === (tourData.length - 1) ? 0 : 1 }, p: 0 }}>
                                        <Typography variant='h5' width="100%" p={2} textAlign={'center'} fontWeight="bold" >{item?.name}</Typography>
                                    </MenuItem>
                                </Grid>
                            ))}
                        </Stack>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={10} p={1} >
                <Typography textAlign="center" variant='h5'>
                    Bike On Rent Ujjain, bike Kirayepe milegi, Bike On Rent Services,
                    Rent a bike in Ujjain, You can hire a bike from in ujjain any place free
                    bike pickups and drop services in ujjain first time. When you can hire a bike,
                    why should you buy it? Yes, you can book bike rental in Ujjain at best rental
                    tariffs. Rent a bike to enjoy your local trip, weekend getaways with friends.
                    Hire Scooters(Activa/Dio/Fasino), Motorcycles (Off road/Vintage), Bullet
                    (Royal Enfield/Jawa), Superbikes (Harley Davidson, Ducati, Triumph Bonneville).
                    Pay a low amount of refundable deposit and ride your favorite bike. Fill the
                    form above and get instant Free quote on bike rental with discounts and offer
                    price.
                </Typography>
            </Grid>
            <Grid item xs={12} textAlign={"center"} alignSelf={'center'} bgcolor="#6695B1">
                <Typography variant='h5' color="white">All Rights Are Reserved</Typography>
            </Grid>
        </Grid>
    )
}

export default DownContainer
