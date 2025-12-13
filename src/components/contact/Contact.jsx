import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactData = [
    {
        id: 1,
        icon: <MdOutlineEmail />,
        title: 'Email',
        info: 'taqla4w@gmail.com',
        link: 'mailto:taqla4w@gmail.com',
        btnMsg: 'Send Message'

    },
    {
        id: 2,
        icon: <BsWhatsapp />,
        title: 'WhatsApp',
        info: '+31629288682',
        link: 'https://wa.me/31629288682?text=Hello%0AI%20would%20like%20to%20contact%20you',
        btnMsg: 'Send Message'
    },
    {
        id: 3,
        icon: <IoLocationSharp />,
        title: 'Location',
        info: 'Netherlands , Leiden , Leiderdorp',
        link: 'https://maps.app.goo.gl/NCBSrAvxcCra5PqZ8'
    }
]

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        toast.info("Sending message...", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: true,
            className: "custom-toast-body",
        });
        emailjs
            .sendForm('service_9h9lcwp', 'template_enf8k5s', form.current, 'bQpDmoIY6wN_kYXmd',
            )
            .then(() => {
                e.target.reset();
                toast.success(" Your message has been sent!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: "custom-toast-success",
                    bodyClassName: "custom-toast-body",
                });
            })
            .catch(() => {
                toast.error("Something went wrong, please try again", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    className: "custom-toast-error",
                    bodyClassName: "custom-toast-body",
                });
            });

    };

    return (
        <div>
            <section className="contact" id="contact">
                <div className="top_section">
                    <h5>Get In Touch</h5>
                    <h2>Contact Me</h2>
                </div>
                <div className="container contact_container">
                    <div className="contact_options">
                        {ContactData.map(({ id, icon, info, link, title, btnMsg }) =>
                            <article key={id} className='contact_option'>
                                <a href={link} target="_blank" className="icon_link">
                                    {icon}
                                </a>
                                <div className="text_group">
                                    <h5>{title} </h5>
                                    <a href={link} target="_blank" className="icon_link">
                                        <h4>{info}</h4>
                                    </a>
                                    {btnMsg && (
                                        <a href={link} target='_blank'>
                                            {btnMsg}
                                        </a>
                                    )}
                                </div>

                            </article>
                        )}
                    </div>

                    <form ref={form} onSubmit={sendEmail} >
                        <input type="text" placeholder='Full Name' name='name' />
                        <input type="email" placeholder='Email' name='email' required />
                        <textarea rows={10} name="message" id="" placeholder='Enter Your Message' required ></textarea>
                        <button className='btn btn-primary'>Send Message</button>
                    </form>

                </div>
            </section>
            <ToastContainer newestOnTop closeButton={false} />
        </div>

    )
}

export default Contact
