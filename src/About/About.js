import React from 'react';
import './About.scss';

import maggle from "../img/maggle.jpg"

function About() {
    return (
        <div className="about-main-container">
            <section className="about-container" id="about">
                <div className="about-left-block">
                    <h1>Bonjour, je suis Jérémy</h1>
                    <h1>Developpeur Fullstack Javascript Junior</h1>
                    <p>Ancien Assistant Manager et passionné d'informatique depuis toujours , je me suis 
                        lancé dans une reconvertion profesionnelle dans le domaine du 
                        Developpement Web / Mobile en 2019.</p>
                    <p>J'ai commencé à me former en autodidacte grace à des sites comme 
                        Grafikart, OpenClassRoom, Udemy. J'ai ensuite intégrer le  centre de 
                        formation du Bocal Academy Nice, pour y suivre la formation de 
                        Developpeur Fullstack Javascript.</p>
                </div>
                <div className="about-right-block">
                    <img src={maggle} alt="" />
                </div>
            </section>
        </div>
    )
}

export default About
