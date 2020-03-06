class regPage
{
  regURL()
  {
    cy.visit('https://betestautomation.azurewebsites.net/register')
  }

  regText()
  {
    cy.contains('h2', 'Register')
    cy.contains('h4', 'Create a new account.')
  }

  emailField()
  {
    const today = new Date();
    const time = today.getHours() + "_" + today.getMinutes();
    const email = time + 'brian@test.com'
    const field = cy.get('#Email');
    field.clear();
    field.type(email);

    return this;
  }

  fnameField(value)
  {
    const fullname = 'Test McTesterson'
    const field = cy.get('#FullName');
    field.clear();
    field.type(fullname);

    return this
  }

  pwdField()
  {
    const password = 'Password'
    const field = cy.get('#Password');
    field.clear();
    field.type(password);

    return this;
  }

  confirmPwdField()
  {
    const cpassword = 'Password'
    const field = cy.get('#ConfirmPassword');
    field.clear();
    field.type(cpassword);

    return this;
  }

  regButton()
  {
    const button = cy.get('.offset-md-4 > .btn');
    button.click()
  }

}

export default regPage
