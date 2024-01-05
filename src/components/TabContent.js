import React from 'react';
import './TabContent.css'; // Make sure to create this CSS file

function getNameAfterPipe(str) {
    let parts = str.split("|");
    return parts[1] || str; // Return an empty string if there's no part after the "|"
}

function TabContent({ player }) {
    return (
        <div className="tab-content">
            <div className="player-photo">
                <img src={`${process.env.PUBLIC_URL}${player.photo}`} alt={player.name} />
            </div>
            <div className="player-details">
                <h3>{getNameAfterPipe(player.name)}</h3>
                <p>{player.role}</p>
            <div className="affiliation-text">
                <p>{player.details}</p>
                <p><b>Education:</b> {player.edu}</p>
                <p><b>Affiliation:</b> {player.affiliation}</p>
            </div>


            </div>
        </div>
    );
}

export default TabContent;
