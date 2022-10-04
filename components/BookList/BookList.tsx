import { Book } from '../../models/book'

export type BookListProps = {
  books: Book[]
  error: any
  loading: boolean
}

export const BookList = ({ books, error, loading }: BookListProps) => {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <h1 style={{ color: 'red' }}>Error...</h1>
  }

  const renderBooks = books.map((book) => {
    return (
      <div key={book.id} className='book-item'>
        <h2 className='title'>{book.name}</h2>
      </div>
    )
  })

  return <div id='book-list'>{renderBooks}</div>
}
