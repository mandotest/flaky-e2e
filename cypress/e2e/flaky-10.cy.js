describe('intentionally flaky spec', () => {
  it('fails 10%', () => {
    cy.visit('https://example.cypress.io')

    if (Math.random() < 0.1) {
      cy.get('.thing').should('be.visible')
    }
  })
})