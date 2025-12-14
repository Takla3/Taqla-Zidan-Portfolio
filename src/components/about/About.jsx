import React from 'react'
import './about.css'
import ImageMe from '../../assets/about/about-me.jpeg'

function About({ setActiveNav }) {
    return (
        <section className="about" id="about">
            <div className="top_section">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
            </div>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ImageMe} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <h1>Taqla Zidan</h1>
                    <h2>Backend Developer</h2>
                    <p>
                        Software Engineer with over 2 years of experience in <strong>Django</strong>  and <strong>ASP.NET MVC</strong> ,
                        I specialize in developing efficient RESTful APIs, optimizing relational databases, and delivering impactful backend solutions.
                    </p>
                    <p>
                        Passionate about solving complex problems, writing clean code, and contributing to innovative projects that drive business success.
                    </p>
                    <p>
                        Eager to learn new technologies and frameworks,
                        I enjoy contributing to innovative projects that enhance user experience and drive business success.
                    </p>
                    <a href="#contact" className='btn btn-primary' onClick={() => setActiveNav('#contact')}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
