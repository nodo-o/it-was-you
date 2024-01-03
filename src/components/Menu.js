import React from 'react';
import './Menu.css';

function Menu({ onSelect }) {
    return (
        <div className="menu">
            <button onClick={() => onSelect('characters')}>Characters</button>
            <button onClick={() => onSelect('lore')}>Lore</button>
        </div>
    );
}

export default Menu;
