describe('intentionally flaky spec', () => {
  it('fails 33%', () => {
    cy.visit('https://example.cypress.io')

    if (Math.random() < 0.33) {
      cy.get('.thing').should('be.visible')
    }
  })
})