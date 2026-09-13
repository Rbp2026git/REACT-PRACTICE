import { useState, useRef } from "react";

function FeedbackForm() {

    const nameRef = useRef(null);
    const messageRef = useRef(null);
    const [submittedMsg, setSubmittedMsg] = useState(null);

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const message = messageRef.current.value;

        if (!name || !message) {
            setSubmittedMsg({ type: "error", text: "Naam aur message dono do!" });
            return;
        }

        setSubmittedMsg({ type: "success", text: `shukriya ${name}! Feedback mil gaya.` });
        nameRef.current.value = '';
        messageRef.current.value = '';
    };

    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">

            <h3>💬 Quick Feedback (Uncontrolled Form with useRef)</h3>
            <form onSubmit={handleFeedbackSubmit}>
                <input
                    className="box-border w-full p-2 mb-2 rounded-md block border border-[#ccc]"
                    ref={nameRef}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="box-border w-full p-2 mb-2 rounded-md block border border-[#ccc]"
                    ref={messageRef}
                    type="text"
                    placeholder="Message"
                />

                <button className="px-4 py-2 rounded-md border-0 bg-indigo-600 text-white cursor-pointer"
                    type="submit"
                >
                    Submit Feedback
                </button>
            </form>

            {/* Conditional Rendering */}
            {submittedMsg && (
                <p
                style = {
                submittedMsg.type === "success" ? {color: "#16a34a", fontSize: "14px"} : {color: "#dc2626", fontSize: "14px"}
                }
            >
                {submittedMsg.type === "success" ? "✅ " : "⚠️ "}
                {submittedMsg.text}
            </p>
            )}
        </div>
    );
}
export default FeedbackForm;