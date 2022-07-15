class LoginPage {
    private emailInput: string;
    private passwordInput: string;
    private loginBtn: string;

    constructor() {
        this.emailInput = "#email";
        this.passwordInput = "#passwd";
        this.loginBtn = "#SubmitLogin > span";
    }

    public fillLoginForm(email: string, password: string): void {
        cy.get(this.emailInput).type(email)
        cy.get(this.passwordInput).type(password)
    }


    public login(): void {
        cy.get(this.loginBtn).click()
    }
}

export { LoginPage }