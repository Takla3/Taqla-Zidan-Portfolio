import React from 'react'
import Me from '../../assets/m.png'
import './home.css'
import CV from '../../assets/Taqla_Zidan_cv.pdf'
import HomeSocials from './HomeSocials'
import ThemeToggle from './ThemeToggle';
function Home({ setActiveNav }) {
    return (
        <section className="home" id="home">
            <div className='home'>
                <ThemeToggle />
                <div className='container home-container'>
                    <h4>Hello I'm </h4>
                    <h1 className="gradient-name">Taqla Zidan</h1>
                    <h4 className='text-light'>Backend Developer</h4>
                    <div className='btns'>
                        <a href={CV} className='btn' download>Download CV</a>
                        <a href='#contact' className='btn btn-primary' onClick={() => setActiveNav('#contact')}>Let's Talk</a>

                    </div>
                    <div className='me'>
                        <img src={Me} alt="" />
                    </div>
                    <a href='#about' className='scroll_down' onClick={() => setActiveNav('#about')}>Scroll Down</a>
                    <HomeSocials />

                </div>


            </div>
        </section>
    )
}

export default Home
