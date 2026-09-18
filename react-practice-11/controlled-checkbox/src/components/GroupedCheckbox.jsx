import { useState } from "react";

function GroupedCheckbox() {
    const hobbiesList = [
        { id: 'h1', label: 'Reading' },
        { id: 'h2', label: 'Coding' },
        { id: 'h3', label: 'Gaming' },
        { id: 'h4', label: 'Traveling' },
        { id: 'h5', label: 'Cooking' }
    ];
    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const handleToggleHobby = (hobbyId) => {
        setSelectedHobbies((prevSelected) => {
            if (prevSelected.includes(hobbyId)) {
                return prevSelected.filter((id) => id !== hobbyId); //usi ko filter ya return karo jo match nhi karta ho
            }
            return [...prevSelected, hobbyId];
        });
    };

    return (
        <div className="border border-[#e0e0e0] rounded-[10px] p-[14px] mt-4 mb-4 bg-[#fafafa] select-none">
            <h3 className="text-center mt-[10px] mb-[10px] ">Apne hobbies select karo</h3>

            {/* .map() se list render ho rha hai - stable id ko key ke roop mein use kiya */}
            {hobbiesList.map((hobby) => (
                <label key={hobby.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleToggleHobby(hobby.id)}
                    />
                    {hobby.label}
                </label>
            )
            )}

            <hr />

            <div>
                <strong>Selected({selectedHobbies.length}):</strong>

                {selectedHobbies.length > 0 ? (
                    selectedHobbies.map((id, index) => (
                        <p key={index}>{hobbiesList.find((h) => h.id === id).label}</p>
                    ))
                ) : ('Koi bhi hobby select nahi ki abhi tak')
                }

            </div>

        </div>
    );
}
export default GroupedCheckbox;