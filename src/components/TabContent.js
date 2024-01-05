import React from 'react';
import './TabContent.css'; // Make sure to create this CSS file

function TabContent({ player }) {
    return (
        <div className="tab-content">
            <div className="player-photo">
                <img src={`${process.env.PUBLIC_URL}${player.photo}`} alt={player.name} />
            </div>
            <div className="player-details">
                <h3>{player.name}</h3>
                <p>Role: {player.role}</p>
                <p>{player.details}</p>
            </div>
        </div>
    );
}

export default TabContent;
