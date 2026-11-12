import Profile from "./components/Profile";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // const user = null;
  // const user = { name: 'Raushan Bhai Patel' };
  return (
    <>
      {/* <p>{user? user.name : "Priya Kumari"}</p> */}
      <ErrorBoundary>
        <Profile />
      </ErrorBoundary>
    </>
  );
}

export default App;
