/// <reference types="cypress" />

class cookies
{
  policyCheckText()
  {
      cy.contains('Use this space to summarize your privacy and cookie use policy.')
  }

  acceptCookies()
  {
      cy.contains('Accept').click()
  }
}

export default cookies
