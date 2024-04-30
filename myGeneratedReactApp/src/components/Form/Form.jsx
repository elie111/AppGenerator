import React, { useState, useEffect } from 'react';
import { handleSignIn, handleSignUp } from '../../Firebase/firebaseAuthService';
import { useButton } from '../../AppContexts/ButtonContext';
import styles from './Form.module.css';
import { addData, getData, updateData } from '../../Firebase/fireStoreService';
import FormParams from './FormParams';
import { Actions } from './Actions';

const Form = ({ params, stateManagers, layoutFireBase }) => {
    const { fields } = params;
    const { buttonState } = useButton();
    const [description, setDescription] = useState("Loading description...");
    const formParams = new FormParams(params["id"], params["inputFields"])
    const [fieldValues, setFieldValues] = useState({});
    var x = "name"
    useEffect(() => {
        getData("Meetings", "IzfaoPDY4laNJcjyDMTw").then(result => {
            setDescription(result["description"] || "No description available");
        }).catch(error => {
            setDescription("Failed to load description");
            console.error("Error fetching data:", error);
        });
    }, []); // Empty dependency array to fetch data only once on mount
    function setInputsValues(value, target) {
        if (target === "authEmail") {
            stateManagers["emailState"][1](value);
        } else if (target === "authPassword") {
            stateManagers["passwordState"][1](value);
        } else {
            setFieldValues(prevValues => ({
                ...prevValues,
                [target]: value
            }));
        }
    }

    useEffect(() => {
        if (buttonState.id === formParams["id"]) {
            switch (buttonState.action) {
                case Actions.login:
                    handleSignIn(stateManagers["emailState"][0], stateManagers["passwordState"][0]).then(isSuccessful => {
                        if (isSuccessful) {
                            stateManagers["currentPageState"][1](buttonState.info)
                        }
                    })
                    break;
                case Actions.signup:
                    handleSignUp(stateManagers["emailState"][0], stateManagers["passwordState"][0]).then(isSuccessful => {
                        if (isSuccessful) {
                            stateManagers["currentPageState"][1](buttonState.info)
                        }
                    })
                    break;
                case Actions.updateData:
                    updateData(layoutFireBase.collection, layoutFireBase.document, fieldValues);
                    break;
                case Actions.addData:
                    addData(layoutFireBase.collection, null, fieldValues);
                    break;
                default:
                    break;

            }
        }
    }, [buttonState]);

    const renderFields = () => {
        return Object.entries(fields).map(([fieldName, fieldProps]) => (
            <div key={fieldName} className={styles.inputGroup}>
                <label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/_/g, ' ')} </label>
                <input
                    id={fieldName}
                    type={fieldProps.type}
                    placeholder={fieldProps.placeholder}
                    name={fieldName}
                    onChange={(e) => setInputsValues(e.target.value, fieldProps.value)}
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
