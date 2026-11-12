import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [badUrl, setBadUrl] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function loadUsers() {
      setLoading(true);
      setError(null);
      try {
        const url = badUrl
          ? "https://jsonplaceholder.typicode.com/wrong-endpoint"
          : "https://jsonplaceholder.typicode.com/users";

        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setUsers(await response.json());
      } catch (err) {
        if (err.name !== "AbortError") return;
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();

    return () => controller.abort();
  }, [attempt, badUrl]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <h3>Could not load users</h3>
        <p>{error}</p>
        <button onClick={() => setAttempt((attempt) => attempt + 1)}>
          Retry
        </button>
      </div>
    );
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <button onClick={() => setBadUrl((badUrl) => !badUrl)}>
        Toggle URL(Simulate API failure)
      </button>
    </div>
  );
}
export default UserList;
