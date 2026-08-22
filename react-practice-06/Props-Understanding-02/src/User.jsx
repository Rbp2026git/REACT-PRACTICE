function User({ name, age, email = "Email not provided", ...others }) {

    return (
        <>
            <div>
                <h2>Name: {name}</h2>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>City: {others.city}</p>
                <p>State: {others.state}</p>

            </div>
            <hr />
        </>

    )
}
export default User;