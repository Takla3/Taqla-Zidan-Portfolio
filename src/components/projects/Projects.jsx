import React from 'react'
import './projects.css'
import TOURBOOK from '../../assets/projects/tourbook.png'
import CARSERVICE from '../../assets/projects/car-services.png'
import UNIVERSITY from '../../assets/projects/UniversityAdmission.png'
import JOBPOSITION from '../../assets/projects/job-position.png'
import WAKALAT from '../../assets/projects/wakalat-archive.png'


const portfolioData =
    [
        {
            id: 1,
            image: TOURBOOK,
            title: 'TourBook',
            desc: 'A website that offers a new way for make a specific tour, publish it, register on it and more. Build Api using Django , Database using Postgresql ',
            url: 'https://github.com/Takla3/TourBook'
        },
        {
            id: 2,
            image: UNIVERSITY,
            title: 'University Admission',
            desc: 'A website to automate the registration process for University Admission.  Build Api using Django , Database using Postgresql ',
            url: 'https://github.com/Takla3/University_Admission'
        },
        {
            id: 3,
            image: CARSERVICE,
            title: 'Car Services',
            desc: 'A responsive Car Service system dashboard. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.',
            url: ''
            , privateFor: 'private for DigitalGlobe'
        }
        ,
        {
            id: 4,
            image: WAKALAT,
            title: 'Wakalat Archive',
            desc: 'A dashboard for archiving agency records. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.',
            url: '',
            privateFor: 'private for DigitalGlobe'
        }
        , {
            id: 5,
            image: JOBPOSITION,
            title: 'Malakat',
            desc: "a dashboard for Job Position and Employee's Modification management. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.",
            url: '', privateFor: 'private for DigitalGlobe'
        }

    ]


function Projects() {
    return (
        <section className="projects" id='projects'>
            <div className="top_section projects_title">
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>
            <div className="container projects_container">
                {portfolioData.map(({ id, image, title, desc, url, privateFor }) =>
                    <article key={id} className='portfolio_item'>
                        <div className="portfolio_item_img">
                            <img src={image} alt="" />
                        </div>
                        <h2>{title}</h2>
                        <h3> {desc} </h3>
                        <div className="portfolio_item_btns">
                            {url ? (
                                <a href={url} className='btn' target='_blank'>Project Url</a>
                            ) : (
                                <a className='btn'>{privateFor}</a>
                            )}
                        </div>
                    </article>
                )}


            </div>
        </section>
    )
}

export default Projects
