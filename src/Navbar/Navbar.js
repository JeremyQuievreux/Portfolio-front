//style
import './Navbar.scss';
// base react
import React, { useState } from 'react';
// import icons
import { MdMenu } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { IoHardwareChipSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
// CV
import monCv from '../img/CV_Quievreux_Jeremy.pdf';




function Navbar() {
    //state affichage menu en mode mobile
    const [showMenu, setShowMenu] = useState(false)
    //fonction toggle
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
    //fonction fermeture 
    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <nav className="navbar-container">
            <h1 className="navbar-title">QUI&Eacute;VREUX Jérémy</h1>
            <div className="menu-desktop">
                <a href="#about" ><p><AiOutlineHome/>Accueil</p></a>
                <a href="#skills" ><p><IoHardwareChipSharp/>Compétences</p></a>
                <a href="#projects" ><p><FaLaptopCode/>Mes projets</p></a>
                <a href="#contact" ><p><FiMail/>Me contacter</p></a>
                <a href="/admin" ><p><FiMail/>Admin</p></a>
                <a href={monCv} download="CV_Quievreux_Jeremy" ><p className="btn-cv">Mon CV</p></a>
            </div>
            <div className="menu-mobile">
                <div className="menu-mobile-icon" onClick={(e) => hideMenu(e)}>
                    <p><MdMenu size="3em"/></p>
                </div>
                {showMenu && 
                    <div className="drop-down-menu" >
                        <a href="#about" ><p onClick={closeMenu}><AiOutlineHome/>Accueil</p></a>
                        <a href="#skills" ><p onClick={closeMenu}><IoHardwareChipSharp/>Compétences</p></a>
                        <a href="#projects" ><p onClick={closeMenu}><FaLaptopCode/>Mes projets</p></a>
                        <a href="#contact" ><p onClick={closeMenu}><FiMail/>Me contacter</p></a>
                        <a  href={monCv} download="CV_Quievreux_Jeremy" ><p className="btn-cv" onClick={closeMenu}>Mon CV</p></a>
                    </div>
                }
            </div>
        </nav>
    )
};

export default Navbar;
