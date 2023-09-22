
import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import activa from "../../assets/images/vehicleImages/b_activa.webp"
import bike1 from "../../assets/images/vehicleImages/b_bulet.webp"
import bike2 from "../../assets/images/vehicleImages/b_jupitar.webp"
import bike3 from "../../assets/images/vehicleImages/b_pulsar.webp"
import bike4 from "../../assets/images/vehicleImages/b_shine.webp"
import bike5 from "../../assets/images/vehicleImages/b_sport.webp"


const VehicleDisplay = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState()
    const imagesData = [
        {
            id: 1,
            image: activa,
            height: "40vh",
        },
        {
            id: 2,
            image: bike1,
            height: "50vh"
        },
        {
            id: 3,
            image: bike2,
            height: "30vh"
        },
        {
            id: 4,
            image: bike3,
            height: "30vh"
        },
        {
            id: 5,
            image: bike4,
            height: "30vh"
        },
        {
            id: 6,
            image: bike5,
            height: "30vh"
        },

    ]
    const handleImage = (item, index) => {
        console.log("item", item, index);
        setIsOpen(prev => !prev)
        setSelectedImage(item)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <Grid container justifyContent="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }} p={0} m={0}>
            <Grid item xs={10} textAlign="center" >  <Typography variant='h3' fontWeight={"bolder"} fontFamily="sans-serif" >Two Wheeler Gallery</Typography></Grid>
            <Grid item xs={10} display="flex" justifyContent="center" alignItems="end" p={4} >

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    style={{ width: "100vw" }}
                >
                    <Masonry gutter='5px'>
                        {imagesData?.map((item, index) => (
                            <img
                                key={index}
                                src={item?.image}
                                alt='no image'
                                style={{ width: "100%", height: item?.height }}
                                onClick={() => handleImage(item, index)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Grid>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            // sx={{width:"100vh"}}
            >
                <DialogContent sx={{ width: "40vw", objectFit: "contain" }}>
                    <img
                        src={selectedImage?.image}
                        alt=''
                        width="100%"
                        height="100%" />
                </DialogContent>

            </Dialog>
            {/* </div> */}
        </Grid>
    )
}

export default VehicleDisplay
