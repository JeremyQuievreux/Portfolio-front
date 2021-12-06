import './Admin.scss';
import Axios from 'axios';
//React Icons
import { BsFillShieldLockFill } from "react-icons/bs";
import { useState } from 'react';

function Admin() {

    const [password, setPassword] = useState("");
    const [allMessages, setAllMessages] = useState();
    const [errorMessage, setErrorMessage] = useState();

    let url = `https://portfolio-back.osc-fr1.scalingo.io` 

    //request to send data to db
    const handleSubmitPassword = (e) => {
        e.preventDefault();
        Axios.post(`${url}/messages/all`, {password})
        .then((res) => {
            if (!res.data.error) {
                setAllMessages(res.data.data)
            } else {
                setErrorMessage("Mauvais mot de passe");
                setTimeout(function(){
                    setErrorMessage();
                }, 1500)
            }
        })
        .catch((err) => console.log(err))
        setPassword("");
    }

    return (
        <div className="admin-page-main-container">
            <div className="admin-page-title">
                <BsFillShieldLockFill/>
                <h1>Admin Page</h1>
                <BsFillShieldLockFill/>
            </div>
            <form className="form-admin" onSubmit={(e)=>handleSubmitPassword(e)}>
                <div className="form-admin-line">
                    <label htmlFor="password">Admin Password : </label>
                    <input type="password" 
                        value={password} 
                        placeholder="enter password"
                        name="password" 
                        id="password" 
                        onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Valider</button>
            </form>
            {errorMessage &&
                <div className="error-message">
                    <p>{errorMessage}</p>
                </div>
            }
            {allMessages && 
                <div className="messages-container">
                    {allMessages.map((message, index) => {
                        return(
                            <div className="message-container" key={index}>
                                <div className="name-line">
                                    <p>Message de {message.firstname} {message.lastname}</p>
                                </div>
                                <div className="message-line">
                                    <p>{message.content}</p>
                                </div>
                                <div className="mail-line">
                                    <p>Contacter  : {message.email}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Admin