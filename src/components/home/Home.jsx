import React from 'react'
import Me from '../../assets/m.png'
import './home.css'
import CV from '../../assets/TAQLA_ZIDAN_CV.pdf'
import HomeSocials from './HomeSocials'

function Home() {
    return (
        <div className='home'>
            <div className='container home-container'>
                <h4>Hello I'm </h4>
                <h1>Taqla Zidan</h1>
                <h4 className='text-light'>Backend Developer</h4>
                <div className='btns'>
                    <a href={CV} className='btn' download>Download CV</a>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>


                </div>
                <div className='me'>
                    <img src={Me} alt="" />
                </div>
                <a href='#about' className='scroll_down'>Scroll Down</a>
                <HomeSocials />

            </div>


        </div>
    )
}

export default Home
