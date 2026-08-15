import './App.css'
import ProductCard from './ProductCard'
import asusLaptop from './assets/asus-laptop.jpg';
import dellLaptop from './assets/dell-laptop.jpeg';
import hpLaptop from './assets/hp-laptop.jpg';
import macBook from './assets/mack-laptop.jpeg';

function App() {

  const products = [
    {
      name: "ASUS Vivobook S",
      src: asusLaptop,
      description: "A high-performance laptop for gaming and productivity.",
      price: 999.99,
      inStock: true
    },
    {
      name: "Dell XPS 13",
      src: dellLaptop,
      description: "A premium ultrabook with a stunning display and powerful performance.",
      price: 1299.99,
      inStock: false
    },
    {
      name: "MacBook Pro",
      src: macBook,
      description: "The most powerful MacBook Pro ever, with the M2 Pro chip.",
      price: 1999.99,
      inStock: true
    },
    {
      name: "HP Spectre x360",
      src: hpLaptop,
      description: "A versatile convertible laptop with a stunning display and long battery life.",
      price: 1499.99,
      inStock: true
    }
  ];

  return (
    <>
      <div className="product-container">

        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}

      </div>

    </>
  )
}

export default App
