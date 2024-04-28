import { Children } from 'react';
import { useButton } from './ButtonContext';
import styles from './Button.module.css'

function Button({ className, children, params }) {
  const { triggerButton } = useButton();
  const text = params["text"] ?? children
  return (
    <button className={className} onClick={() => triggerButton(params["targetId"], params["action"], params["actionInfo"])}>
      {text}
    </button>
  );
}

export default Button;
