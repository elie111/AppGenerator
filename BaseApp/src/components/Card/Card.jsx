import React, { useState } from 'react';
import styles from './Card.module.css';
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
            {isExpanded && <div className={styles.backgroundBlur} onClick={handleClose}></div>}

            <div
                className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${className}`}
                onClick={isExpanded ? undefined : toggleExpand}
                onKeyDown={handleKeyDown}
                tabIndex="0" // Make it focusable to detect keyboard events
            >
                <div className={styles.cardHeader}>
                    <ImageButton params={params} alt="Profile" className="profilePic" />
                    <h2>{params["info"]["name"]}</h2>
                </div>
                <div className={styles.cardInfo}>
                    <p>{params["info"]["time"]}</p>
                    <p>{params["info"]["location"]}</p>
                </div>
                <div className={styles.zoomLinkContainer} onClick={() => copyToClipboard(params["info"]["zoomLink"])}>
                    <span>Join Zoom Meeting</span>
                    <img src="icons8-copy-24.png" alt="Copy" className={styles.copyIcon}/>
                </div>
                {isExpanded && (<>
                    <div className={styles.cardExpandedContent}>
                        <p>{params["info"]["description"]}</p>
                        <button className={styles.closeButton} onClick={handleClose}>X</button>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default Card;
