import './Contact.scss';
import './Contact.css';

import React, { useState } from 'react'

import { FiMail } from "react-icons/fi";


function Contact() {

    const [messageInfo, setMessageInfo] = useState({lastname: "", firstname: "", email:"", content:""});

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageInfo({lastname: "", firstname: "", email:"", content:""})
    }

    return (
        <section className="contact-main-container" id="contact">
            <div className="contact-container">
                <div className="contact-icon-container">
                    <FiMail/>
                    <h2>Contact</h2>
                </div>
                <div className="contact-form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-line">
                            <label htmlFor="lastname">Nom : </label>
                            <input type="text" name="lastname" id="lastname" value={messageInfo.lastname} onChange={(e) => setMessageInfo({...messageInfo, lastname: e.target.value})}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="firstname">Prénom : </label>
                            <input type="text" name="firstname" id="firstname" value={messageInfo.firstname} onChange={(e) => setMessageInfo({...messageInfo, firstname: e.target.value})}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="email">Adresse Mail : </label>
                            <input type="email" name="email" id="email" value={messageInfo.email} onChange={(e) => setMessageInfo({...messageInfo, email: e.target.value})}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="content">Message : </label>
                            <textarea name="content" id="content"  rows="5" cols="33" value={messageInfo.content} onChange={(e) => setMessageInfo({...messageInfo, content: e.target.value})}>
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
