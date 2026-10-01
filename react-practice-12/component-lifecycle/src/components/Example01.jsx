import { useState, useRef } from "react";

function Demo() {
  let normal = 0;

  const [state, setState] = useState(0);
  const ref = useRef(0);

  function handleClick() {
    normal++;
    setState(state + 1);
    ref.current++;

    console.log("Normal:", normal);
    console.log("State:", state);
    console.log("Ref:", ref.current);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click
      </button>

      <p>Normal: {normal}</p>
      <p>State: {state}</p>
      <p>Ref: {ref.current}</p>
    </div>
  );
}
export default Demo;