import './Admin.scss';

import { BsFillShieldLockFill } from "react-icons/bs";
import { useState } from 'react';


function Admin() {

    const [password, setPassword] = useState("");

    const [allMessages, setAllMessages] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(password);
        setPassword("");
    }

    return (
        <div className="admin-page-main-container">
            <div className="admin-page-title">
                <BsFillShieldLockFill/>
                <h1>Admin Page</h1>
                <BsFillShieldLockFill/>
            </div>
            <form className="form-admin" onSubmit={(e)=>handleSubmit(e)}>
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
        </div>
    )
}

export default Admin
