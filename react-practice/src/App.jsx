import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Container from './Boxes.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return ( 
    <>
      <h1>UserName : {name}</h1>
      <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <Container />
      <div>{profile("Adrina Patel", 24)}</div>
    </>
  )
}

function profile(name, age){
  console.log(`My name is ${name} and ${age} years old.`);
  return `My name is ${name} and ${age} years old.`;
}

export default App
