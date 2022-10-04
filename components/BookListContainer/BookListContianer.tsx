import { useFetch } from '../../hooks/useFetch'
import { Book } from '../../models/book'
import { BookList } from '../BookList/BookList'

export const BookListContainer = () => {
  const { loading, error, data: books } = useFetch<Book[]>('books')
  return <BookList books={books} loading={loading} error={error} />
}
