function User (props) {
    return (
        <ul>
            {props.numbers.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
    )
}
export default User;

export function Profile (props) {
    return (
        <div>
            <h2>{props.person.name}</h2>
            <p>Age: {props.person.age}</p>
            <p>Email: {props.person.email}</p>
        </div>
    )
}

export function Button (props) {
    return (
        <button onClick={() => props.greetUser(props.person.name)}>
            Greet {props.person.name}
        </button>
    )
}
