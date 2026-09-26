import { useState } from "react";

function SimpleRadioButton() {
    const [gender, setGender] = useState("male");
    console.log(gender);

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={handleChange}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={handleChange}
                />
                Female
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={handleChange}
                />
                Other
            </label>

            <p>Selected : {gender || "Abhi koi bhi selected nahi hai."}</p>
        </div>
    )
}
export default SimpleRadioButton;