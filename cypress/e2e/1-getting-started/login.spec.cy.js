  
import usersData from '../../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('login - Success', () => {
    cy.visit('auth/login')

    cy.get(selectorsList.usernameField)
      .type(usersData.userSuccess.username)

    cy.get(selectorsList.passwordField)
      .type(usersData.userSuccess.password)

    cy.get(selectorsList.loginButton).click()

    cy.location('pathname')
      .should('equal', '/web/index.php/dashboard/index')

    cy.get(selectorsList.dashboardGrid)
      .should('be.visible')
  })

  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get(selectorsList.usernameField)
      .type(usersData.userFail.username)

    cy.get(selectorsList.passwordField)
      .type(usersData.userFail.password)

    cy.get(selectorsList.loginButton).click()

    cy.get(selectorsList.wrongCredentialAlert)
      .should('be.visible')
  })

})
