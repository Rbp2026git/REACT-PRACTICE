
function App() {

  const courses = ["html", "css", "javascript", "react", "nodejs"];

  return (
    <>                                                                                                                                                                                                                                                                             
      {courses.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </>
  )
}
export default App
