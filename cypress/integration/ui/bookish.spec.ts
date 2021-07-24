describe('Bookish application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Visits the bookish and find the title', () => {
    cy.get('h1[id="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.get('div.book-item').should((books) => {
      expect(books).to.have.length(2)

      const titles = [...books].map((book) => book.querySelector('h2').innerHTML)
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven'])
    })
  })
})
