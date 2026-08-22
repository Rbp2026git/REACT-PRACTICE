import User from './User';
import userData from './data';
import UserCard from './components/nested-props/UserCard';
import TopScores, {PlayerList} from "./components/array-props/TopScores";

function App() {


  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          age={user.age}
          email={user.email}
          city={user.city}
          state={user.state}
        />
      ))}

      <UserCard
        user={{ name: "Rahul Kumar", address: {city: "Pune", pincode: "411001"} }}
        theme = "dark"
      />
      <hr />

      <TopScores scores = {[95, 88, 76, 66]} />
      <hr />

      <PlayerList players = {["Virat", "Dhoni", "Bumrah", "Suman"]} />

    </>
  )
}

export default App
