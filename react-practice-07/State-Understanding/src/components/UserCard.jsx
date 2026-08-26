import { useEffect, useState } from "react";

function UserCard () {
    const [user, setUser] = useState(null);

    useEffect (() => {
        setTimeout(() => {
            setUser({name: "Rahul", age: 21 });
        }, 3000);
    }, []);

    if (user === null ) {
        return <p>Loading....</p>
    }

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
        </div>
    );
}
export default UserCard;