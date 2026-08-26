import { useState } from "react";

function ProfileForm() {
    const [user, setUser] = useState({

        userName: "",
        email: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <div>
            <input name="userName"
                value={user.userName}
                placeholder="Enter your name"
                onChange={handleChange}

            /><br />
            <input name="email"
                value={user.email}
                placeholder="Enter your email"
                onChange={handleChange}
            /><br />
            <input name="age"
                value={user.age}
                placeholder="How old are you?"
                onChange={handleChange}
            />

            <div>
                <h2>{user.userName && ` User Name: ${user.userName}`}</h2>
                <h2>{user.email && `Email: ${user.email}`}</h2>
                <h2>{user.age && ` Age: ${user.age}`}</h2>
            </div>
        </div>
    );
}
export default ProfileForm;