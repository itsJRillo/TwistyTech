describe('Checking the main page', () => {
    it('Charging the page and select the title', () => {
      cy.visit('http://localhost:3000');
  
      cy.getBySel("title").should("be.visible")
    });
  });