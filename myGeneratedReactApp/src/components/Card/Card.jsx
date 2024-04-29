import React, { useState } from 'react';
import styles from './Card.module.css';
import ImageButton from '../ImageButton/ImageButton';
import CardParams from './CardParams';
import Image from '../Image/Image';
import Text from '../Text/Text';

const Card = ({ params, className, layoutFireBase }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardParams = new CardParams(params["id"], params["cardId"], params["image"], params["shortDescription"], params["longDescription"]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setIsExpanded(false);
        }
    };

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link);
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
                    <Image params={cardParams.image} layoutFireBase={layoutFireBase} className="profilePic" />
                    <Text tag="h2" params={cardParams.cardId} layoutFireBase={layoutFireBase}></Text>
                </div>
                <div className={styles.cardInfo}>
                    <Text tag="p" params={cardParams.shortDescription} layoutFireBase={layoutFireBase}></Text>
                </div>
                {/* <div className={styles.zoomLinkContainer} onClick={() => copyToClipboard(params["info"]["zoomLink"])}>
                    <span>{params["info"]["zoomLink"]}</span>
                    <img src="icons8-copy-24.png" alt="Copy" className={styles.copyIcon} />
                </div> */}
                {isExpanded && (<>
                    <div className={styles.cardExpandedContent}>
                        <Text tag="p" params={cardParams.longDescription} layoutFireBase={layoutFireBase}></Text>
                        <button className={styles.closeButton} onClick={handleClose}>X</button>
                    </div>
                </>)}
            </div>
        </div>
    );
};

export default Card;
