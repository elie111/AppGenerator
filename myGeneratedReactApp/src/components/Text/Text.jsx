import { useEffect, useState } from "react";
import { getData } from "../../Firebase/fireStoreService";
import TextParams from "./TextParams";

function Text({ className, params, layoutFireBase }) {
    const [text, setText] = useState("loading ..."); // Initial text state
    const [isLoading, setIsLoading] = useState(false);
    const textParams = new TextParams(params["source"], params["value"]);
    console.log("helper",layoutFireBase, className)

    useEffect(() => {
        if (textParams.source === "none") {
            // If source is 'none', directly use the provided value
            setText(textParams.value);
        } else if (textParams.source === "firebase") {
            // If source is 'firebase', fetch data from Firebase

            var collection = layoutFireBase.collection
            var document = layoutFireBase.document
            var field = textParams.value
            if (document === "userId") {
                document = "2pXmQQzAjrf83OREczSzDB8lZQA3"
            }
            setIsLoading(true);
            getData(collection, document).then(data => {
                setText(data[field]);
                setIsLoading(false);
            }).catch(error => {
                setText("Failed to load data"); // Set error message or handle error appropriately
                setIsLoading(false);
            });
        }
    }, [params]); // Depend on params to re-run effect when params change

    return (
        <div className={className}>
            {isLoading ? "Loading..." : text}
        </div>
    );
}

export default Text;
