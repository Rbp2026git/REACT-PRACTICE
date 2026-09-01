function Product({ product, onAdd }) {
    const productStyle = {
        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "180px",
        height: "230px",
        display: "flex",
        flexDirection: "column",
    };

    return (
        <div className="product" style={productStyle}>
            <h2>{product.name}</h2>
            <p style ={{ fontWeight: "bold", color: "green" }}>Price: ₹{product.price}</p>
            <button onClick={() => onAdd(product.id)} style = {{marginTop: "auto"}}>Add to Cart</button>
        </div>
    )
};
export default Product;