import WeatherCard from "./components/WeatherDisplay";

function App() {

  return (
    <>
      <WeatherCard temperature={9} city="New York" />
      <WeatherCard temperature={20} city="Delhi" />
      <WeatherCard temperature={30} city="Mumbai" />
      <WeatherCard temperature={42} city="Patna" />
    </>
  )
}

export default App
