import { useState } from "react";

function DynamicSelect () {
    const languages = ["HTML", "CSS", "JavaScript", "React", "JAVA", "Python"];
    const [select, setSelect] = useState("");

    const handleChange = (e) => {
        setSelect(e.target.value);
    };

    return(
        <div>
            <select value={select} onChange={handleChange}>
                <option value={""}>--Languages--</option>
                {languages.map((lang) => (
                    <option value={lang} key={lang}>{lang}</option>
                ))}
            </select>

            <p>Selected language : {select || "Koi ek language select karna jaruri hai"}</p>
        </div>
    );
}
export default DynamicSelect;