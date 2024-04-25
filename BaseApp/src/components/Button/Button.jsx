import { useButton } from './ButtonContext';

function Button({ className, children, params }) {
  const { triggerButton } = useButton();
  return (
    <button className={className} onClick={() => triggerButton(params["targetId"], params["action"], params["actionInfo"])}>
      {children}
    </button>
  );
}

export default Button;
