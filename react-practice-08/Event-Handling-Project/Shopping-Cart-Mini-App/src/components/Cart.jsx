function Cart({ cartItems, onRemove, onQuantityChange }) {
    if (cartItems.length === 0) {
        return <p>Cart is empty</p>;
    }
    const cartItemStyle = {
        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "180px",
        height: "230px",
        display: "flex",
        flexDirection: "column"
    };
    return (
        <div className="cart" style={{ display: "flex", flexWrap: "wrap" }}>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item" style={cartItemStyle}>

                    <p>{item.name}</p>
                    <p style={{ color: "green", fontWeight: "bold" }}>Price: ₹{item.price * item.qty}</p>

                    <div>
                        <button onClick={() => onQuantityChange(item.id, "dec")}> - </button>
                        <span>{item.qty}</span>
                        <button onClick={() => onQuantityChange(item.id, "inc")}> + </button>
                    </div>

                    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around" }}>
                        <button onClick={() => onRemove(item.id)}>Remove</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            ))}
        </div >
    )
};
export default Cart;