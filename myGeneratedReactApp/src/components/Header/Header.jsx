import React from 'react';
import ImageButton from '../ImageButton/ImageButton';
import './Header.css';
import Button from '../Button/Button';

function Header({ params, className }) {
    const combinedClassName = `header-main ${className}`;
    var title = '';
    // if (params["title"]["source"] === "hardCoded") {
    //     title = params["title"]
    // }

    // Dynamically create buttons from the params.buttons object
    const buttons = params.buttons ? Object.entries(params.buttons).map(([key, button]) => (
        <Button key={key} className='left-buttons' params={button}>
            {key}
        </Button>
    )) : null;

    return (
        <div className={combinedClassName}>
            <div className='left-buttons-container'>
                {buttons}
            </div>
            <span className='header-name'>{title}</span>
            <ImageButton className='profile-picture' params={params}></ImageButton>
        </div>
    );
}

export default Header;
