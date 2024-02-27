import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'

import BookListing from './components/BookListing'

import BookDetails from './components/BookDetails'

import ShoppingCart from './components/ShoppingCart'

import CheckoutPage from './components/CheckoutPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/books" component={BookListing} />
          <Route exact path="/books/:id" component={BookDetails} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
