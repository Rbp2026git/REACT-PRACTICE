import { radioQuestions } from "../data";
function RadioQuestions({ id, question, options, selectedValue, onChange }) {
    return (
        <fieldset>
            <legend className="text-sm font-medium text-slate-800 mb-2">
                {question}
            </legend>
            <div className="space-y-1.5">
                {options.map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer"
                    >
                        <input
                        className="accent-teal-600"
                            type="radio"
                            name={id}
                            value={opt}
                            checked={selectedValue === opt}
                            onChange={() => onChange(id, opt)}
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </fieldset>
    )
}
export default RadioQuestions;