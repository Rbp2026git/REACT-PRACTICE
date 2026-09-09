import OrderCard from './components/OrderCard';

function App() {

  return (
    <>
      <OrderCard status = "pending" />
      <OrderCard status = "shipped" />
      <OrderCard status = "delivered" />
      <OrderCard status = "cancelled" />
      <OrderCard status = "unknown" />
    </>
  )
}

export default App
