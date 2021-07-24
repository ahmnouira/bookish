import axios from 'axios'
import { Book } from '../../../models/book'

describe('Bookish application', () => {
  before(async () => {
    try {
      return await axios.delete('http://localhost:8080/books?_cleanup=true')
    } catch (message) {
      return console.error(message)
    }
  })

  afterEach(async () => {
    try {
      return await axios.delete('http://localhost:8080/books?_cleanup=true')
    } catch (message) {
      return console.error(message)
    }
  })

  beforeEach(() => {
    const books: Book[] = [
      {
        name: 'Refactroing',
        id: '1',
      },
      {
        name: 'Domain-driven',
        id: '2',
      },

      {
        name: 'Building Microservices',
        id: '3',
      },
    ]
    return books.map(async (book) => {
      try {
        return await axios.post('http://localhost:8080/books', book, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      } catch (error) {
        return console.error(error)
      }
    })
  })

  it('Visits the bookish and find the title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1[id="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('dib[id="book-list]').should('exist')
    cy.get('div.book-item').should((items) => {
      expect(items).to.have.length(3)

      console.log('items', items)
      /*
      const titles = items.map((book) => book.querySelector('h2').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven', 'Building Microservices'])
      */
    })
  })
})
