import React from 'react';
import './Form.css';
import { useEffect } from 'react';
import { useButton } from '../Button/ButtonContext';

const Form = ({ params, switchPage }) => {
    const { fields } = params;
    const { buttonState } = useButton();

    useEffect(() => {
        if (buttonState.id === params["id"]) {
            switch (buttonState.action) {
                case 'cancel':
                    switchPage(buttonState.info);
                    break;
                case 'login':
                    switchPage(buttonState.info);
                    break;
                case 'signup':
                    switchPage(buttonState.info);
                    break;

            }
        }
    }, [buttonState]);

    const renderFields = () => {
        return Object.entries(fields).map(([fieldName, fieldProps]) => (
            <div key={fieldName} className="input-group">
                <label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/_/g, ' ')}</label>
                <input
                    id={fieldName}
                    type={fieldProps.type}
                    placeholder={fieldProps.placeholder}
                    name={fieldName}
                />
            </div>
        ));
    };

    return (
        <form className="dynamic-form">
            {renderFields()}
        </form>
    );
};

export default Form;
