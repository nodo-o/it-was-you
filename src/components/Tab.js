import React, { useState } from 'react';
import './Tab.css';

function Tab({players}) {
    const [isOpen, setIsOpen] = useState(false);

    console.log(players)

    return (
        <div className="tab">
            <button onClick={() => setIsOpen(!isOpen)}>
                {players[0].name}
            </button>
            {isOpen && <div className="tab-content">{players[0].position}</div>}
        </div>
    );
}

export default Tab;
