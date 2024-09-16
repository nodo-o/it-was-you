import React, { useState } from 'react';
import './TextContent.css';
import './TriviaComponent.css';

function TriviaComponent() {
    const [activeTopic, setActiveTopic] = useState(null);

    const topics = [
        { id: 1, title: "Tokyo Big6 Baseball League", content: "Details about Topic 1" },
        { id: 2, title: "Topic 2", content: "Details about Topic 2" },
        { id: 3, title: "Topic 3", content: "Details about Topic 3" }
    ];

    const toggleTopic = (id) => {
        setActiveTopic(activeTopic === id ? null : id);
    };

    return (
        <div className="text-content">
            {/* Mobile Accordion Layout */}
            <div className="accordion mobile">
                {topics.map(topic => (
                    <div key={topic.id} className="topic">
                        <div className="topic-title" onClick={() => toggleTopic(topic.id)}>
                            {topic.title}
                        </div>
                        {activeTopic === topic.id && (
                            <div className="topic-content">{topic.content}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Web Two-Column Layout */}
            <div className="two-column web">
                <div className="topic-list">
                    {topics.map(topic => (
                        <div key={topic.id} className="topic-title" onClick={() => toggleTopic(topic.id)}>
                            {topic.title}
                        </div>
                    ))}
                </div>
                <div className="topic-detail">
                    {activeTopic && (
                        <div className="topic-content">
                            {topics.find(topic => topic.id === activeTopic)?.content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TriviaComponent;

