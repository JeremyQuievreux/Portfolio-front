//style
import './About.scss';
//base react
import React from 'react';
//photo
import maggle from "../img/maggle.jpg"
//icons react
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function About() {
    return (
        <section className="about-main-container"id="about">
            <div className="about-container" >
                <div className="about-left-block">
                    <h1>Bonjour, je suis Jérémy</h1>
                    <h1>Developpeur Fullstack Javascript</h1>
                    <p>Ancien Assistant Manager et passionné d'informatique depuis toujours , je me suis 
                        lancé dans une reconvertion profesionnelle dans le domaine du 
                        Developpement Web / Mobile en 2019.</p>
                    <p>J'ai commencé à me former en autodidacte grace à des sites comme 
                        Grafikart, OpenClassRoom, Udemy. J'ai ensuite intégrer le  centre de 
                        formation du Bocal Academy Nice, pour y suivre la formation de 
                        Developpeur Fullstack Javascript.</p>
                </div>
                <div className="about-right-block">
                    <div className="img-container">
                        <img src={maggle} alt="" />
                    </div>
                    <div className="icons-container">
                        <a href="https://github.com/JeremyQuievreux" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                        <a href="https://www.linkedin.com/in/jeremy-quievreux-22b2a9225/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                    </div>
                </div>
            </div>         
        </section>
    )
}

export default About
