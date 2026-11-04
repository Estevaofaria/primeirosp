  describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCredentialAlert: "[role='alert']"
}

it('login - Success', () => {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  cy.get(selectorsList.usernameField).type('Admin')

  cy.get(selectorsList.passwordField).type('admin123')

  cy.get(selectorsList.loginButton).click()

  cy.get(selectorsList.sectionTitleTopBar)
    .should('contain', 'Dashboard')

})

 


  it('login - fail', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.get(selectorsList.usernameField).type('test')
   cy.get(selectorsList.passwordField).type('test123')
   cy.get(selectorsList.loginButton).click()
   cy.get(selectorsList.wrongCredentialAlert)

})
  })