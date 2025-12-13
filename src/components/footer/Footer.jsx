import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './footer.css'
function Footer() {
    return (
        <div>
            <footer>
                <a href="" className="footer_logo">Taqla zidan</a>
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
                <div className="footer_socials">
                    <a href="http://www.linkedin.com/in/taqla-zidan-0a583b39a" target='_blank'><FaLinkedinIn /></a>
                    <a href="https://www.facebook.com/share/1ASaPHdJXd/" target='_blank'> <FaFacebookF /> </a>
                    <a href="https://www.instagram.com/taklazidan?igsh=MTBuZHRldXpuZnU5Zw==" target='_blank'><FaInstagram /> </a>
                </div>
                <div className="footer_copyright">
                    <small><a href="#">Taqla Zidan </a>&copy;  All rights reserved</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer
