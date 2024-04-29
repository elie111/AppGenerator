import React from 'react';
import ImageButton from '../ImageButton/ImageButton';
import styles from './Header.module.css';
import Button from '../Button/Button';
import HeaderParams from './HeaderParams';
import Text from '../Text/Text';

function Header({ params, className, layoutFireBase }) {
    const combinedClassName = `${styles.headerMain} ${className}`;
    const headerParams = new HeaderParams(params["id"], params["buttons"], params["title"], params["profileImage"])

    // Dynamically create buttons from the params.buttons object
    const buttons = Object.entries(headerParams.buttons).map(([key, button]) => (
        <Button key={key} className="leftButtons" params={button} layoutFireBase={layoutFireBase}></Button>
    ));

    return (
        <div className={combinedClassName}>
            <div className={styles.leftButtonsContainer}>
                {buttons}
            </div>
            <Text tag="span" params={headerParams.title} layoutFireBase={layoutFireBase}></Text>
            <ImageButton className="profilePicture" params={headerParams.profileImage} layoutFireBase={layoutFireBase}></ImageButton>
        </div>
    );
}

export default Header;
