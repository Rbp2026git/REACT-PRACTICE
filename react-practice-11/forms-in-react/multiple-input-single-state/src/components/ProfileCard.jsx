import { useState } from 'react';

function ProfileCard() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: ''
    });

    function inputHandler(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleClear = () => {
        setFormData({
            username: '',
            email: '',
            age: ''
        });
    };

    return (
        <>
            <h1>Profile Card</h1>
            <p>This is a simple profile card component.</p>

            <div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={inputHandler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={inputHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age: </label>
                    <input
                        type="number"
                        placeholder="Enter your age"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={inputHandler}
                    />
                </div>

                <button onClick={handleClear}>Clear</button>
            </div>

            <div>
                <p>Username: {formData.username}</p>
                <p>Email: {formData.email}</p>
                <p>Age: {formData.age}</p>
            </div>
        </>
    );
}
export default ProfileCard;