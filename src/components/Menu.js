import React from 'react';
import './Menu.css';

function Menu({ menuEntry, onSelect, selected }) {
    return (
        <div className="menu">
            {Object.keys(menuEntry).map(key => (
                <button
                    key={key}
                    onClick={() => onSelect(key)}
                    className={selected === key ? 'selected' : ''}
                >
                    {key.toLocaleLowerCase()}
                </button>
            ))}
        </div>
    );
}

export default Menu;
