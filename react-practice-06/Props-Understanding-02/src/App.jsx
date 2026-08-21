import User, {Profile, Button} from './User';

function App() {

  const Person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };

  function greetUser(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <>
      <User numbers= {[10, 20, 30]}/>
      <hr />
      <Profile person= {Person}/>
      <Button person= {Person} greetUser= {greetUser}/>
    </>
  )
}

export default App
