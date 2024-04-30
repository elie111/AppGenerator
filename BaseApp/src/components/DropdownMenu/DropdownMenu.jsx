import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useButton } from '../../AppContexts/ButtonContext';
import styles from './DropdownMenu.module.css';
import DropDownMenuParams from './DropDownnMenuParams';
import { Actions } from './Actions';

const DropdownMenu = ({ params, className, layoutFireBase }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonState } = useButton();

    const toggleDropdown = () => setIsOpen(prevIsOpen => !prevIsOpen);
    const dropDownMenuParams = new DropDownMenuParams(params["id"], params["buttons"])

    useEffect(() => {
        if (buttonState.id === dropDownMenuParams.id && buttonState.action === Actions.toggle) {
            toggleDropdown();
        }
    }, [buttonState]);

    const menuItems = Object.entries(dropDownMenuParams.buttons).map(([buttonKey, buttonDetails]) => (
        <li key={buttonKey}>
            <Button params={buttonDetails} layoutFireBase={layoutFireBase}></Button>
        </li>
    ));

    return (
        <div className={`${styles.dropdown} ${className || ''}`}>
            {isOpen && (
                <ul className={styles.dropdownContent}>
                    {menuItems}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
