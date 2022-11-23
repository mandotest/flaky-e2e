describe('intentionally flaky spec', () => {
  it('fails 50%', () => {
    cy.visit('https://example.cypress.io')

    if (Math.random() < 0.5) {
      cy.get('.thing').should('be.visible')
    }
  })
})