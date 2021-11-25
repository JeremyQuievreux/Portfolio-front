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
                    <div className="projects-item">
                        <p className="preview">Item 1</p>
                    </div>
                    <div className="projects-item">
                        <p className="preview">Item 2</p>
                    </div>
                    <div className="projects-item">
                        <p className="preview">Item 3</p>
                    </div>
                    <div className="projects-item">
                        <p className="preview">Item 4</p>
                    </div>
                    <div className="projects-item">
                        <p className="preview">Item 5</p>
                    </div>
                    <div className="projects-item">
                        <p className="preview">Item 6</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
