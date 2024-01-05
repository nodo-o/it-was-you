import React, { useState } from 'react';
import './Tab.css';

function Tab({ players }) {
    const [openTab, setOpenTab] = useState(null);

    const toggleTab = (index) => {
        setOpenTab(openTab === index ? null : index);
    };

    return (
        <div>
            {players.map((player, index) => (
                <div key={index} className="tab">
                    <button onClick={() => toggleTab(index)}>
                        {player.name}
                    </button>
                    {openTab === index && (
                        <div className="tab-content">{player.position}</div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Tab;
