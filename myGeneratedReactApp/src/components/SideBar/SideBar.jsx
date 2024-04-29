import React, { useState, useEffect } from 'react';
import styles from './SideBar.module.css';
import Button from '../Button/Button';
import { useButton } from '../../AppContexts/ButtonContext';
import SideBarParams from './SideBarParams';
import Image from '../Image/Image';
import Text from '../Text/Text';

const SideBar = ({ params, layoutFireBase }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { buttonState } = useButton();
    const toggleSidebar = () => setIsOpen(!isOpen);
    const sideBarParams = new SideBarParams(params["id"], params["title"], params["image"], params["buttons"])
    console.log("sidebar", sideBarParams.image)

    useEffect(() => {
        if (buttonState.id === "sidebar1") {
            setIsOpen(previousState => !previousState);
        }
    }, [buttonState]);

    const renderButtons = () => {
        return Object.entries(params.buttons).map(([key, button]) => {
            const spaces = [];
            console.log("sidebar", button)
            for (let i = 0; i < button.newSectionSpace; i++) {
                spaces.push(<div key={i} className={styles.singleSpace}></div>);
            }

            return (
                <React.Fragment key={key}>
                    <Button className="sidebarButton" params={button} layoutFireBase={layoutFireBase}>
                        {key}
                    </Button>
                    {spaces}
                </React.Fragment>
            );
        });
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.sidebarHeader}>
                <div className={styles.headerRow1}>
                    <button className={styles.closeButtonSidebar} onClick={toggleSidebar}>
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                    <Image className={styles.sidebarLogo} params={sideBarParams.image} layoutFireBase={layoutFireBase} />
                </div>
                <Text tag="h1" params={sideBarParams.title} layoutFireBase={layoutFireBase}></Text>
            </div>
            <div className={styles.buttonsContainer}>
                {renderButtons()}
            </div>
        </div>
    );
};

export default SideBar;
