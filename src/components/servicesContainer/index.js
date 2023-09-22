import { Grid } from '@mui/material'
import React from 'react'
import Services from '../services'

const ServicesContainer = () => {
    return (
        <Grid container justifyContent="center" data-aos="slide-right" data-aos-duration="500" sx={{ scrollBehavior: "smooth" }} maxWidth="100vw" p={0} m={0}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="end" >
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className='svg'>
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
                <Services />
            </Grid>
        </Grid>
    )
}

export default ServicesContainer
