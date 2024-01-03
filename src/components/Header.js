import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" className="logo" />
            </div>
            <div className="title-container">
                <h1>My React Page</h1>
            </div>
        </div>
    );
}

export default Header;
