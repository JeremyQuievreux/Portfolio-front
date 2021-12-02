import './Admin.scss';

import { BsFillShieldLockFill } from "react-icons/bs";


function Admin() {


    return (
        <div className="admin-page-main-container">
            <div className="admin-page-title">
                <BsFillShieldLockFill/>
                <h1>Admin Page</h1>
                <BsFillShieldLockFill/>
            </div>
            <div className="form-admin-container">
                <form className="form-admin">
                    <div className="form-admin-line">
                        <label htmlFor="password">Admin Password : </label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button>Valider</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
