import { interestOptions } from "../data";
function CheckboxGroup({selected, onToggle}) {
    return (
        <fieldset className="mb-6">
            <legend className="text-sm font-medium text-slate-800 mb-2">
                Aapki interests kya hain? (Multiple chuno)
            </legend>
            <div className="space-y-1.5">
                {interestOptions.map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer"
                    >
                        <input
                        className="accent-teal-600"
                            type="checkbox"
                            checked={selected.includes(opt)}
                            onChange={()=> onToggle(opt)}
                        />
                        {opt}
                    </label>
                ))}
            </div>

        </fieldset>
    )
}
export default CheckboxGroup;