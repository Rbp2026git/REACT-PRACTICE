import { useState } from "react";

function SingleCheckbox() {
    const [isChecked, setIsChecked] = useState(false);
    // console.log(isChecked);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }
    return (
        <div>
            <h3 className="text-center mt-[10px] mb-[10px] ">Single Checkbox - Single state</h3>
            <label htmlFor="t&s">
                <input 
                    id="t&s"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {'  '}Terms & Condition
            </label>
            <p>
                status: {isChecked ? "Accepted(True)" : "Rejected(False)"}
            </p>
        </div>
    )
}
export default SingleCheckbox;