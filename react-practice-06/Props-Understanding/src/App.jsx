import { useState } from 'react'
import './App.css'
import UserCard from './UserCard'


function App() {
  
  // function user(name="John Doe", age=20) {
  //   return `My name is ${name} and I am ${age} years old.`
  // }

  return (
    <>
      <UserCard name= "Raushan Bhai Patel" age= "20" />
      <UserCard name= "Adrina Patel" age= "24" />
      <UserCard name= "Archi Kumari" age= "21" />
      <UserCard name= "Sonu Kumar" age= "20" />
      
      


      {/* <h1>Raushan Bhai Patel</h1>
      <p>{user("Raushan Bhai Patel", 20)}</p>
      <p>{user("Adrina Patel", 24)}</p>
      <p>{user()}</p> */}

    </>
  )
}

export default App
