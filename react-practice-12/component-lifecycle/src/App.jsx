import NormalVariable from "./components/NormalVariable";
import Demo from "./components/Example01";
import Example02 from "./components/Example02";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect()

  return (
    <>
      {/* <NormalVariable />
      <hr /> */}
      {/* <Demo /> */}

      {toggle && <Example02 />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  )
}

export default App
