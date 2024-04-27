import React, { useEffect } from 'react';
import { handleSignIn, handleSignUp } from '../../Firebase/firebase-service';
import { useButton } from '../Button/ButtonContext';
import './Form.css';

const Form = ({ params, stateManagers }) => {
    const { fields } = params;
    const { buttonState } = useButton();

    function setCredentialsType(value, type) {
        if (type === "text") {
            stateManagers["emailState"][1](value)
        }
        if (type === "password") {
            stateManagers["passwordState"][1](value)
        }
    }

    useEffect(() => {
        if (buttonState.id === params["id"]) {
            switch (buttonState.action) {
                case 'cancel':
                    stateManagers["currentPageState"][1](buttonState.info);
                    break;
                case 'login':
                    handleSignIn(stateManagers["emailState"][0], stateManagers["passwordState"][0]).then(isSuccessful => {
                        if (isSuccessful) {
                            stateManagers["currentPageState"][1](buttonState.info)
                        }
                    })
                    break;
                case 'signup':
                    handleSignUp(stateManagers["emailState"][0], stateManagers["passwordState"][0]).then(isSuccessful => {
                        if (isSuccessful) {
                            stateManagers["currentPageState"][1](buttonState.info)
                        }
                    })
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
                    onChange={(e) => setCredentialsType(e.target.value, fieldProps.type)}
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
