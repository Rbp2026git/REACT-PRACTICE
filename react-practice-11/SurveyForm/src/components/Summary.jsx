import { radioQuestions } from "../data";

function Summary ({name, answers, interests, onReset}) {
    return (
        <div className="p-6 bg-teal-50 border border-teal-200 rounded-md">
            <h2 className="text-base font-semibold text-teal-900 mb-3">Welcome, {name}</h2>
            <ul className="text-sm text-slate-700 space-y-1 mb-4">
                {radioQuestions.map((q) => (
                    <li key={q.id}>
                        <span className="text-slate-500">{q.question}</span> - {" "}
                        <span className="font-medium">{answers[q.id]}</span>
                    </li>
                ))}
                <li>
                    <span className="text-slate-500">Interests</span> -{" "}
                    <span className="font-medium">
                        {interests.length > 0 ? interests.join(", ") : "None"}
                    </span>
                </li>
            </ul>
            
            <button
            onClick={onReset}
            className="text-sm text-teal-700 underline underline-offset-2"
            >
                Naya response bharo
            </button>
        </div>
    )
}
export default Summary;