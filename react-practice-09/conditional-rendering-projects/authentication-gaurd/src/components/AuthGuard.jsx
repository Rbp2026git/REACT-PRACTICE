import { useState } from "react";
import LoggedInView from "./LoggedInView";
import LoggedOutView from "./LoggedOutView";

function AuthGuard({ isLoggedIn, userName }) {
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
    const [userNameState] = useState(userName || "Guest");

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            {isAuthenticated ? (
                <LoggedInView userName={userNameState} onLogout={handleLogout} />
            ) : (
                <LoggedOutView onLogin={handleLogin} />
            )}
        </div>
    );
}
export default AuthGuard;