import PageObject from '../PageObjects';

class SignInPageObject extends PageObject {
  email = 'arthur@gmail.com';
  password = '12345qwert';
  username = 'arthur';
  url = 'https://conduit.mate.academy/user/login';

  get emailField() {
    return cy.get('input[type="email"]');
  }

  get passwordField() {
    return cy.get('input[type="password"]');
  }

  get signInButton() {
    return cy.get('button[type="submit"]');
  }

  get usernameDisplay() {
    return cy.get('.nav-link');
  }

  fillAndSubmitSignInForm(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.signInButton.click();
  }
}

export default SignInPageObject;
