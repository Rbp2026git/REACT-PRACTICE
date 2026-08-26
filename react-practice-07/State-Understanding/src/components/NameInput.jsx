import {useState} from "react";

function NameInput () {
    const [name, setName] = useState("");

    const userName = (e) => {
        return setName(e.target.value);
    }

    return (
        <div>
            <h2>Hello, {name || "Stranger"}!</h2>
            <input 
            type= "text" 
            value = {name} 
            onChange = {userName}
            placeholder="Enter Your Name"
            />
        </div>
    );
}
export default NameInput;