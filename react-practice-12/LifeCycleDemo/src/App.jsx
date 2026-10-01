import Timer from './components/Timer';
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [logs, setLogs] = useState(["nothing yet..."]);

  const log = (msg) => setLogs((prev) => [msg, ...prev]);
  useEffect(() => {
    console.log("App mounted...");
  }, []);
  // useEffect(()=> {
  //   console.log("No dependency...");
  // });

  return (
    <div>
      <button 
      className='rounded bg-indigo-600 px-4 py-2 text-white'
      onClick={() => setShow(!show)}
      >
        {show ? "Timer hatao(Unmount)" : "Timer dikhao(Mount)"}
      </button>

      {show && <Timer log={log} />}

      <ul className='mt-4 space-y-2 bg-gray-100 p-4 rounded'>
        {logs.map((l, i) => (
          <li key={logs.length - i}>{l}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
