import { useState } from "react";

function BuggyCounter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  if (count === 5) throw new Error("Counter crashed at 5!");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increase (crashes at 5 )</button>
    </div>
  );
}
export default BuggyCounter;
