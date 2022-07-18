class LoginPage {
    private emailInput: string;
    private passwordInput: string;
    private loginBtn: string;

    constructor() {
        // its always a good practice to use uique identifiers, so i didnt change them
        this.emailInput = "#email";
        this.passwordInput = "#passwd";
        // Eliminate span, If the purpose is to click a button its unnecesary to reach for the span element, we can just eliminate this extra step and click the container
        this.loginBtn = "#SubmitLogin";
    }

    public login(email: string, password: string): void {
        cy.get(this.emailInput).type(email)
        cy.get(this.passwordInput).type(password)
        cy.get(this.loginBtn).click()
    }
}

export { LoginPage }
