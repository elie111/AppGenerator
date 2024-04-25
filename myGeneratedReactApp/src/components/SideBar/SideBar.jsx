import React, { useState, useEffect } from 'react';
import './SideBar.css';
import Button from '../Button/Button';
import { useButton } from '../Button/ButtonContext';

const SideBar = ({ params }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonState } = useButton();
    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (buttonState.id === "sidebar1") {
            setIsOpen(previousState => !previousState);
        }
    }, [buttonState]);

    const renderButtons = () => {
        return params.buttons.map((buttonGroup, index) => {
            const buttons = Object.entries(buttonGroup).map(([key, button]) => {
                if (button.targetId) {
                    return (
                        <Button key={key} className='sidebar-button' params={button}>
                            {key}
                        </Button>
                    );
                }
                return null; // For empty objects in the array, no button is rendered.
            });

            // Filter null entries and check if there are any buttons to render
            const filteredButtons = buttons.filter(Boolean);
            if (filteredButtons.length > 0) {
                return (
                    <div key={index} className="menu-section">
                        {filteredButtons}
                    </div>
                );
            }
            return null; // Render nothing if no buttons are available in the group
        });
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <div className='header-row-1'>
                    <button className="close-button-sdidebar" onClick={toggleSidebar}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <img className="sidebar-logo" src={params.source} alt="Sidebar Header" />
                </div>
                <h1>{params.title}</h1>
            </div>
            {renderButtons()}
        </div>
    );
};

export default SideBar;
