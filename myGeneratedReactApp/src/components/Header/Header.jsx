import React from 'react';
import ImageButton from '../ImageButton/ImageButton';
import styles from './Header.module.css';
import Button from '../Button/Button';

function Header({ params, className }) {
    const combinedClassName = `${styles.headerMain} ${className}`;
    var title = '';
    // if (params["title"]["source"] === "hardCoded") {
    //     title = params["title"]
    // }

    // Dynamically create buttons from the params.buttons object
    const buttons = params.buttons ? Object.entries(params.buttons).map(([key, button]) => (
        <Button key={key} className="leftButtons" params={button}>
            {key}
        </Button>
    )) : null;

    return (
        <div className={combinedClassName}>
            <div className={styles.leftButtonsContainer}>
                {buttons}
            </div>
            <span className={styles.headerName}>{title}</span>
            <ImageButton className="profilePicture" params={params}></ImageButton>
        </div>
    );
}

export default Header;
