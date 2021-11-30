//style
import './Projects.scss';
//base React
import React from 'react'
//React icons
import { FaLaptopCode } from "react-icons/fa";
//preview projets
import imgProjet1 from "../img/uds1.png";
import imgProjet2 from "../img/pkm3.png";
import imgProjet3 from "../img/smf1.png";
import imgProjet4 from "../img/meteo1.png";
import imgProjet5 from "../img/todo1.png";
import imgProjet6 from "../img/rguitare1.png";



function Projects() {
    return (
        <section className="projects-main-container" id="projects">
            <div className="projects-container">
                <div className="projects-icon-container">
                    <FaLaptopCode/>
                    <h2>Mes projets</h2>
                </div>
                <div className="projects-list-container">
                    <div className="projects-item">
                        <a href="https://github.com/JeremyQuievreux/UpdownStreet-Front" target="_blank" rel="noreferrer">
                            <div className="project-item-img">
                                <img src={imgProjet1} alt="" />
                            </div>
                        </a>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>Up Down Street</h3>
                                <h3>Novembre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Site web de cruwnfunding de bien immobilier, sous forme de token NFT</p>
                                <p className="techno">React / Sass / Node / Express / MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <a href="https://github.com/JeremyQuievreux/PokeRandomV1" target="_blank" rel="noreferrer">
                            <div className="project-item-img">
                                <img src={imgProjet2} alt="" />
                            </div>
                        </a>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>PokeRandom</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Site sur le theme des pokémons, avec systeme d'authentification, obtention de "carte" random quotidienne, page "boutique", page collection utilisateur</p>
                                <p className="techno">React / Sass / Node / Express / MongoDB / API (perso)</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <a href="https://github.com/JeremyQuievreux/ScoreApp" target="_blank" rel="noreferrer">
                            <div className="project-item-img">
                                <img src={imgProjet3} alt="" />
                            </div>
                        </a>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>Rate'N'Eat</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Application mobile de notation (nutriScore et ecoScore) d'articles alimentaires grace aux codes barres (scannés ou entrés manuellement)</p>
                                <p className="techno">React Native / API (openfoodfact)</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <a href="https://github.com/JeremyQuievreux/AppMeteoV2" target="_blank" rel="noreferrer">
                            <div className="project-item-img">
                                <img src={imgProjet4} alt="" />
                            </div>
                        </a>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>Le Bocal Météo</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Application mobile météoroligique, obtention de la météo (instant T, prochaines 24h, 7 prochains jours), grace a la géolocalisation ou par recherche de ville</p>
                                <p className="techno">ReactNative / API (openweather)</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <a href="https://github.com/JeremyQuievreux/TodoListV2" target="_blank" rel="noreferrer">
                        <div className="project-item-img">
                            <img src={imgProjet5} alt="" />
                        </div>
                        </a>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>ToDo List</h3>
                                <h3>Octobre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>La classique ToDo List, sous forme de Post-It rangée en plusieurs catégories selon l'état d'avancement, et stockée dans le localStorage</p>
                                <p className="techno">React / Sass </p>
                            </div>
                        </div>
                    </div>
                    <div className="projects-item">
                        <a href="https://github.com/JeremyQuievreux/RGuitar-Shop" target="_blank" rel="noreferrer">
                        <div className="project-item-img">
                            <img src={imgProjet6} alt="" />
                        </div>
                        </a>
                        <div className="project-info">
                            <div className="project-title">
                                <h3>R'Guitare Shop</h3>
                                <h3>Septembre 2021</h3>
                            </div>
                            <div className="project-description">
                                <p>Site vitrine pour un boutique en ligne de guitare, avec page d'accueil, page de contact, page catalogue de la boutique</p>
                                <p className="techno">HTML / CSS / Sass</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects
