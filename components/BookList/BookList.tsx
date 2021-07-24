import { Book } from '../../models/book'

type BookListProps = {
  books: Book[]
}

export const BookList = ({ books }: BookListProps) => {
  const renderBooks = books.map((book) => {
    return (
      <div key={book.id} className='book-item'>
        <h2 className='title'>{book.name}</h2>
      </div>
    )
  })

  return <div id='book-list'>{renderBooks}</div>
}
