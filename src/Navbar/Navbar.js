import React, { useState } from 'react';
import './Navbar.scss';

import { MdMenu } from "react-icons/md";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)

    const hideMenu = (e) => {
        if (!showMenu) {
            setShowMenu(!showMenu)
        } else{
            const menu = document.querySelector(".drop-down-menu")
            menu.classList.add("slideright")
            setTimeout(function(){
                setShowMenu(!showMenu)
            },900)
        }

    }

    return (
        <nav className="navbar-container">
            <h1>QUI&Eacute;VREUX Jérémy</h1>
            <div className="menu-desktop">
                <a href="#" ><p>Accueil</p></a>
                <a href="#" ><p>Compétences</p></a>
                <a href="#" ><p>Mes projets</p></a>
                <a href="#" ><p>Me contacter</p></a>
            </div>
            <div className="menu-mobile">
                <div className="menu-mobile-icon" onClick={(e) => hideMenu(e)}>
                    <p><MdMenu size="2em"/></p>
                </div>
                {showMenu && 
                    <div className="drop-down-menu">
                        <a href="#" ><p>Accueil</p></a>
                        <a href="#" ><p>Compétences</p></a>
                        <a href="#" ><p>Mes projets</p></a>
                        <a href="#" ><p>Me contacter</p></a>
                    </div>
                }
            </div>
        </nav>
    )
};

export default Navbar;
