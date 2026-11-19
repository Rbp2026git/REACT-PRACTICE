import QuoteWidget from "./components/QuoteWidget";
import ErrorBoundary from "./components/ErrorBoundary";
import WeatherWidget, {CITIES} from "./components/WeatherWidget";
import BombWidget from "./components/BombWidget";
import UserListWidget from "./components/UserListWidget";
import "./App.css";
import { useState } from "react";

function Card({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const [city, setCity] = useState("Patna");
  return (
    <ErrorBoundary
      name="App"
      fallback={({ reset }) => (
        <div>
          <p>The dashboard has crashed!</p>
          <button onClick={reset}>Reload dashboard</button>
        </div>
      )}
    >
      <main>
        <h1>Crash-Proof Dashboard</h1>

        <div className="grid">
          <Card title="Quote">
            <ErrorBoundary>
              <QuoteWidget />
            </ErrorBoundary>
          </Card>
          <hr />
          <Card title= "wether">
            <label>
              City{" "}
              <select 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
              >
                {Object.keys(CITIES).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <ErrorBoundary
            name= "Wether"
            resetKeys= {[city]}
            fallback={({error, reset, canRetry}) => (
              <div>
                <p>Weather failed</p>
                <p>{error.message}</p>
                {canRetry && <button onClick={reset}>Retry</button>}
              </div>
            )}
            >
              <WeatherWidget city={city} />
            </ErrorBoundary>
          </Card>
          <hr />
          <Card title="Users">
            <ErrorBoundary name="Users">
              <UserListWidget />
            </ErrorBoundary>
          </Card>
          <hr />
          <card title="Bomb">
            <ErrorBoundary name="Bomb">
              <BombWidget />
            </ErrorBoundary>
          </card>
        </div>
      </main>
    </ErrorBoundary>
  );
}

export default App;
