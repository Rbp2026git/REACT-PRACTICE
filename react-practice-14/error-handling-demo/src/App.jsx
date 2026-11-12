import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  return (
    <>
      <h1>Error Handling Demo</h1>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      
      <hr />

      <UserList />
    </>
  );
}

export default App;
