import { useState } from "react";

function NotificationBell () {
    const [notificationCount, setNotificationCount] = useState(0);

    const handler = () => {
        return setNotificationCount(notificationCount + 1);
    }
    return (
        <div>
            {notificationCount > 0 && (
                <span>count: {notificationCount}</span>

            )}
            <br />

            <button onClick = {handler}>Click this Bell</button>
        </div>
    )
}
export default NotificationBell;