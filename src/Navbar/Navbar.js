import React, { useState } from 'react';
import './Navbar.scss';

import { MdMenu } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsGearFill, BsGlobe} from "react-icons/bs";
import { FiMail } from "react-icons/fi";

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
            <h1 className="navbar-title">QUI&Eacute;VREUX Jérémy</h1>
            <div className="menu-desktop">
                <a href="#about" ><p><AiOutlineHome/>Accueil</p></a>
                <a href="#" ><p><BsGearFill/>Compétences</p></a>
                <a href="#" ><p><BsGlobe/>Mes projets</p></a>
                <a href="#" ><p><FiMail/>Me contacter</p></a>
            </div>
            <div className="menu-mobile">
                <div className="menu-mobile-icon" onClick={(e) => hideMenu(e)}>
                    <p><MdMenu size="3em"/></p>
                </div>
                {showMenu && 
                    <div className="drop-down-menu">
                        <a href="#about" ><p><AiOutlineHome/>Accueil</p></a>
                        <a href="#" ><p><BsGearFill/>Compétences</p></a>
                        <a href="#" ><p><BsGlobe/>Mes projets</p></a>
                        <a href="#" ><p><FiMail/>Me contacter</p></a>
                    </div>
                }
            </div>
        </nav>
    )
};

export default Navbar;
