function UserStatus({ isLoggedIn, username }) {

    if (!isLoggedIn) {
        return (
            <div>
                <h2>Welcome, Guest!</h2>
                <p>Please log in to continue.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Welcome back, {username}!</h2>
            <p>You are logged in.</p>
        </div>
    );
}
export default UserStatus;
