// AppWrapper.js
import React from 'react';
import App from './App';
import { ButtonProvider } from '../AppContexts/ButtonContext';
import { RefreshProvider } from '../AppContexts/RefreshContext';

function AppWrapper() {
    return (
        <RefreshProvider>
            <ButtonProvider>
                <App />
            </ButtonProvider>
        </RefreshProvider>

    );
}

export default AppWrapper;
