import React, { useState } from 'react';
import './Card.css';
import ImageButton from '../ImageButton/ImageButton';

const Card = ({ params, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsExpanded(false);
        }
    };

    const copyToClipboard = (link) => {
        console.log("copiesd")
        navigator.clipboard.writeText(link)
            .then(() => alert('Zoom link copied to clipboard!'))
            .catch(err => console.error('Failed to copy text: ', err));
    };

    const handleClose = (event) => {
        event.stopPropagation(); // Prevent click from bubbling to card
        setIsExpanded(false);
    };

    return (
        <div>
            {isExpanded && <div className="background-blur" onClick={handleClose}></div>}

            <div
                className={`card ${isExpanded ? 'expanded' : ''} ${className}`}
                onClick={isExpanded ? undefined : toggleExpand}
                onKeyDown={handleKeyDown}
                tabIndex="0" // Make it focusable to detect keyboard events
            >
                <div className="card-header">
                    <ImageButton params={params} alt="Profile" className="profile-pic" />
                    <h2>{params["info"]["name"]}</h2>
                </div>
                <div className="card-info">
                    <p>{params["info"]["time"]}</p>
                    <p>{params["info"]["location"]}</p>
                </div>
                <div className="zoom-link-container" onClick={() => copyToClipboard(params["info"]["zoomLink"])}>
                    <span>Join Zoom Meeting</span>
                    <img src="icons8-copy-24.png" alt="Copy" className="copy-icon"/>
                </div>
                {isExpanded && (<>
                    <div className="card-expanded-content">
                        <p>{params["info"]["description"]}</p>
                        <button className="close-button" onClick={handleClose}>X</button>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default Card;
