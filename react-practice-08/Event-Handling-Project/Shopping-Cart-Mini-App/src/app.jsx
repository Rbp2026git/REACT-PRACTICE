import { useState } from "react";
import products from "./components/Data";
import Product from "./components/Product";
import Cart from "./components/Cart"

export function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (id) => {
    const existing = cartItems.find((item) => item.id === id);

    if (existing) {
      handleQuantityChange(id, "inc");
      return;
    }

    const product = products.find((p) => p.id === id);
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, direction) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id !== id) return item;
        const newQty = direction === "inc" ? item.qty + 1 : item.qty - 1;
        return { ...item, qty: Math.max(newQty, 1) };
      })
    );
  };
  
  return (
    <>
      <div>
        <h2>Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAdd={handleAdd}
            />
          ))}
        </div>

        <h2>Cart</h2>
        <Cart
          cartItems={cartItems}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      </div>
    </>
  )
}
export default App;