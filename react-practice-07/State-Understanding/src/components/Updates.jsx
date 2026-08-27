import { useState } from "react";

function Updates () {
    const [count, setCount] = useState(0);

    const incrementBuggy = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    const incrementCorrect = () => {
        setCount((prev)=> prev + 1);
        setCount((prev)=> prev + 1);
        setCount((prev)=> prev + 1);
    }
    return(
        <div>
            <h2>Normal Update v/s Functional update</h2>
            <h3>Count: {count}</h3>
            <button onClick = {incrementBuggy}>IncrementBuggy</button>
            <button onClick = {incrementCorrect}>IncrementCorrect</button>
        </div>
    );
}
export default Updates;