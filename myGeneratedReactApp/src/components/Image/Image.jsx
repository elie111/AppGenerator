import { useEffect, useState } from "react";
import { getData } from '../../Firebase/fireStoreService';
import ImageParams from "./ImageParams";

function Image({ params, className, layoutFireBase }) {
    const [imageSource, setimageSource] = useState("loading ...");
    const [isLoading, setIsLoading] = useState(false);
    const imageParams = new ImageParams(params["source"], params["value"])

    useEffect(() => {
        if (imageParams.source === "none") {
            setimageSource(imageParams.value);
        } else if (imageParams.source === "firebase") {
            // If source is 'firebase', fetch data from Firebase
            var collection = layoutFireBase.collection
            var document = layoutFireBase.document
            var field = imageParams.value
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
        <img className={className} src={isLoading ? "spongy.jpg" : imageSource} />
    );
}

export default Image;
