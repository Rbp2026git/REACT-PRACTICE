import { useState } from "react";

function SelectAllExample() {

    // Har item ek object hai jisme id, name, aur selected (boolean) hai
    const [items, setItems] = useState([
        { id: 1, name: 'React seekhna', selected: false },
        { id: 2, name: 'useEffect samajhna', selected: false },
        { id: 3, name: 'API se data fetch karna', selected: false },
        { id: 4, name: 'Project banana', selected: false },
        { id: 5, name: 'Deploy karna', selected: false },
    ]);

    const handleToggleSingle = (id) =>{
        setItems((prevItems) =>
            prevItems.map((item)=>
                item.id === id ? {...item, selected: !item.selected} : item
            )
        );
    };

    // SELECT ALL : sabko true kar do
    const handleSelectAll = () => {
        setItems((prevItems) =>
            prevItems.map((item) => ({...item, selected: true}))
        )
    };
    // DESELECT ALL : sabko false kar do
    const handleDeselectAll = () => {
        setItems((prevItems) => 
            prevItems.map((item) => ({...item, selected: false}))
        );
    };

    const selectCount = items.filter((item) => item.selected).length;
    const allSelected = selectCount === items.length;

    const handleMasterToggle = () =>{
        if(allSelected) {
            handleDeselectAll();
        }else{
            handleSelectAll();
        }
    }

    return (
        <div className="max-w-[420px] mx-auto my-5 p-5 rounded-xl border border-[#ddd] font-[Arial, sans-serif] bg-[#fafafa]">
            <h2 className="mb-3 text-xl">📋 Task List (Select All Example)</h2>

            <div className="flex justify-between items-center py-2 px-3 bg-[#f0f0f0] rounded-lg mb-[10px]">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        className="w-4 h-4 cursor-pointer"
                        type="checkbox"
                        checked={allSelected}
                        onChange={handleMasterToggle}
                    />
                    <strong>Select All</strong>
                </label>
                <span className="text-[13px] text-[#666] font-bold">
                    { } / { } selected
                </span>
            </div>

            <div className="flex  gap-[10px] mb-[14px]">
                <button className="flex-1 py-2 border-0 rounded-lg bg-[#34a853] text-white cursor-pointer font-bold" 
                onClick={handleSelectAll} 
                >
                    ✅ Select All
                </button>
                <button className="flex-1 py-2 border-0 rounded-lg bg-[#ea4335] text-white cursor-pointer font-bold"
                onClick={handleDeselectAll}
                >
                    ❌ Deselect All
                </button>
            </div>

            <ul className="list-none p-0 m-0">
                {items.map((item) => (
                    <li className="py-[10px] px-3 rounded-lg mb-[6px] border border-[#e0e0e0] transition-colors duration-200"
                        key={item.id}
                    >
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                className="w-4 h-4 cursor-pointer"
                                type="checkbox"
                                checked={item.selected}
                                onChange={() => handleToggleSingle(item.id)}
                            />
                            <span>
                                {item.name}
                            </span>
                        </label>
                    </li>

                ))}
            </ul>

        </div>
    )
}
export default SelectAllExample;