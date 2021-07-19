import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='overlay-container'></div>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000} >
                <div>
                    <img loading='lazy' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/July21/Nord2/Nord_2_Jul16h_1500x600._CB662831923_.jpg' alt='nord'></img>
                </div>
                <div>
                    <img loading='lazy' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Beauty/GW/June/21-Makeup-kits--accessories-1500x600._CB667449469_.jpg' alt='make-up'></img>
                </div>
                <div>
                    <img loading='lazy' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Heros/D24082897_IN_CEPC_Graphics_3000x12000.5x._CB664256932_.jpg' alt='electronics'></img>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
