import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to our Bookstore!</h1>
      <p>Explore our collection of books.</p>
      <Link to="/books">
        <button type="button">Browse Books</button>
      </Link>
    </div>
  )
}

export default HomePage
