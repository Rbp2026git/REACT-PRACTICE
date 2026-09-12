import { useState } from 'react';

function ProfileCard () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleClear = () => {
        setUsername('');
        setEmail('');
        setAge('');
    };



    // ----- Ye example hai formData ke sath object ke andar values ko update karne ka. -----
    // const person = {
    //     name: 'John Doe',
    //     marks: 85,
    // };
    // console.log(person.name = "Raushan");
    // console.log(person);
    // const handleUsernameChange = (e) => {
    //     setFormData({ ...formData, username: e.target.value });
    //     // setFormData((prevFormData) => {
    //     //     return { 
    //     //         ...prevFormData, 
    //     //         username: e.target.value 
    //     //     };
    //     // });
    // };
    // const handleEmailChange = (e) => {
    //     setFormData({ ...formData, email: e.target.value });
    //     // setFormData((prevFormData) => {
    //     //     return { 
    //     //         ...prevFormData, 
    //     //         email: e.target.value 
    //     //     };
    //     // });
    // };

    // const handleAgeChange = (e) => {
    //     setFormData({ ...formData, age: e.target.value });
    // };
    

    return (
        <>
            <h1>Profile Card</h1>
            <p>This is a simple profile card component.</p>

            <div>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                    type = "text"
                    placeholder = "Enter your username"
                    id = "username" 
                    value = {username}
                    onChange = {handleUsernameChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                    type = "email"
                    placeholder = "Enter your email"
                    id = "email" 
                    value = {email}
                    onChange = {handleEmailChange}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age: </label>
                    <input 
                    type = "number"
                    placeholder = "Enter your age"
                    id = "age" 
                    value = {age}
                    onChange = {handleAgeChange}
                    />
                </div>

                <button onClick = {handleClear}>Clear</button>
            </div>

            <div>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
            </div>
        </>
    );
}
export default ProfileCard;