 
describe('Bookish application', () => {
  it('Visits the bookish', () => {
    cy.visit("http://localhost:3000/")
    cy.get('h1[id="heading"]').contains('Bookish')
  })
})
