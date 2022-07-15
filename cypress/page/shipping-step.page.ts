class ShippingStepPage {
    private termsAndConditionsCheckbox: string;
    private continueCheckoutBtn: string;

    constructor() {
        this.termsAndConditionsCheckbox = "#cgv";
        this.continueCheckoutBtn = ".cart_navigation > .button > span";
    }

    public acceptTermsAndConditions(): void {
        cy.get(this.termsAndConditionsCheckbox).check();
    }

    public goToPaymentStep(): void {
        cy.get(this.continueCheckoutBtn).click();
    }
}

export { ShippingStepPage }
