function LoggedInView({userName, onLogout}) {
    return (
        <div>
            <h1>Welcome back, {userName}!</h1>
            <p>Check your dashboard for latest updates.</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}
export default LoggedInView;