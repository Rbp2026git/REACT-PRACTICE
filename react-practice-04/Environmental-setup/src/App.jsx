import { useState } from 'react'

function App() {

  const [userName, setUserName] = useState('Adrina Patel');
  const [count, setCount] = useState(0);

  function sum (a, b) {
    return a + b;
  }
   const isLogIn = "true";

  return (
    <>
      <h2 style= {{color: 'blue', backgroundColor: 'lightgray'}} className="form-label">Name : Hello, {userName}!</h2>

      <input type ="text"
        placeholder="Inter your name" 
        onChange = {
        (e)=> setUserName(e.target.value)
      }/>

      <h2 style= {{color: 'green'}}>Your number : {count}</h2>
      <button onClick = {
        function (){
          setCount(count + 1);
          // console.log(count + 1);
        }
      }>
        Increase
      </button>

      <h3 style = {{color: 'red'}}>Calculate: {sum(20, 30)}</h3>
      <h3>Output: {isLogIn? "Welcome!" : "Logout" }</h3>

      <p>Result: {"false"}</p>

    </>
  )
}

export default App
