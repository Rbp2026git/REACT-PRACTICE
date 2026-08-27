import { useState } from "react";

function DirectMutation () {
    const [count, setCount] = useState(0);

    // const increase = () =>{
    //     count = count + 1;
    //     console.log(count);
    // }
    const increase = () => {
        console.log(count);
        return setCount(count + 1);
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick = {increase}>Increase</button>
        </div>
    );
}
export default DirectMutation;