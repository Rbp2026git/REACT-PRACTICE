import {useState, useEffect} from "react";
import useThrowError from "../hooks/useThrowError";

function UserListWidget () {
    const [users, setUsers] = useState(null);
    const throwError = useThrowError();

    useEffect(() => {
        const controller = new AbortController();
        fetch("https://jsonplaceholder.typicode.com/users?_limit=4", { signal: controller.signal })
        .then((res) => {
            if(!res.ok) throw new Error(`User API returned ${res.status}`);
            return res.json();
        })
        .then(setUsers)
        .catch((err) => {
            if (err.name !== "AbortError") throwError(err);
        });

        return () => controller.abort();
    }, []);

    // Simulate a bad API response: one user loses its address field
    const corruptData = () => setUsers((prev) =>
    prev.map((u, i) => (i === 2 ? { ...u, address: undefined} : u)));

    if(!users) return <p>Loading users...</p>
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} <span>{user.address.city}</span>
                    </li>
                ))}
            </ul>
            <button onClick={corruptData}>
                Simulate bad data
            </button>
        </div>
    )
}
export default UserListWidget;