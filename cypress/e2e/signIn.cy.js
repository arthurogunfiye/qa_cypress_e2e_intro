/// <reference types="cypress" />
import SignInPageObject from '../support/pages/signIn.pageObject';

const signInPage = new SignInPageObject();

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit(signInPage.url);
    signInPage.fillAndSubmitSignInForm(signInPage.email, signInPage.password);
    signInPage.usernameDisplay.should('contain', signInPage.username);
  });
});
