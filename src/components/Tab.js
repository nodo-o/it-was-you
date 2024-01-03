import React, { useState } from 'react';
import './Tab.css';

function Tab({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="tab">
            <button onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            {isOpen && <div className="tab-content">{content}</div>}
        </div>
    );
}

export default Tab;
