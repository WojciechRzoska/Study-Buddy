describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).click().type('teacher@gmail.com');
    cy.findByText(/password/i)
      .click()
      .type('1234');
    cy.findByText(/sign in/i).click();
    cy.findByText(/logged as/i).should('exist');
  });
  it('Allows to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click().type('Cypress note');
    cy.findByText(/content/i)
      .click()
      .type('test cypress note');
    cy.findByText(/add/i).click();
    cy.findAllByText('Cypress note').should('exist');
    cy.findAllByText('test cypress note').should('exist');

    cy.findAllByText('Cypress note')
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click();

    cy.findAllByText('Cypress note').should('not.exist');
  });
});
