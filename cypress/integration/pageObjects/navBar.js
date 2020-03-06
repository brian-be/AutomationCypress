class navBar
{
  womanURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/woman')
  }

  manURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/man')
  }

  shoesURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/shoes')
  }

  watchesURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/watches')
  }

  shoesLink()
  {
    const shoes = cy.contains('a', 'Shoes')
    shoes.click()
  }

  containsLinks()
  {
    cy.contains('a', 'Woman')
    cy.contains('a', 'Man')
    cy.contains('a', 'Shoes')
    cy.contains('a', 'Watches')
  }

  searchField(value)
  {
    const field = cy.get('#Query');
    field.clear();
    field.type(value);

    return this;
  }
}

export default navBar
