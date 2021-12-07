//Base React
import React from 'react'
// React Carousel
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//React Icons
import { FaGithubSquare } from "react-icons/fa";



function ProjectItem({project}) {
    return (
        <div className="projects-item">
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
                <div className="project-links-container">
                    {project.links.map((projectLink) => {
                        return(
                            <div className="project-link">
                                <a href={projectLink.link} target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                                <p>{projectLink.side}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
