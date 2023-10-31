describe('Checkking the main page', () => {
    it('Charging the page and select the title', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-cy="messageText"]')
        .type('New message');
  
      cy.contains('New message');
    });
  });