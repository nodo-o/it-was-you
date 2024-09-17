import React from 'react';
import './TextContent.css';
import './StoryComponent.css';
import {STORY} from '../assets/story_content';

function StoryComponent() {
    return (
        <div className="text-content">
            <div className="title-block">
                <h1>{STORY.title}</h1>
            </div>
            <div className="summary-block" dangerouslySetInnerHTML={{__html: STORY.intro}}></div>
            <div className="buttons-block">
                {STORY.buttons.map((buttonText, index) => (
                    <button key={index}>{buttonText}</button>
                ))}
            </div>
            <a href={STORY.url} target="_blank" className="ao3-link">
                <img src={`${process.env.PUBLIC_URL}${"/ao3.svg"}`} alt="AO3" className="ao3-icon"/>
                <span><em>Read it on AO3!</em></span>
            </a>
            <a href={STORY.nume_url} target="_blank">
                <img src={`${process.env.PUBLIC_URL}${"/nume-art.jpg"}`} alt="Story" className="full-width-image"/>
                <p className="nume-link">art by @nume_x</p>
            </a>
        </div>
    )
        ;
}

export default StoryComponent;