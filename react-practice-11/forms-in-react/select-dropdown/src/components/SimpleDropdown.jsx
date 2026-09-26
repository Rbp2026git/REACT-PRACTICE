import { useState } from "react";

function SimpleDropdown (){

    const [selected, setSelected] = useState("");
    const handleChange = (e) => setSelected(e.target.value)
    return (
        <div>
            <select value={selected} onChange={handleChange}>
                <option value={""}>--Select city--</option>
                <option value="Jehanabad">Jehanabad</option>
                <option value="Patna">Patna</option>
                <option value="Gaya">Gaya</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
            </select>
            <p>City: {selected || "Abhi koi bhi city selected nahi hai"}</p>
        </div>
    );
}
export default SimpleDropdown;