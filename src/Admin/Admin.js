import './Admin.scss';
import Axios from 'axios';
//React Icons
import { BsFillShieldLockFill } from "react-icons/bs";
import { useState } from 'react';
//Componants
import AdminMessage from './AdminMessage';

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
        setAllMessages();
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
            {/* error message */}
            {errorMessage &&
                <div className="error-message">
                    <p>{errorMessage}</p>
                </div>
            }
            {/* mapping of messages */}
            {allMessages && 
                <div className="messages-container">
                    {allMessages.map((message, index) => {
                        return(
                            <AdminMessage message_data={message} key={index}/>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Admin