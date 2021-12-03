import './Admin.scss';

import Axios from 'axios';


import { BsFillShieldLockFill } from "react-icons/bs";
import { useState } from 'react';


function Admin() {

    const [password, setPassword] = useState("");
    const [allMessages, setAllMessages] = useState();

    let url = `http://localhost:1337` || `https://portfolio-back.osc-fr1.scalingo.io` 

    //request to send data to db
    const handleSubmitPassword = (e) => {
        e.preventDefault();
        Axios.post(`${url}/messages/all`, {password})
        .then((res) => {
            setAllMessages(res.data.data)
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
            {allMessages && 
                <div className="messages-container">
                    {allMessages.map((message) => {
                        return(
                            <div className="message-container">
                                <p>{message.lastname}</p>
                                <p>{message.firstname}</p>
                                <p>{message.email}</p>
                                <p>{message.content}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Admin
