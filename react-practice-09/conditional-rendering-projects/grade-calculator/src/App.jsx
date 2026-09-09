import GradeCard from "./components/GradeCard"


function App() {

  return (
    <>
      <GradeCard studentName="Alice" marks={95} />
      <GradeCard studentName="Bob" marks={85} />
      <GradeCard studentName="Charlie" marks={70} />
    </>
  )
}

export default App
