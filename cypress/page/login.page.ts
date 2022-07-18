class LoginPage {
    private emailInput: string;
    private passwordInput: string;
    private loginBtn: string;

    constructor() {
        this.emailInput = "#email";
        this.passwordInput = "#passwd";
        this.loginBtn = "#SubmitLogin > span";
    }

    public login(email: string, password: string): void {
        cy.get(this.emailInput).type(email)
        cy.get(this.passwordInput).type(password)
        cy.get(this.loginBtn).click()
    }
}

export { LoginPage }
