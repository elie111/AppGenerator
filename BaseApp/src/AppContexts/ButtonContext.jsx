import React, { createContext, useContext, useState } from 'react';

const ButtonContext = createContext(null);

export const ButtonProvider = ({ children }) => {
    const [buttonState, setButtonState] = useState({ id: null, action: '', info: '' });

    const triggerButton = (id, action, info) => {
        setButtonState({ id, action, info });
    };

    return (
        <ButtonContext.Provider value={{ buttonState, triggerButton }}>
            {children}
        </ButtonContext.Provider>
    );
};

export const useButton = () => useContext(ButtonContext);
