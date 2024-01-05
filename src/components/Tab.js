import React, { useState } from 'react';
import './Tab.css';
import TabContent from "./TabContent";

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
                        <TabContent player={{
                            name: player.name,
                            role: player.role,
                            details: player.details,
                            photo: player.photo
                        }} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Tab;
