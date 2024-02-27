function ShoppingCart() {
  const cartItems = [
    {id: 1, title: 'Book 1', price: 10.99, quantity: 2},
    {id: 2, title: 'Book 2', price: 12.99, quantity: 1},
  ]

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default ShoppingCart
