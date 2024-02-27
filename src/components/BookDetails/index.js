import {useParams} from 'react-router-dom'

function BookDetails() {
  useParams()

  const book = {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    price: 10.99,
    description: 'Lorem Ipsum',
  }

  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <div>
        <p>{book.id}</p>
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        <p>${book.price}</p>
        <p>{book.description}</p>
      </div>
    </div>
  )
}

export default BookDetails
