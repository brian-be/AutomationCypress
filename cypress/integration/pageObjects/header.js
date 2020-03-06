class header
{
  logOff()
  {
    const logOff = cy.contains('Log off')
    logOff.click()
    cy.url().should('contain', 'https://betestautomation.azurewebsites.net/')
  }

  regLink()
  {
    const register = cy.contains('Register')
    register.click()
  }

  loginLink()
  {
    const login = cy.contains('Log off')
    login.click()
  }
}

export default header
