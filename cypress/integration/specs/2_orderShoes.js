import regPage from '../pageObjects/regPage'
import cookies from '../pageObjects/cookies'
import customerPage from '../pageObjects/customerPage'
import header from '../pageObjects/header'
import loginPage from '../pageObjects/loginPage'
import navBar from '../pageObjects/navBar'

context('Order products', () => {

    // objects of classes
    const reg = new regPage()
    const cks = new cookies()
    const cust = new customerPage()
    const hdr = new header()
    const login = new loginPage()
    const order = new customerPage()
    const nav = new navBar()

    beforeEach(function()
    {
      cks.policyCheckText()
      cks.acceptCookies()
    })

    before(function()
    {
      cy.login()
    })

  //how a test case is defined/described anything inside this function is executed for the test case
  it('Order Shoes', function ()
  {
    nav.shoesLink()

    order.converseShoes()

    order.addCartButton()

    order.viewCartButton()

    order.checkoutButton()

    order.contactField("Test McTesterson")

    order.countryField("United States")

    order.stateField("Washington")

    order.cityField("Washington City")

    order.postCodeField("2123")

    order.addressField("123 Wall St")

    order.phoneField("042337687")

    order.paymentButton()

    order.cashButton()
  })

})
