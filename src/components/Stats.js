// src/components/Stats.js
import React, { useState } from 'react';
import './Stats.css';  // Make sure to import the CSS file

function Stats({ stats }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPitch, setSelectedPitch] = useState(null);

    const defaultPitch = {
        name: "Pitching Arsenal",
        photo: "default-image-url.jpg",  // Replace this with your default image URL
        description: "Select a pitch to see details.",
    };

    return (
        <div className="stats">
            <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Hide Stats' : 'See Stats'}
            </button>
            {isOpen && (
                <div className="stats-content">
                    <div className="pitches-menu">
                        {stats.pitch.map((pitch, index) => (
                            <div
                                key={index}
                                className={`pitch-item ${selectedPitch === pitch ? 'selected' : ''}`}
                                onClick={() => setSelectedPitch(pitch)}
                            >
                                <span className="circle">
                                    {selectedPitch === pitch && <span className="dot"></span>}
                                </span>
                                {pitch.name}
                            </div>
                        ))}
                    </div>
                    <div className="pitch-details">
                        <h2>{selectedPitch ? selectedPitch.name : defaultPitch.name}</h2>
                        <div className="pitch-content">
                            <img
                                src={selectedPitch ? `${process.env.PUBLIC_URL}${selectedPitch.photo}` : `${process.env.PUBLIC_URL}${defaultPitch.photo}`}
                                alt={selectedPitch ? selectedPitch.name : defaultPitch.name}
                            />
                            <p>{selectedPitch ? selectedPitch.description : defaultPitch.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Stats;
