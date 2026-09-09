import AuthGuard from "./components/AuthGuard";

function App() {

  return (
    <>
      <AuthGuard isLoggedIn={false} userName="" />
    </>
  )
}

export default App
