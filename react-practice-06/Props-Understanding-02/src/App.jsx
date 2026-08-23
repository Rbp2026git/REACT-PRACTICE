import User from './User';
import userData from './data';
import UserCard from './components/nested-props/UserCard';
import TopScores, {PlayerList} from "./components/array-props/TopScores";
import Layout from './components/children-props/Layout';


function App() {


  return (
    <>
      {/* {userData.map((user, index) => (
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

      <PlayerList players = {["Virat", "Dhoni", "Bumrah", "Suman"]} /> */}

      <Layout>
        <h3>React</h3>
        <p>Learn React from scratch</p>
        <h2>Raushan Bhai Patel</h2>
      </Layout>
      <hr />

      <Layout>
        Adrina Patel
      </Layout>
      <Layout>
        <ul>
          <li>Virat</li>
          <li>Rohit</li>
          <li>Dhoni</li>
          <li>Suman</li>
        </ul>
        
      </Layout>

      <hr />
      <Layout>
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
      </Layout>


    </>
  )
}

export default App
