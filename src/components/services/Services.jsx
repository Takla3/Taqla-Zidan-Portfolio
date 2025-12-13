import React from 'react'
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { RiLightbulbLine } from "react-icons/ri";
import './services.css'
function Services() {
    return (

        <section id='services'>
            <div className='top_section'>
                <h5>What I Offer</h5>
                <h2>Services</h2>
            </div>


            <div className="container container_services">
                <article className="card">
                    <FaServer className='icon ' />
                    <h3>Backend Development</h3>
                    <p className='text-light'>Building robust backend systems with Django & ASP.NET</p>
                </article>

                <article className="card">
                    <AiOutlineApi className='icon ' />
                    <h3>API Development</h3>
                    <p className='text-light'>Designing secure and scalable RESTful APIs</p>
                </article>


                <article className="card">
                    <FaDatabase className='icon ' />
                    <h3>Database Management</h3>
                    <p className='text-light'>PostgreSQL & MySQL database design and optimization</p>
                </article>
                <article className="card">
                    <RiLightbulbLine className='icon ' />
                    <h3>Problem Solving</h3>
                    <p className='text-light'>Analyzing complex problems and providing efficient, data-driven solutions</p>
                </article>
            </div>
        </section>
    )
}

export default Services
