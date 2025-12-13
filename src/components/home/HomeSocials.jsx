import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
function HomeSocials() {
    return (
        <div className='home_socials'>
            <a href='#' target='_blank'><FaLinkedin /></a>
            <a href='#' target='_blank'><FaGithub /></a>
            <a href='#' target='_blank'><FaGitlab /></a>

        </div>
    )
}

export default HomeSocials
