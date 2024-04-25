import { useButton } from '../Button/ButtonContext'

function ImageButton({ params, className }) {
    const { triggerButton } = useButton();
    return (
        <img className={className} onClick={() => triggerButton(params["targetId"], params["action"], params["actionInfo"])} src={params.source} />
    );
}

export default ImageButton;
