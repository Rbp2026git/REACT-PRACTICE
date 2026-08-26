import { useState } from "react";

function ItemList () {
    const [selectedItem, seSelectedItem] = useState(null);

    const items = ["Apple", "Banana"];
    return (
        <div>
            {items.map((item) => (
                <button 
                key = {item} 
                onClick = {() =>{
                    return seSelectedItem(item)
                }}>
                    {item}
                </button>
            ))}
            <p>{selectedItem? `Selected: ${selectedItem}` : `Kuch select nahi kiya abhi`}</p>
        </div>
    );
}
export default ItemList;