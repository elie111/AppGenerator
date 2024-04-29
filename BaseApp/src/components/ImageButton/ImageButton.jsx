import { useEffect, useState } from "react";
import { getData } from '../../Firebase/fireStoreService';
import { useButton } from '../../AppContexts/ButtonContext';
import ImageButtonParams from './ImageButtonParams';

function ImageButton({ params, className, layoutFireBase }) {
    const [imageSource, setimageSource] = useState("loading ...");
    const [isLoading, setIsLoading] = useState(false);
    const imageButtonParams = new ImageButtonParams(params["id"], params["targetId"], params["action"], params["actionInfo"], params["source"], params["value"])
    const { triggerButton } = useButton();

    useEffect(() => {
        if (imageButtonParams.source === "none") {
            setimageSource(imageButtonParams.value);
        } else if (imageButtonParams.source === "firebase") {
            // If source is 'firebase', fetch data from Firebase
            var collection = layoutFireBase.collection
            var document = layoutFireBase.collection
            var field = imageButtonParams.value
            if (document === "userId") {
                document = "2pXmQQzAjrf83OREczSzDB8lZQA3"
            }
            setIsLoading(true);
            getData(collection, document).then(data => {
                setimageSource(data[field]);
                setIsLoading(false);
            }).catch(error => {
                setimageSource("Failed to load data"); // Set error message or handle error appropriately
                setIsLoading(false);
            });
        }
    }, [params]); // Depend on params to re-run effect when params change
    return (
        <img className={className} onClick={() => triggerButton(imageButtonParams.targetId, imageButtonParams.action, imageButtonParams.actionInfo)} src={isLoading ? "spongy.jpg." : imageSource} />
    );
}

export default ImageButton;
