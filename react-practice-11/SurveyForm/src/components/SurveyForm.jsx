import { useState } from "react";
import { radioQuestions } from "../data";
import CheckboxGroup from "./CheckboxGroup";
import RadioQuestions from "./RadioQuestions";
import Header from "./Header";
import Summary from "./Summary";

function SurveyForm() {
    const [name, setName] = useState("");
    const [answers, setAnswer] = useState({});
    const [interests, setInterests] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleRadioChange = (questionId, value) => {
        setAnswer((prev) => (
            {
                ...prev,
                [questionId]: value
            }
        ))
    };
    // console.log(answers);
    const handleToggleInterest = (item) => {
        setInterests((prev) => (
            prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
        ))
    };
    // console.log(interests);
    const allAnswered = name.trim() !== '' && radioQuestions.every((q) => answers[q.id] !== undefined);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (allAnswered) setSubmitted(true);
    };

    const handleReset = () =>{
        setName('');
        setAnswer({});
        setInterests([]);
        setSubmitted(false);
    };
    return (
        <div className="w-full max-w-md bg-white rounded-md shadow-wm border border-slate-200 p-6">
            <Header />
            {submitted ? (
                <Summary 
                name={name}
                answers={answers}
                interests={interests}
                onReset={handleReset}
                />
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName" className="block text-sm font-medium text-slate-800 mb-1.5">Name</label>
                    <input
                        type="text"
                        id="userName"
                        className="w-full border border-slate-300 rounded px-3 py-1.5 text-sm mb-6 foocus:ring-2 focus:ring-teal-500"
                        placeholder="Aapka naam"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {radioQuestions.map((q) => (
                        <RadioQuestions
                            key={q.id}
                            id={q.id}
                            question={q.question}
                            options={q.options}
                            selectedValue={answers[q.id]}
                            onChange={handleRadioChange}
                        />
                    ))}
                    <CheckboxGroup
                        selected={interests}
                        onToggle={handleToggleInterest}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 rounded text-sm font-medium text-white bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed"
                    >
                        Submit
                    </button>
                </form>

            )}
        </div>
    )
}
export default SurveyForm;
