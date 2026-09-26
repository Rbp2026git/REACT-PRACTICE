import { useState } from "react";

function GroupedRadioButton () {

    const [gender, setGender] = useState("female");
    console.log(gender);
    const genders = ["male", "female", "other"];

    const handleChange = (e) => {
        setGender(e.target.value);
    };

    return(
        <div>
            {genders.map((item) => (
                <label key={item}>
                    <input 
                    type="radio"
                    name="gender"
                    value={item}
                    checked = {gender === item}
                    onChange={handleChange}
                    />
                    {item}
                </label>
            ))}
            <p>Selected : {gender || "Abhi koi bhi selected nahi hai."}</p>
        </div>
    );
}
export default GroupedRadioButton;