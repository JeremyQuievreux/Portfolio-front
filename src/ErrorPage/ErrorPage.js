import React from 'react';
import './ErrorPage.scss';
function ErrorPage() {
    return (
        <div className="error-page-container">
            <div className="top-bar">
            </div>
            <div className="error-message-container">
                <h1>Erreur 404</h1>
                <p>Cette page n'existe pas</p>
            </div>
            <div className="bottom-bar">
            </div>
        </div>
    )
}

export default ErrorPage