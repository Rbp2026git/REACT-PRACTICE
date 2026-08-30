function ItemList() {
    const handleClick = (id, name, e) => {
        console.log("Clicked item id : ", id);
         console.log("Clicked item Name : ", name);
        console.log("Target Element : ", e.target);
        console.log("Current Target = ", e.currentTarget);
        console.log( "Event Type = ", e.type);
        console.log("preventDefault = ",e.preventDefault);
        e.preventDefault();
        e.stopPropagation();
        console.log("Browser native events = ", e.nativeEvent);
        console.log("clientX = ", e.clientX);
        console.log("clientY = ", e.clientY);
        console.log("Event Key = ", e.key);

    };
    const items = [{
        id: 101,
        name: "Laptop"
    },
    {
        id: 102,
        name: "Phone"
    }, 
    {
        id: 103,
        name: "Charger"
    }
    ];

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} 
                onClick={(e) => handleClick(item.id, item.name, e)} 
                style = {{textDecoration: "underline", color: "rblue"}}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    )
};
export default ItemList;