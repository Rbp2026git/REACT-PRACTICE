import { useState } from "react"
import ItemList from "./components/ItemList";


function App() {
  // const [para, setPara] = useState("");
  
  // function handler () {
  //   setPara("User clicks button - React detects click");
  //   console.log("User clicks button - React detects click");
  // }

  // const [name, setName] = useState("");
  // const inputEvent = (e) => {
  //   setName(e.target.value)
  //   console.log(e.target.value); 
  // }
  // const greet = (user) => console.log(user);

  

  return (
    <>
      {/* <h3>{para? para : "Event handling is the process of responding to user actions by executing a function."}</h3>
      <button onClick = {handler}>Click Me</button> */}
      {/* <button onclick = "alert("Hello, Raushan")">JS click</button> */}
      {/* <br />
      <button onClick = {() => alert("Hello, Raushan !")}>Alert button</button>
      <hr />

      <input type = "text" value = {name} onChange = {inputEvent} placeholder = "Enter your name" />
      <h2>User Name: {name}</h2>
      <hr />

      <button onClick = {()=>{
        greet("Raushan Bhai Patel");
        alert("Hello, Raushan Bhai Patel !")
      }}>
        Double function
      </button> */}

      <ItemList />
    </>
  )
}

export default App