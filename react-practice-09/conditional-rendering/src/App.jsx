import { useState } from 'react'
import Facebook from './components/Facebook'

import './App.css'

function App() {
  const gender = "male";
  
  return (
    <>
      {/* {gender === "male" ? <h2>Raushan Bhai Patel</h2> : <h2>Adrina Patel</h2>}
      {gender === "male" && <h2>Raushan Bhai Patel</h2>}
      {gender !== "male" && <h2>Adrina Patel</h2>} */}

      <Facebook />
    </>
  )
}

export default App
