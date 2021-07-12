import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-container">
                <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/July11Heros/D23972185_IN_HETV_SamsungFrameLaunch_GW_PC_Tallhero_1500x600_rev._CB664095157_.jpg' alt='banner'></img>
            </div>
            <div className="home-row">
                <Product title={'The Hp ink catridge (Black)'} image={'https://m.media-amazon.com/images/I/51AljrVmUGL._AC_SY200_.jpg'} price={499} rating={3.5} />
                <Product title='Dell Km117 Wireless Keyboard Mouse' image='https://m.media-amazon.com/images/I/310woq7OcyL._AC_SY200_.jpg' price={599} rating={4} />
            </div>
            <div className="home-row">
                <Product title={'Sandisk Cruzer Blade 32GB USB Flash Drive'} image={'https://m.media-amazon.com/images/I/31BMAMhCDPS._AC_SY200_.jpg'} price={599} rating={2.5} />
                <Product title='Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking' image={'https://m.media-amazon.com/images/I/31N2n4tGvGL._AC_SY200_.jpg'} price={899} rating={5} />
                <Product title='Prestige Electric Kettle PKOSS - 1500watts, Steel (1.5Ltr), Black' image='https://m.media-amazon.com/images/I/41XXjVSLyGL._AC_SY200_.jpg' price={459} rating={3} />
            </div>
            <div className="home-row">
                <Product title='Fossil Chronograph black Men Watch FS4545' image='https://m.media-amazon.com/images/I/41HeK+ht4cL.__AC_SY200_.jpg' price={4999} rating={3.5} />
            </div>
        </div>
    )
}

export default Home
