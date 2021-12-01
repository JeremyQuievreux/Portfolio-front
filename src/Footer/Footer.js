//style
import './Footer.scss';
//base React
import React from 'react'
//React icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
    return (
        <div className="footer-main-container">
            <div className="footer-text">
                <p>© 2021 - Quievreux Jeremy </p>
            </div>
            <div className="footer-icons">
                <a href="https://github.com/JeremyQuievreux" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
                <a href="https://www.linkedin.com/in/jeremy-quievreux-22b2a9225/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            </div>
        </div>
    )


}

export default Footer
