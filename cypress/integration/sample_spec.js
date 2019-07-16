describe('My First test', function() {
  it('Make an assertion', function() {
    cy.visit('https://example.cypress.io');

    cy.pause();

    cy.contains('type').click();

    cy.url()
      .should('include', '/commands/action');

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
