//style
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Projects.scss';
//base React
import React from 'react'
//React icons
import { FaLaptopCode } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
//React Carousel
import { Carousel } from 'react-responsive-carousel';
//Projects Datas
import {projects} from './PicsLists';

function Projects() {
    return (
        <section className="projects-main-container" id="projects">
            <div className="projects-container">
                <div className="projects-icon-container">
                    <FaLaptopCode/>
                    <h2>Mes projets</h2>
                </div>
                <div className="projects-list-container">
                    
                    {projects.map((project, index) => {
                        return(
                            <div className="projects-item" key={index}>
                                <Carousel 
                                    interval="3000"
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                    showStatus={false}
                                >
                                {project.slides.map((slide, index) => {
                                    return(
                                        <div className="project-item-img" key={index}>
                                            <img src={slide} alt="" />
                                        </div>
                                    )
                                })}
                                </Carousel>
                                <div className="project-info">
                                    <div className="project-title">
                                        <h3>{project.name}</h3>
                                        <h3>{project.date}</h3>
                                    </div>
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                        <p className="techno">{project.technos}</p>
                                    </div>
                                    <div className="project-link">
                                    <a href={project.link} target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
