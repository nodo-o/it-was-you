import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={`${process.env.PUBLIC_URL}/iwy-logo.png`} alt="Logo" className="logo" />
            </div>
            <div className="title-container">
                <p>It was you</p>
            </div>
        </div>
    );
}

export default Header;
