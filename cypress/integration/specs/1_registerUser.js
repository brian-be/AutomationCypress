import regPage from '../pageObjects/regPage'
import cookies from '../pageObjects/cookies'
import customerPage from '../pageObjects/customerPage'
import header from '../pageObjects/header'
import loginPage from '../pageObjects/loginPage'

context('User Registration', () => {

  // objects of classes
  const reg = new regPage()
  const cks = new cookies()
  const cust = new customerPage()
  const hdr = new header()
  const login = new loginPage()

  //how a test case is defined/described anything inside this function is executed for the test case
  it('Registering a New User', function ()
  {
    reg.regURL()
    cks.policyCheckText()
    cks.acceptCookies()
    reg.regText()
    reg.emailField()
    reg.fnameField()
    reg.pwdField()
    reg.confirmPwdField()
    reg.regButton()
    hdr.logOff()
  })




})
