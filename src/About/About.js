import React from 'react';
import './About.scss';

function About() {
    return (
        <section className="about-container" id="about">
            <div className="about-left-block">
                <h1>Bonjour, je suis Jérémy QUIEVREUX.<br/>Developpeur Fullstack JS Junior</h1>
                <p>Ancien Assistant Manager et passionné d'informatique depuis toujours , je me suis 
                    lancé dans une reconvertion profesionnelle dans le domaine du 
                    Developpement Web/Mobile en 2019, j'ai commencé par me former en autodidacte grace
                    à des sites comme Grafikart, OpenClassRoom, Udemy pour ensuite intégrer une formation
                    de type bootcamp au Bocal Academy Nice </p>
            </div>
            <div className="about-right-block">
                <h1>Right Block</h1>
            </div>
        </section>
    )
}

export default About
