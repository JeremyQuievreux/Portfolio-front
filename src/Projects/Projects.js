import './Projects.scss';

import React from 'react'
import { FaLaptopCode } from "react-icons/fa";



function Projects() {
    return (
        <div className="projects-main-container">
            <div className="projects-container">
                <div className="projects-icon-container">
                    <FaLaptopCode/>
                    <h2>Mes projets</h2>
                </div>
                <div className="projects-list-container">
                    <div className="projects-item item-1">
                        <div className="project-info">
                            <h3>Nom du projet 1</h3>
                            <p>Description du projet et techno</p>
                        </div>
                    </div>
                    <div className="projects-item item-1">
                        <div className="project-info">
                            <h3>Nom du projet 2</h3>
                            <p>Description du projet et techno</p>
                        </div>
                    </div>
                    <div className="projects-item item-1">
                        <div className="project-info">
                            <h3>Nom du projet 3</h3>
                            <p>Description du projet et techno</p>
                        </div>
                    </div>
                    <div className="projects-item item-1">
                        <div className="project-info">
                            <h3>Nom du projet 4</h3>
                            <p>Description du projet et techno</p>
                        </div>
                    </div>
                    <div className="projects-item item-1">
                        <div className="project-info">
                            <h3>Nom du projet 5</h3>
                            <p>Description du projet et techno</p>
                        </div>
                    </div>
                    <div className="projects-item item-1">
                        <div className="project-info">
                            <h3>Nom du projet 6</h3>
                            <p>Description du projet et techno</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
