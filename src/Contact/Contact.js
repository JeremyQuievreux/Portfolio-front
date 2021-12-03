//style
import './Contact.scss';
//base React + dep
import React, { useState } from 'react'
import Axios from 'axios';
//icons React
import { FiMail } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";


function Contact() {

    //objet state to send to db
    const [messageInfo, setMessageInfo] = useState({lastname: "", firstname: "", email:"", content:""});
    //responce message after request db
    const [errorMessage, setErrorMessage] = useState('');
    //toggle send button
    const [showButton, setShowButton] = useState(true);

    //request to send data to db
    const handleSubmit = (e) => {
        e.preventDefault();

        const url = "https://portfolio-back.osc-fr1.scalingo.io";
        Axios.post(`${url}/messages/send`, messageInfo )
        .then((res) => {
            if (!res.data.error) {
                setErrorMessage(res.data.message);
                setShowButton(false);
                setTimeout(function(){
                    setErrorMessage("");
                    setShowButton(true);
                },1000)
            }
        })
        .catch((err) => console.log(err))
        setMessageInfo({lastname: "", firstname: "", email:"", content:""})
    }

    return (
        <section className="contact-main-container" id="contact">
            <div className="contact-container">
                <div className="contact-icon-container">
                    <FiMail/>
                    <h2>Contact</h2>
                </div>
                <div className="contact-block">
                    <a href="tel:+0628517107"><p><GiSmartphone/> 06 28 51 71 07</p></a>
                    <a href="mailto:jquievreux.devpro@gmail.com"><p><FiMail/> jquievreux.devpro@gmail.com</p></a>
                </div>
                <div className="contact-form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-line">
                            <label htmlFor="lastname">Nom : </label>
                            <input type="text" name="lastname" id="lastname" 
                                required
                                placeholder="Votre Nom"
                                value={messageInfo.lastname} 
                                onChange={(e) => setMessageInfo({...messageInfo, lastname: e.target.value})}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="firstname">Prénom : </label>
                            <input type="text" name="firstname" id="firstname" 
                                required
                                placeholder="Votre Prénom" 
                                value={messageInfo.firstname} 
                                onChange={(e) => setMessageInfo({...messageInfo, firstname: e.target.value})}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="email">Adresse Mail : </label>
                            <input type="email" name="email" id="email" 
                                required
                                placeholder="Votre adresse mail" 
                                value={messageInfo.email} 
                                onChange={(e) => setMessageInfo({...messageInfo, email: e.target.value})}/>
                        </div>
                        <div className="form-line">
                            <label htmlFor="content">Message : </label>
                            <textarea name="content" id="content"  rows="5" cols="33" 
                                required
                                placeholder="Laisse moi un petit message surtout si vous voulez me recruter !" 
                                value={messageInfo.content} 
                                onChange={(e) => setMessageInfo({...messageInfo, content: e.target.value})}>
                            </textarea>
                        </div>
                        {showButton ? 
                        <button type="submit">Envoyer</button> : 
                        <p className="success-message">{errorMessage}</p>                        
                        }

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
