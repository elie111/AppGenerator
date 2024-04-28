import React, { useState, useEffect } from 'react';
import styles from './SideBar.module.css';
import Button from '../Button/Button';
import { useButton } from '../Button/ButtonContext';

const SideBar = ({ params }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonState } = useButton();
    const toggleSidebar = () => setIsOpen(!isOpen);
    var title = ''
    if (params["title"]["source"]) {
        title = params["title"]["value"]
    }

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
                        <Button key={key} className="sidebarButton" params={button}>
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
                    <div key={index} className={styles.menuSection}>
                        {filteredButtons}
                    </div>
                );
            }
            return null; // Render nothing if no buttons are available in the group
        });
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.sidebarHeader}>
                <div className={styles.headerRow1}>
                    <button className={styles.closeButtonSidebar} onClick={toggleSidebar}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <img className={styles.sidebarLogo} src={params.source} alt="Sidebar Header" />
                </div>
                <h1>{title}</h1>
            </div>
            {renderButtons()}
        </div>
    );
};

export default SideBar;
