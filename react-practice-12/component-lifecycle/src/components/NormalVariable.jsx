import { useState, useRef } from 'react';

function NormalVariable () {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleCounter = () => {
        setCount(count + 1);
        countRef.current += 1;
        console.log(countRef.current);
    };

    // console.log("Component rerender");

    // let count = 0;
    // const handleCounter = () => {
    //     count ++;
    //     console.log(count);
    // };

    return (
        <div>
            <p><strong>State Count: </strong>{count}</p>
            <p><strong>Ref Count: </strong>{countRef.current}</p>
            <button onClick={handleCounter}>Increament</button>
        </div>
    );
}
export default NormalVariable;