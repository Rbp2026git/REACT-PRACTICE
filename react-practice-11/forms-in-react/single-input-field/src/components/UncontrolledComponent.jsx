import { useRef, useState } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);
  const [username, setUsername] = useState('');

  function submit() {
    console.log(inputRef.current.value);
    // console.log(inputRef.current);
    setUsername(inputRef.current.value);
  }

  return (
    <>
      <div>
        <h1>Hello, {username}!</h1>
        <label>Username : </label>
        <input
          type="text"
          placeholder="Enter your name"
          ref={inputRef}
        />
      </div>

      <button
        onClick={submit}
      >
        Submit
      </button>
    </>
  )
}

export default UncontrolledComponent;