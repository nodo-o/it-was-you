import React, { useState } from 'react';
import TabContent from "./TabContent";
import "./Tab.css"

function Tab({ players }) {
    const [openTabs, setOpenTabs] = useState([]);

    const toggleTab = (index) => {
        if (openTabs.includes(index)) {
            setOpenTabs(openTabs.filter(i => i !== index)); // Close the tab
        } else {
            setOpenTabs([...openTabs, index]); // Open the tab
        }
    };

    return (
        <div>
            {players.map((player, index) => (
                <div key={index} className="tab">
                    <button onClick={() => toggleTab(index)}>
                        {player.name}
                    </button>
                    {openTabs.includes(index) && (
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
