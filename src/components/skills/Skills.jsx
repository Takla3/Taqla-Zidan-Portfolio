import React from 'react'
import './skills.css'
import DJANGO from '../../assets/skills/django.svg'
import PYTHON from '../../assets/skills/python.svg'
import ASP from '../../assets/skills/aspnet.svg'
import CSHARP from '../../assets/skills/csharp.svg'
import GITHUB from '../../assets/skills/github.svg'
import GITLAB from '../../assets/skills/gitlab.svg'
import MYSQL from '../../assets/skills/mysql.svg'
import POSTGRE from '../../assets/skills/postgresql.svg'
import POSTMAN from '../../assets/skills/postman.svg'
import SWAGGER from '../../assets/skills/swagger.svg'
import CSS from '../../assets/skills/css.svg'
import JS from '../../assets/skills/js.svg'
import HTML from '../../assets/skills/html.svg'

const SkillsData = [
    {
        id: 1,
        image: DJANGO,
        title: 'Django'
    }
    ,
    {
        id: 2,
        image: ASP,
        title: 'Asp.net'
    }
    ,
    {
        id: 3,
        image: PYTHON,
        title: 'Python'
    }
    ,
    {
        id: 4,
        image: CSHARP,
        title: 'C#'
    }
    ,
    {
        id: 5,
        image: GITHUB,
        title: 'GitHub'
    }
    ,
    {
        id: 6,
        image: GITLAB,
        title: 'GitLab'
    }
    ,
    {
        id: 7,
        image: MYSQL,
        title: 'MySql'
    }
    ,
    {
        id: 8,
        image: POSTGRE,
        title: 'PostgreSql'
    }
    ,
    {
        id: 9,
        image: POSTMAN,
        title: 'Postman'
    }
    ,
    {
        id: 10,
        image: SWAGGER,
        title: 'Swagger'
    }
    ,
    {
        id: 11,
        image: CSS,
        title: 'Css'
    }
    ,
    {
        id: 12,
        image: HTML,
        title: 'Html'
    }
    ,
    {
        id: 13,
        image: JS,
        title: 'JavaScrpt'
    }
]



function Skills() {
    return (
        <section className='skills' id='skills'>
            <div className="top_section">
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
            </div>
            <div className="container container_skills">
                {SkillsData.map(({ id, image, title }) =>
                    <article className='card_skill'>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                        <div className="content">
                            <h4>{title}</h4>
                        </div>
                    </article>

                )}

            </div>
        </section>

    )
}

export default Skills
