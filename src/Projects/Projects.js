//style
import './Projects.scss';
//base React
import React from 'react'
//React icons
import { FaLaptopCode } from "react-icons/fa";
//Projects Datas
import {projects} from './ProjectsData';
//Componants
import ProjectItem from './ProjectItem';

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
                            <ProjectItem project={project} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
