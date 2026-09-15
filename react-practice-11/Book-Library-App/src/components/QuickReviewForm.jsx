import { useState, useRef } from "react";

function QuickReviewForm() {

    const reviewerRef = useRef(null);
    const reviewRef = useRef(null);
    const [result, setResult] = useState(null);

    const handleReviewerSubmit = (e) => {
        e.preventDefault();
        const reviewer = reviewerRef.current.value;
        const review = reviewRef.current.value;

        if(!reviewer || !review) {
            setResult({type: "error", text: "Naam aur review dono likho!"});
            return;
        }

        setResult({type: "success", text: `Shukriya ${reviewer}! Review save ho gaya.`});

        reviewerRef.current.value = '';
        reviewRef.current.value = '';

    };

    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mb-4 bg-[#fafafa]">
            <h3>✍️ Quick Review (Uncontrolled Form with useRef)</h3>
            <form onSubmit={handleReviewerSubmit}>
                <input
                    className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                    type="text"
                    placeholder="Your Name"
                    ref={reviewerRef}
                />
                <input
                    className="block w-full p-2 mb-2 rounded-[6px] border border-[#ccc] box-border"
                    type="text"
                    placeholder="Review likho"
                    ref={reviewRef}
                />
                <button
                    type="submit"
                    className="py-2 px-2 px-4 rounded-[6px] border-0 bg-[#4f46e5] text-white cursor-pointer"
                >
                    Submit Review
                </button>
            </form>

            {/* Concept 3: Conditional Rendering */}
            {result && (
                <p className= {result.type === "success" ? "text-[#16a34a] text-sm" : "text-[#dc2626] text-sm"}>
                    {result.type === "success" ? "✅ " : "⚠️ "}
                    {result.text}
                </p>
            )}
        </div>
    )
}
export default QuickReviewForm;