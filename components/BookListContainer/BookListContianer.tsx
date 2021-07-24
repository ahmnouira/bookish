import { useFetch } from '../../hooks/useFetch'
import { Book } from '../../models/book'
import { BookList } from '../BookList/BookList'

export const BookListContainer = () => {
  const { loading, error, data: books } = useFetch<Book[]>('books')

  if (error) {
    return <h1 style={{ color: 'red' }}>Error...</h1>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return <BookList books={books} />
}
