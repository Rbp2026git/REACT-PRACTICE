import { useState } from "react";

function Number() {

    const [count, setCount] = useState(0);

    function increase() {
        console.log(count);
        return setCount(count + 1);
    }
    return (
        <>
            <div>
                <h2>Count = {count}</h2>
                <button onClick={increase}>Increase</button>
                {/* <button onClick = {() => setCount(count + 1)}>Increament</button> */}
            </div>
            <hr />
        </>
    );
}
export default Number;