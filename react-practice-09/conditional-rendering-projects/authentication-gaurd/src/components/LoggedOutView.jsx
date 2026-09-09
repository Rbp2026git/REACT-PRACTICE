function LoggedOutView({onLogin}) {
    return (
        <div>
            <h2>Hello!</h2>
            <p>You are not logged in.</p>
            <p>Please log in to access your account.</p>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}
export default LoggedOutView;