import './Skills.scss';

import React from 'react'
import { IoHardwareChipSharp } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";
import { VscTools } from "react-icons/vsc";
import { BsCheckSquareFill } from "react-icons/bs";


function Skills() {

    
    return (
        <div className="skills-main-container">
            <div className="skills-container">
                <div className="skills-icon-container">
                    <IoHardwareChipSharp/>
                    <h2>Compétences &amp; Technologies</h2>
                </div>
                <div className="skills-block">
                    <div className="skills-underblock">
                        <h3><CgScreen/>Frontend</h3>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>HTML / CSS</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Javascript</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Sass</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>React</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>React Native</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Vue.JS</p>
                        </div>
                    </div>
                    <div className="skills-underblock">
                        <h3><CgScreen/>Backend</h3>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Node</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Express</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>MongoDB</p>
                        </div>
                    </div>
                    <div className="skills-underblock tools">
                        <h3><CgScreen/>Outils</h3>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Windows</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Suite Office</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Git / Gitlab / Github</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Mongo Compass</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Postman</p>
                        </div>
                        <div className="skills-item">
                            <BsCheckSquareFill/>
                            <p>Androïd Studio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
