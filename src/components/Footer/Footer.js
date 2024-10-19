import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from'@fortawesome/free-brands-svg-icons'
import { faTwitter } from'@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <footer className="footer">
            <p>coded by nodo</p>
            <div className="social-links">
                <a href="https://github.com/nodo-o" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a href="https://twitter.com/moochi_i" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://archiveofourown.org/users/nodo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBook} />
                </a>
                <a href="https://ko-fi.com/nodoo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCoffee} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
