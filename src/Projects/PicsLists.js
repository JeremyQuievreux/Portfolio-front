import updownstreet1 from "../img/uds1.png";
import updownstreet2 from "../img/uds2.png";
import updownstreet3 from "../img/uds3.png";
import updownstreet4 from "../img/uds4.png";
import updownstreet5 from "../img/uds5.png";

import pokemon1 from "../img/pkm1.png";
import pokemon2 from "../img/pkm2.png";
import pokemon3 from "../img/pkm3.png";
import pokemon4 from "../img/pkm4.png";

import scoremyfood1 from "../img/smf1.png";
import scoremyfood2 from "../img/smf2.png";
import scoremyfood3 from "../img/smf3.png";
import scoremyfood4 from "../img/smf4.png";
import scoremyfood5 from "../img/smf5.png";
import scoremyfood6 from "../img/smf6.png";

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

import todo1 from "../img/todo1.png";

export const projects = [
    {
        name: "Up Down Street",
        date: "Novembre 2021",
        description: "Réalisation en équipe, d'une application web de crowdfunding sous forme de token NFT dans le domaine de l'immobilier.",
        technos: "React / Sass / Node / Express / MongoDB",
        link: "https://github.com/JeremyQuievreux/UpdownStreet-Front",
        slides: [updownstreet1,updownstreet2,updownstreet3,updownstreet4,updownstreet5]
    },
    {
        name: "PokeRandom",
        date: "Octobre 2021",
        description: `Site sur le theme des pokémons, avec systeme d'authentification, obtention de "carte" random quotidienne, page "boutique", page collection utilisateur.`,
        technos: "React / Sass / Node / Express / MongoDB / API (perso)",
        link: "https://github.com/JeremyQuievreux/PokeRandomV1",
        slides: [pokemon1,pokemon2,pokemon3,pokemon4]
    },
    {
        name: "Rate'N'Eat",
        date: "Octobre 2021",
        description: "Application mobile de notation (nutriScore et ecoScore) d'articles alimentaires grace aux codes barres (scannés ou entrés manuellement).",
        technos: "React Native / API (openfoodfact)",
        link: "https://github.com/JeremyQuievreux/ScoreApp",
        slides: [scoremyfood1,scoremyfood2,scoremyfood3,scoremyfood4,scoremyfood5,scoremyfood6]
    },
    {
        name: "Le Bocal Météo",
        date: "Octobre 2021",
        description: "Application mobile météoroligique, obtention de la météo (instant T, prochaines 24h, 7 prochains jours), grace a la géolocalisation ou par recherche de ville.",
        technos: "ReactNative / API (openweather)",
        link: "https://github.com/JeremyQuievreux/AppMeteoV2",
        slides: [meteo1,meteo2,meteo3,meteo4,meteo5,meteo6,meteo7]
    },
    {
        name: "ToDo List",
        date: "Octobre 2021",
        description: "La classique ToDo List, sous forme de Post-It rangée en plusieurs catégories selon l'état d'avancement, et stockée dans le localStorage.",
        technos: "React / Sass",
        link: "https://github.com/JeremyQuievreux/TodoListV2",
        slides: [todo1]
    },
    {
        name: "R'Guitare Shop",
        date: "Septembre 2021",
        description: "Site vitrine pour un boutique en ligne de guitare, avec page d'accueil, page de contact, page catalogue de la boutique",
        technos: "HTML / CSS / Sass",
        link: "https://github.com/JeremyQuievreux/RGuitar-Shop",
        slides: [rguitare1,rguitare2,rguitare3,rguitare4]
    },
]