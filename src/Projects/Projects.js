//style
import './Projects.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//base React
import React from 'react'
//React icons
import { FaLaptopCode } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

//preview projets
import todo1 from "../img/todo1.png";


//test carousel
import uds1 from "../img/uds1.png";
import uds2 from "../img/uds2.png";
import uds3 from "../img/uds3.png";
import uds4 from "../img/uds4.png";
import uds5 from "../img/uds5.png";

import pkm1 from "../img/pkm1.png";
import pkm2 from "../img/pkm2.png";
import pkm3 from "../img/pkm3.png";
import pkm4 from "../img/pkm4.png";

import smf1 from "../img/smf1.png";
import smf2 from "../img/smf2.png";
import smf3 from "../img/smf3.png";
import smf4 from "../img/smf4.png";
import smf5 from "../img/smf5.png";
import smf6 from "../img/smf6.png";

import meteo1 from "../img/meteo1.png";
import meteo2 from "../img/meteo2.png";
import meteo3 from "../img/meteo3.png";
import meteo4 from "../img/meteo4.png";
import meteo5 from "../img/meteo5.png";
import meteo6 from "../img/meteo6.png";
import meteo7 from "../img/meteo7.png";

import rguitare1 from "../img/rguitare1.png";
import rguitare2 from "../img/rguitare2.png";
import rguitare3 from "../img/rguitare3.png";
import rguitare4 from "../img/rguitare4.png";



import { Carousel } from 'react-responsive-carousel';




function Projects() {
    const udsPics = [uds1, uds2, uds3, uds4, uds5];
    const pkmPics = [pkm1,pkm2, pkm3, pkm4];
    const smfPics = [smf1,smf2,smf3,smf4,smf5,smf6];
    const meteoPics = [meteo1,meteo2,meteo3,meteo4,meteo5,meteo6,meteo7];
    const rguitarePics = [rguitare1,rguitare2,rguitare3,rguitare4];
    return (
        <section className="projects-main-container" id="projects">
            <div className="projects-container">
                <div className="projects-icon-container">
                    <FaLaptopCode/>
                    <h2>Mes projets</h2>
                </div>
                <div className="projects-list-container">
                    <div className="projects-item">
                        
                            <Carousel 
                                interval="3000"
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                            >
                                {udsPics.map((udsPic) => {
                                    return(
                                        <div className="project-item-img">
                                            <img src={udsPic} alt="" />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>Up Down Street</h3>
                                <h3>Novembre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Réalisation en équipe, d'une application web de crowdfunding sous forme de token NFT dans le domaine de l'immobilier. </p>
                                <p className="techno">React / Sass / Node / Express / MongoDB</p>
                            </div>
                            <div className="project-link">
                            <a href="https://github.com/JeremyQuievreux/UpdownStreet-Front" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        
                        <Carousel 
                                interval="3000"
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                            >
                                {pkmPics.map((pkmpic) => {
                                    return(
                                        <div className="project-item-img">
                                            <img src={pkmpic} alt="" />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>PokeRandom</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Site sur le theme des pokémons, avec systeme d'authentification, obtention de "carte" random quotidienne, page "boutique", page collection utilisateur</p>
                                <p className="techno">React / Sass / Node / Express / MongoDB / API (perso)</p>
                            </div>
                            <div className="project-link">
                            <a href="https://github.com/JeremyQuievreux/PokeRandomV1" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        
                        <Carousel 
                                interval="3000"
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                            >
                                {smfPics.map((smfPic) => {
                                    return(
                                        <div className="project-item-img">
                                            <img src={smfPic} alt="" />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>Rate'N'Eat</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Application mobile de notation (nutriScore et ecoScore) d'articles alimentaires grace aux codes barres (scannés ou entrés manuellement)</p>
                                <p className="techno">React Native / API (openfoodfact)</p>
                            </div>
                            <div className="project-link">
                            <a href="https://github.com/JeremyQuievreux/ScoreApp" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        
                        <Carousel 
                                interval="3000"
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                            >
                                {meteoPics.map((meteoPic) => {
                                    return(
                                        <div className="project-item-img">
                                            <img src={meteoPic} alt="" />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>Le Bocal Météo</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Application mobile météoroligique, obtention de la météo (instant T, prochaines 24h, 7 prochains jours), grace a la géolocalisation ou par recherche de ville</p>
                                <p className="techno">ReactNative / API (openweather)</p>
                            </div>
                            <div className="project-link">
                            <a href="https://github.com/JeremyQuievreux/AppMeteoV2" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        
                    <Carousel 
                                interval="3000"
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                            >
                            <div className="project-item-img">
                                <img src={todo1} alt="" />
                            </div>
                        </Carousel>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>ToDo List</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>La classique ToDo List, sous forme de Post-It rangée en plusieurs catégories selon l'état d'avancement, et stockée dans le localStorage</p>
                                <p className="techno">React / Sass </p>
                            </div>
                            <div className="project-link">
                            <a href="https://github.com/JeremyQuievreux/TodoListV2" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <Carousel 
                                interval="3000"
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                            >
                                {rguitarePics.map((rguitarePic) => {
                                    return(
                                        <div className="project-item-img">
                                            <img src={rguitarePic} alt="" />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>R'Guitare Shop</h3>
                                <h3>Septembre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Site vitrine pour un boutique en ligne de guitare, avec page d'accueil, page de contact, page catalogue de la boutique</p>
                                <p className="techno">HTML / CSS / Sass</p>
                            </div>
                            <div className="project-link">
                            <a href="https://github.com/JeremyQuievreux/RGuitar-Shop" target="_blank" rel="noreferrer"> <FaGithubSquare/></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects
