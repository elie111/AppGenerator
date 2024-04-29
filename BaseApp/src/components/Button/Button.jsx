import { Children } from 'react';
import { useButton } from '../../AppContexts/ButtonContext';
import styles from './Button.module.css'
import ButtonParams from './ButtonParams';
import { getData } from '../../Firebase/fireStoreService';
import Text from '../Text/Text';

function Button({ className, params, layoutFireBase }) {
  const { triggerButton } = useButton();
  const text = "loading data..."
  const buttonParams = new ButtonParams(params["id"], params["targetId"], params["action"], params["actionInfo"], params["text"])
  return (
    <button className={` ${styles.buttonMain} ${className}`} onClick={() => triggerButton(buttonParams.targetId, buttonParams.action, buttonParams.actionInfo)}>
      <Text params={buttonParams.text} layoutFireBase={layoutFireBase}></Text>
    </button>
  );
}

export default Button;
