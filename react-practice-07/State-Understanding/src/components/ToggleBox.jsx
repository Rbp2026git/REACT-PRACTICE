import { useState } from "react";

function ToggleBox () {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick = {() => {
                // console.log(" previous value of isVisible = " + isVisible);
                return setIsVisible(!isVisible);
            }} >
                {isVisible? "Hide" : "Show"} Details
            </button>

            {isVisible && <p>yeh extra details hai jo toggle ho rahi hain.</p>}
            
        </div>
    );
}
export default ToggleBox;