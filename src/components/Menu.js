import React from 'react';
import './Menu.css';

function Menu({ menuEntry, onSelect }) {
    return (
        <div className="menu">
            {Object.keys(menuEntry).map(key => (
                <button key={key} onClick={() => onSelect(key)}>
                    {key.toLocaleUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default Menu;
