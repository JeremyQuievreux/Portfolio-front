import './Contact.scss';
import './Contact.css';

import React, { useState } from 'react'

import { FiMail } from "react-icons/fi";


function Contact() {

    const [lastname, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(lastname);
    }

    const handleInput = (e, setter) => {
        setter(e.target.value);
    }

    return (
        <section className="contact-main-container" id="contact">
            <div className="contact-container">
                <div className="contact-icon-container">
                    <FiMail/>
                    <h2>Contact</h2>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-line">
                            <label htmlFor="lastname">Nom : </label>
                            <input type="text" name="lastname" id="lastname" value={lastname} onChange={(e) => handleInput(e, setLastName)}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="firstname">Prénom : </label>
                            <input type="text" name="firstname" id="firstname" />
                        </div>
                        <div className="form-line">
                            <label htmlFor="email">Adresse Mail : </label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-line">
                            <label htmlFor="message">Message : </label>
                            <textarea name="message" id="message"  rows="5" cols="33">
                                message de ta race
                            </textarea>
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
