import {useState} from 'react'

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckout = () => {
    console.log('Form data:', formData)
  }

  return (
    <div className="checkout-page">
      <h2>Checkout Page</h2>
      <div className="checkout-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          rows="4"
          value={formData.address}
          onChange={handleInputChange}
          required
        >
          {}
        </textarea>
        <button type="button" onClick={handleCheckout}>
          Place Order
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
