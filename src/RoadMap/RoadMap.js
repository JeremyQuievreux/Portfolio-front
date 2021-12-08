import React from 'react'
import './RoadMap.scss'

import roadmap from '../img/roadmap.png';

function RoadMap() {
    return (
        <div className="roadmap-container">
            <div className="roadmap-title">
                <h1>My React Dev Roadmap</h1>
            </div>
            <div className="roadmap-image">
                <img src={roadmap} alt="" />
            </div>
        </div>
    )
}

export default RoadMap
