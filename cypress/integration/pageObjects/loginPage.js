class loginPage
{
  loginURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/login')
  }

  loginText()
  {
    cy.contains('h2', 'Log in')
    cy.contains('h4', 'Use a local account to log in.')
    cy.contains('a', 'Register as a new user?')
    cy.contains('a', 'Forgot your password?')
  }

  emailField(value)
  {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `testname${id}`
    const today = new Date();
    const time = today.getHours() + "_" + today.getMinutes();
    const email = time + 'brian@test.com'
    const field = cy.get('#Email');
    field.clear();
    field.type(email);

    return this;
  }

  passwordField(value)
  {
    const field = cy.get('#Password');
    field.clear();
    field.type(value);

    return this;
  }

  loginButton()
  {
    const button = cy.get('.offset-md-4 > .btn');
    button.click()
  }

  regButton()
  {
    const button = cy.get('.search-btn');
    button.click()
  }

}

export default loginPage
