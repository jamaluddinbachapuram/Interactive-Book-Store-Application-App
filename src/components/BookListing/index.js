import {Link} from 'react-router-dom'

function BookListing() {
  const books = [
    {id: 1, title: 'Book 1', author: 'Author 1', price: 10.99},
    {id: 2, title: 'Book 2', author: 'Author 2', price: 12.99},
    {id: 3, title: 'Book 3', author: 'Author 3', price: 15.99},
  ]

  return (
    <div className="book-listing">
      <h2>Book Listing Page</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <div>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>${book.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookListing
