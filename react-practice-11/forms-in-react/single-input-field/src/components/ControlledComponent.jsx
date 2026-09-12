import { useState } from "react";

function ControlledComponent() {
    const [name, setName] = useState("");

    return (
        <>
            <div>
                <h1>Hello, World!</h1>
                <h2>Username : {name}</h2>
                <br />

                <span>Username: </span>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                        console.log(e.target.value);
                        return setName(e.target.value);
                    }}
                />
                <br />

                <button
                    onClick={() => setName('')}
                >
                    Clear
                </button>
            </div>
            <hr />
        </>
    )
}
export default ControlledComponent;