import React, { useState, useEffect } from 'react';
import { handleSignIn, handleSignUp } from '../../Firebase/firebaseAuthService';
import { useButton } from '../../AppContexts/ButtonContext';
import styles from './Form.module.css';
import { getData } from '../../Firebase/fireStoreService';
import FormParams from './FormParams';

const Form = ({ params, stateManagers, layoutFireBase }) => {
    const { fields } = params;
    const { buttonState } = useButton();
    const [description, setDescription] = useState("Loading description...");
    const formParams = new FormParams(params["id"], params ["inputFields"])
    var x = "name"
    useEffect(() => {
        getData("Meetings", "IzfaoPDY4laNJcjyDMTw").then(result => {
            setDescription(result["description"] || "No description available");
        }).catch(error => {
            setDescription("Failed to load description");
            console.error("Error fetching data:", error);
        });
    }, []); // Empty dependency array to fetch data only once on mount
    function setCredentialsType(value, type) {
        if (type === "text") {
            stateManagers["emailState"][1](value)
        }
        if (type === "password") {
            stateManagers["passwordState"][1](value)
        }
    }

    useEffect(() => {
        if (buttonState.id === formParams["id"]) {
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
            <div key={fieldName} className={styles.inputGroup}>
                {description}
                <label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/_/g, ' ')} </label>
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
        <form className={styles.dynamicForm}>
            {renderFields()}
        </form>
    );
};

export default Form;
