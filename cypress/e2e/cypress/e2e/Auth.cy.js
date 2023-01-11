describe('Studdy buddy app', () => {
  it('render unauthenticated app', () => {
    cy.visit('/');
    cy.findByText('login').should('exist');
  });
  it('Allows user to authenticate', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@gmail.com');
    cy.findByText(/password/i).should('exist');
    cy.findByText(/password/i)
      .click()
      .type('1234');
    cy.findByText(/sign in/i).should('exist');
    cy.findByText(/sign in/i).click();

    cy.findByText(/logged as/i).should('exist');
  });
});
