import { useState } from "react";
import TextParams from "./TextParams";
import { getData } from "../../Firebase/fireStoreService";

function Text({ className, params }) {
    const [isLoading, setIsLoading] = useState(false);
    const textParams = new TextParams(params["data"]["source"], params["data"]["value"])
    var text = "loading ...";
    if (textParams.source === "hardcoded") {
        text = textParams.value;
    }
    else {
        setIsLoading(true)
        getData(textParams.value, "").then(data => {
            text = data;
            setIsLoading(false)
        })
    }

    return (
        <div className={className}>
            {text}
        </div>
    );
}

export default Text;
