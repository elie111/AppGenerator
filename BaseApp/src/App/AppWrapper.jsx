// AppWrapper.js
import React from 'react';
import App from './App';
import { ButtonProvider } from '../components/Button/ButtonContext';

function AppWrapper() {
  return (
    <ButtonProvider>
      <App />
    </ButtonProvider>
  );
}

export default AppWrapper;
