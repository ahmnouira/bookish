import { render } from '@testing-library/react'
import { BookList, BookListProps } from './BookList'

describe('BookList', () => {
  const initProps: BookListProps = {
    books: [],
    error: null,
    loading: false,
  }

  it('will show loading', () => {
    const props: BookListProps = {
      ...initProps,
      loading: true,
    }

    const { container } = render(<BookList {...props} />)
    const content = container.querySelector('p')
    expect(content.innerHTML).to.have.contain('Loading')
  })

  it('will show error', () => {
    const props: BookListProps = {
      ...initProps,
      error: 'Error',
    }
    const { container } = render(<BookList {...props} />)
    const content = container.querySelector('h1')
    expect(content.innerHTML).to.have.contain('Error')
  })
})
