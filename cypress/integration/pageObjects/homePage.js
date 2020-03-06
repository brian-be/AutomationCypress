class home
{
  homeURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/')
  }

  sampleData()
  {
    const button = cy.get('.btn btn-danger');
    if(cy.contains('h2', 'Sample data')){
    button.click()
    }
  }
}
