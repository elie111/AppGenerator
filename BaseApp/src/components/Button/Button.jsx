import { Children } from 'react';
import { useButton } from './ButtonContext';
import styles from './Button.module.css'
import ButtonParams from './ButtonParams';
import { getData } from '../../Firebase/fireStoreService';

function Button({ className, params }) {
  const [isLoading, setIsLoading] = useState(false);
  const { triggerButton } = useButton();
  const text = "loading data..."
  const buttonParams = new ButtonParams(params["targetId"], params["action", params["actionInfo"], params["data"]["source"], params["data"]["value"]])
  if (buttonParams.source === "hardcoded") {
    text = buttonParams.value;
  }
  else {
    setIsLoading(true)
    getData(buttonParams.value, '').then(data => {
      text = data;
      setIsLoading(false)
    })
  }
  return (
    <button className={` ${buttonMain} ${className}`} onClick={() => triggerButton(buttonParams.targetId, buttonParams.action, buttonParams.actionInfo)}>
      {text}
    </button>
  );
}

export default Button;
