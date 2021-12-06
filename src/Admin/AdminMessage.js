import React from 'react'

function AdminMessage({message_data}) {
    return (
        <div className="message-container">
            <div className="name-line">
                <p>Message de {message_data.firstname} {message_data.lastname}</p>
            </div>
            <div className="message-line">
                <p>{message_data.content}</p>
            </div>
            <div className="mail-line">
                <p>Contacter  : {message_data.email}</p>
            </div>
        </div>
    )
}

export default AdminMessage
