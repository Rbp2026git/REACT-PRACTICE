import './ProductCard.css';

function ProductCard({ product }){

    return(
        <div className = "product-card">
            <img 
                src = {product.src}
                alt = {product.name}
            />

            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <p className="stock-status">In Stock: {product.inStock ? "Yes" : "No"}</p>
        </div>
    )
}
export default ProductCard