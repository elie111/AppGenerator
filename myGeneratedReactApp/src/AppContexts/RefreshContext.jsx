import React, { createContext, useContext, useState } from 'react';
const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
    const [updated, setUpdated] = useState(false);

    const triggerRefresh = () => {
        setUpdated(!updated); // Toggle to force refresh
    };

    return (
        <RefreshContext.Provider value={{ triggerRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
};

export const useRefresh = () => useContext(RefreshContext);

