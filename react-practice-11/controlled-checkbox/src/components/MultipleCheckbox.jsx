import { useState } from "react";
function MultipleCheckbox() {
    const [isEmailNotif, setIsEmailNotif] = useState(false);
    const [isSmsNotif, setIsSmsNotif] = useState(true); // default true bhi rakh sakte hain
    const [isPushNotif, setIsPushNotif] = useState(false);
    const [isNewsletter, setIsNewsletter] = useState(false);

    return (
        <>
            <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mt-4 mb-4 bg-[#fafafa] select-none">
                <h3 className="text-center mt-[10px] mb-[10px]" >Notification Preference</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={isEmailNotif}
                        onChange={(e) => setIsEmailNotif(e.target.checked)}
                    />
                    Email Notifications
                </label><br />
                <label>
                    <input
                        type="checkbox"
                        checked={isSmsNotif}
                        onChange={(e) => setIsSmsNotif(e.target.checked)}
                    />
                    SMS Notifications
                </label><br />
                <label>
                    <input
                        type="checkbox"
                        checked={isPushNotif}
                        onChange={(e) => setIsPushNotif(e.target.checked)}
                    />
                    Push Notifications
                </label><br />
                <label>
                    <input
                        type="checkbox"
                        checked={isNewsletter}
                        onChange={(e) => setIsNewsletter(e.target.checked)}
                    />
                    Newsletter Subscribe
                </label>

            </div>
            <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mt-4 mb-4 bg-[#fafafa]" >
                <strong>Current Selections:</strong>
                <ul style={{ margin: '8px 0 0 0' }}>
                    <li>Email: {isEmailNotif ? '✅' : '❌'}</li>

                    <li>SMS: {isSmsNotif ? '✅' : '❌'}</li>

                    <li>Push: {isPushNotif ? '✅' : '❌'}</li>

                    <li>Newsletter: {isNewsletter ? '✅' : '❌'}</li>
                </ul>
            </div>
        </>
    );
}
export default MultipleCheckbox;