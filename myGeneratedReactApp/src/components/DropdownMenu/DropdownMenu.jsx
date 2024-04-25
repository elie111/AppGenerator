import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useButton } from '../Button/ButtonContext';
import './DropdownMenu.css';

const DropdownMenu = ({ params, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonState } = useButton();

    const toggleDropdown = () => setIsOpen(prevIsOpen => !prevIsOpen);

    useEffect(() => {
        if (buttonState.id === "dropdown1" && buttonState.action === "toggle") {
            toggleDropdown();
        }
    }, [buttonState]);

    const menuItems = params && params.buttons ? Object.entries(params.buttons).map(([buttonKey, buttonDetails]) => (
        <li key={buttonKey}>
            <Button params={buttonDetails}>
                {buttonKey.charAt(0).toUpperCase() + buttonKey.slice(1)} {/* Capitalize the button text */}
            </Button>
        </li>
    )) : null;

    return (
        <div className={`dropdown ${className || ''}`}>
            {isOpen && (
                <ul className="dropdown-content">
                    {menuItems}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
