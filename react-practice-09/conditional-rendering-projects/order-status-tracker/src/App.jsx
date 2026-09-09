import OrderStatus from "./components/OrderStatus"
function App() {

  return (
    <>
      <OrderStatus status = "pending"/>
      <OrderStatus status = "shipped"/>
      <OrderStatus status = "delivered"/>
      <OrderStatus status = "cancelled"/>
    </>
  )
}

export default App